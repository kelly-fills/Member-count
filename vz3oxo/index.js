// 1. Grab the save-el paragrah and store it in a variable called saveEl

let saveEl = document.getElementById("save-el");
let app = document.getElementById("app");

let count = 0;
document.addEventListener("click", function () {
  count += 1;
  //console.log(count);
  app.textContent = count;
});

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  app.textContent = 0;
  count = 0;
}
save();
