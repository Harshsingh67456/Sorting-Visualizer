async function Quick() {
  await quickSort(0, div_sizes.length - 1);

  for (let i = 0; i < divs.length; i++) await div_update(divs[i], null, "green");
  enable_buttons();
}

async function quickSort(low, high) {
  if (low < high) {
    const pi = await partition(low, high);
    await quickSort(low, pi - 1);
    await quickSort(pi + 1, high);
  }
}

async function partition(low, high) {
  const pivot = div_sizes[high];
  await div_update(divs[high], null, "orange"); 
  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    await div_update(divs[j], null, "yellow");
    if (div_sizes[j] < pivot) {
      i++;
      [div_sizes[i], div_sizes[j]] = [div_sizes[j], div_sizes[i]];
      await div_update(divs[i], div_sizes[i], "red");
      await div_update(divs[j], div_sizes[j], "red");
    }
    await div_update(divs[j], null, "#260022");
  }
  // place pivot in correct position
  [div_sizes[i + 1], div_sizes[high]] = [div_sizes[high], div_sizes[i + 1]];
  await div_update(divs[i + 1], div_sizes[i + 1], "green");
  await div_update(divs[high], null, "#260022");
  return i + 1;
}
