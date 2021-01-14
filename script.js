let sideBar = document.querySelector('.aside-right')
let hamburger = document.querySelector('.fa-bars')
const Top = document.querySelector(".toTop")

hamburger.addEventListener('click', (e) => {
  hamburger.classList.toggle('clicked')
  sideBar.classList.toggle('slide-in')
})
window.addEventListener('click', (e) => {
  let checkSide = e.target.classList.contains('aside-right')
  let checkClicked = e.target.classList.contains('fa-bars')
  if (!checkClicked && !checkSide) {
    hamburger.classList.remove('clicked')
    sideBar.classList.remove('slide-in')
  }
})
window.addEventListener('scroll', scrollFunction)

function scrollFunction() {
  if(window.pageYOffset>300) {
    Top.style.display = "flex"
  } else {
    Top.style.display = "none"
  }
}
Top.addEventListener('click', () => {
  window.scroll(0,0)
})