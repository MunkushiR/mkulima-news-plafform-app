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

// api endpoints
const latestlUrl = "https://nameless-reef-64152.herokuapp.com/latests"
const localUrl = "https://nameless-reef-64152.herokuapp.com/locals"
const regionalUrl = "https://nameless-reef-64152.herokuapp.com/regionals"
const intUrl = "https://nameless-reef-64152.herokuapp.com/internationals"
const postsUrl = "https://nameless-reef-64152.herokuapp.com/posts"

// varriables




    
}