document.querySelector("button").addEventListener("click", () => {
  document.body.style.backgroundColor = generateColor();
  document.querySelector("span").textContent = generateColor().toUpperCase();
});

let generateColor = function () {
  return "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
};
