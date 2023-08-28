const value= document.querySelector('.value')
const reset = document.querySelector(".reset");
const increase= document.querySelector('.increase')
const decrease = document.querySelector(".decrease");

value.style.fontSize = '6rem'
value.style.fontWeight = "bold";


let count = 0;

increase.addEventListener('click', ()=>{
  count++
  value.style.color='green'
 value.textContent= count
})

decrease.addEventListener("click", () => {
  count--;
  value.style.color = "red";
  value.textContent = count;
});

reset.addEventListener("click", () => {
  count = 0;
  value.style.color = "black";
  value.textContent = count;
});


// ANOTHER WAY


// const btns = document.querySelectorAll('.btn')
// const value = document.querySelector('.value')

// let count = 0;

// btns.forEach(btn => btn.addEventListener('click', () => {
//   if (btn.classList.contains('increase')) {
//     count++
//   } else if(btn.classList.contains('decrease')) {
//     count--
//   } else {
//     count=0
//   }
//   value.textContent = count;
// }))


