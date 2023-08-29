

const questions = document.querySelectorAll(".question");

questions.forEach(question => {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener('click', () => {
    // console.log(question);

    questions.forEach(item => {
      if (item != question) {
        item.classList.remove("show-text"); 
      }
    })

    question.classList.toggle("show-text");
  })


})




// plusBtn.forEach(icon => icon.addEventListener('click', () => {
 

//   icon.style.display = "none";
//   text.classList.replace("question-text", "show-text");
// }))





