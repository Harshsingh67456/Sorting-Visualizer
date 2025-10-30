async function Bubble() {
  const n = div_sizes.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      // highlight pair
      await div_update(divs[j], null, "yellow");
      await div_update(divs[j+1], null, "orange");

      if (div_sizes[j] > div_sizes[j+1]) {
        swapped = true;
        // swap data
        [div_sizes[j], div_sizes[j+1]] = [div_sizes[j+1], div_sizes[j]];
        // animate height change
        await div_update(divs[j], div_sizes[j], "red");
        await div_update(divs[j+1], div_sizes[j+1], "red");
      }
      // reset colors
      await div_update(divs[j], null, "#260022");
      await div_update(divs[j+1], null, "#260022");
    }
    // mark sorted element
    await div_update(divs[n - i - 1], null, "green");
    if (!swapped) break;
  }
  // mark all green at end
  for (let k = 0; k < n; k++) await div_update(divs[k], null, "green");
  enable_buttons();
}
