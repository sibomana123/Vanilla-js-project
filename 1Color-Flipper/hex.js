const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
  let HexColor = '#'
  for (let i = 0; i < 6; i++){
    // you can call randomNumber as function referance or like this

    let randomNumber = Math.floor(Math.random() * hex.length);

    HexColor += hex[randomNumber];
    // console.log(HexColor);
  }

  color.textContent = HexColor;
  document.body.style.backgroundColor = HexColor;
})



// function randomNumber() {
//  return Math.floor(Math.random()* hex.length)
// }