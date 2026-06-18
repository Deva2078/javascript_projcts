let colorCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

let display = document.getElementById("display");

const changeColor = () => {
  let randomColor = "#";
  let color = document.getElementById("color");

  for (let index = 0; index < 6; index++) {
    let randNo = Math.floor(Math.random() * 16);
    randomColor = randomColor + colorCodes[randNo];
  }

  color.innerHTML = randomColor;
  display.style.backgroundColor = randomColor;
};
