
let baseDelay = 20; 
const speedSlider = document.getElementById('changeSpeed');
const speedLabel = document.getElementById('arSpeed');

function updateDelayFromSlider() {
  const s = Number(speedSlider.value);

  let multiplier;
  switch (s) {
    case 1: multiplier = 1; break;
    case 2: multiplier = 10; break;
    case 3: multiplier = 100; break;
    case 4: multiplier = 1000; break;
    case 5: multiplier = 10000; break;
  }

  const delay = Math.max(2, Math.floor(1000 / Math.sqrt(multiplier)));
  baseDelay = delay;
  speedLabel.innerText = getVisualSpeed();
}
speedSlider.addEventListener('input', updateDelayFromSlider);
updateDelayFromSlider();

function div_update(div, heightPx, color) {
  return new Promise(resolve => {
    setTimeout(() => {
      if (heightPx != null) div.style.height = `${heightPx}px`;
      if (color) div.style.backgroundColor = color;
      resolve();
    }, baseDelay);
  });
}
