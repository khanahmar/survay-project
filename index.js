const button = document.querySelector(".btn")
const icons = document.querySelectorAll(".icn")
const iconsCont = document.querySelector(".icons")
const selectCont = document.querySelector(".select")
const reviewCont = document.querySelector(".review")
const feedback = document.querySelector(".feedback")
let text
function removeClass() {
  icons.forEach((icon) => {
    icon.classList.remove("active")
    text = ""
  })
}

icons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    removeClass()
    icon.classList.add("active")
    text = icon.querySelector("small").innerText
  })
})

button.addEventListener("click", (e) => {
  selectCont.classList.add("disable")
  reviewCont.classList.remove("disable")
  feedback.innerText = text
})
