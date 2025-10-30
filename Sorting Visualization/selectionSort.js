async function Selection_sort() {
  const n = div_sizes.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    await div_update(divs[minIdx], null, "yellow");
    for (let j = i + 1; j < n; j++) {
      await div_update(divs[j], null, "orange");
      if (div_sizes[j] < div_sizes[minIdx]) {
       
        if (minIdx !== i) await div_update(divs[minIdx], null, "#260022");
        minIdx = j;
        await div_update(divs[minIdx], null, "yellow");
      } else {
        await div_update(divs[j], null, "#260022");
      }
    }
    
    [div_sizes[i], div_sizes[minIdx]] = [div_sizes[minIdx], div_sizes[i]];
    await div_update(divs[i], div_sizes[i], "green");
    if (minIdx !== i) await div_update(divs[minIdx], div_sizes[minIdx], "#260022");
  }

  await div_update(divs[divs.length - 1], null, "green");
  enable_buttons();
}
