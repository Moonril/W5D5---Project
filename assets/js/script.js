/* cambio colore navbar */

const navbar = document.querySelector('.navbar-container')
const header = document.querySelector('header')
const greenButton = document.getElementsByClassName('buttons-header') 

window.addEventListener('scroll', () => {
    const headerBottom = header.offsetHeight
    if (window.scrollY > headerBottom) {
        navbar.style.backgroundColor = '#fff'
        greenButton[0].style.backgroundColor = '#1a8917'
    } else {
        navbar.style.backgroundColor = '#ffc017'
        greenButton[0].style.backgroundColor = '#191919'
    }
})