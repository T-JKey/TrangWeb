const selectInput = document.querySelector(".select-input");
const edit = document.querySelector(".edit");
const selectInputList = document.querySelector(".select-input__list");

function eventSelectInputClick(e) {
  e.preventDefault();

  // khi bấm vào
  // nếu top == 0 -> 145px
  if (selectInputList.style.display === "none") {
    selectInputList.style.display = "block";
    edit.style.top = "145px";
  } else {
    selectInputList.style.display = "none";
    edit.style.top = "0px";
  }
}
selectInput.addEventListener("click", eventSelectInputClick);
