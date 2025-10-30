
const inp_as = document.getElementById('changeSize');
let array_size = Number(inp_as.value);
const inp_gen = document.getElementById("a_generate");
const inp_aspeed = document.getElementById("changeSpeed");
const butts_algos = document.querySelectorAll(".sortMethods button");

let div_sizes = [];
let divs = [];
const cont = document.getElementById("array_container");


window.addEventListener('load', generate_array);
inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", () => { array_size = Number(inp_as.value); generate_array(); });
for (let btn of butts_algos) btn.addEventListener("click", runalgo);


function generate_array() {
  cont.innerHTML = "";
  div_sizes = [];
  divs = [];
  array_size = Number(inp_as.value);
  document.getElementById("arrayNo").innerText = array_size;

  for (let i = 0; i < array_size; i++) {
    const val = Math.floor(Math.random() * 300) + 20; 
    div_sizes.push(val);

    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = `${val}px`;
  
    const width = Math.max(6, Math.floor((cont.clientWidth - 20) / array_size) - 6);
    bar.style.width = `${width}px`;
    bar.style.backgroundColor = "#260022";
    cont.appendChild(bar);
    divs.push(bar);
  }

  document.getElementById('arSpeed').innerText = getVisualSpeed();
}

function disable_buttons() {
  butts_algos.forEach(b => b.disabled = true);
  inp_as.disabled = true;
  inp_gen.disabled = true;
  inp_aspeed.disabled = true;
}
function enable_buttons() {
  butts_algos.forEach(b => b.disabled = false);
  inp_as.disabled = false;
  inp_gen.disabled = false;
  inp_aspeed.disabled = false;
}

function runalgo() {
  disable_buttons();
  const algo = this.innerText.trim();
  switch (algo) {
    case "Bubble Sort": Bubble(); break;
    case "Selection Sort": Selection_sort(); break;
    case "Insertion Sort": Insertion(); break;
    case "Quick Sort": Quick(); break;
    default: enable_buttons(); break;
  }
}

function getVisualSpeed() {
  const s = Number(inp_aspeed.value);
  switch (s) {
    case 1: return 1;
    case 2: return 10;
    case 3: return 100;
    case 4: return 1000;
    case 5: return 10000;
    default: return 100;
  }
}
