let sideBar = document.querySelector('.aside-right')
let hamburger = document.querySelector('.fa-bars')

hamburger.addEventListener('click', (e) => {
  hamburger.classList.toggle('clicked')
  sideBar.classList.toggle('slide-in')
})
window.addEventListener('click', (e) => {
  let checkSide = e.target.classList.contains('aside-right')
  let checkClicked = e.target.classList.contains('fa-bars')
  if (!checkClicked && !checkSide) {
    hamburger.classList.toggle('clicked')
    sideBar.classList.toggle('slide-in')
  }
})
