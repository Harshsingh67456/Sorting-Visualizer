async function Insertion() {
  const n = div_sizes.length;
  for (let i = 1; i < n; i++) {
    let key = div_sizes[i];
    let j = i - 1;
    await div_update(divs[i], null, "orange");
    while (j >= 0 && div_sizes[j] > key) {
      div_sizes[j + 1] = div_sizes[j];
      await div_update(divs[j + 1], div_sizes[j + 1], "red");
      j--;
    }
    div_sizes[j + 1] = key;
    await div_update(divs[j + 1], div_sizes[j + 1], "green");
  }
  enable_buttons();
}
