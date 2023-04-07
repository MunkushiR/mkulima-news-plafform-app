// write code here
// toggle navbar
const hambuger = document.getElementById("hambuger")
const navbar = document.getElementById("menu")
const times = document.getElementById("times")

hambuger.addEventListener('click', () => {
    navbar.classList.toggle("hidden")

})

function changeDisplay() {
    hambuger.style.display = "none"
    times.style.display = "flex"
}

function toggleMenu() {
    navbar.classList.toggle("hidden")
    times.style.display = "none"
    hambuger.style.display = "flex"
    
}