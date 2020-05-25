//Open modal
function openModal() {
  let buttons = document.querySelectorAll(".btn-outline-secondary");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".aboutMe").style.display = "flex";
      updateUI();
    });
  });
}
//Close Modall
function closeModal() {
  document
    .querySelector(".aboutMe-modal-close")
    .addEventListener("click", function () {
      document.querySelector(".aboutMe").style.display = "none";
    });
}
/*
//Variable

//Open modal
function openModalOne() {
  let button1 = document.querySelector("#modal-one");
  button1.addEventListener("click", function () {
    document.querySelector(".aboutMe").style.display = "flex";
  });
}
function openModalTwo() {
  let button2 = document.querySelector("#modal-two");
  button2.addEventListener("click", function () {
    document.querySelector(".aboutMe").style.display = "flex";
  });
}
function openModalThree() {
  let button3 = document.querySelector("#modal-three");
  button3.addEventListener("click", function () {
    document.querySelector(".aboutMe").style.display = "flex";
  });
}
function openModalFour() {
  var button4 = document.querySelector("#modal-four");
  button4.addEventListener("click", function () {
    document.querySelector(".aboutMe").style.display = "flex";
  });
}
//Close Modall
function cloeModalOne() {
  let button1 = document.querySelector("#modal-one");
  button1.addEventListener("click", function () {
    document.querySelector(".aboutMe").style.display = "none";
  });
}
function closeModalTwo() {
  let button2 = document.querySelector("#modal-two");
  button2.addEventListener("click", function () {
    document.querySelector(".aboutMe").style.display = "none";
  });
}
function closeModalThree() {
  let button3 = document.querySelector("#modal-three");
  button3.addEventListener("click", function () {
    document.querySelector(".aboutMe").style.display = "none";
  });
}
function closeModalFour() {
  var button4 = document.querySelector("#modal-four");
  button4.addEventListener("click", function () {
    document.querySelector(".aboutMe").style.display = "none";
  });
}
*/
