const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

colors.forEach((hexcol) => {
  renderColorBox(hexcol);
});

function renderColorBox(color) {
  const newBox = document.createElement("div");
  newBox.classList.add("color-box");
  newBox.style.backgroundColor = `${color}`;
  document.body.append(newBox);
}
