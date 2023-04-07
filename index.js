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




// functions
function getLatest() {
    fetch(latestlUrl)
     .then((response) => response.json())
     .then(data => {
        let output = '';
        data.slice(0, 1).forEach(latest => {

            output += `
            <div class="md:flex justify-bewtween lg:space-x-32 md:space-x-8">
                <div class="relative shadow-lg hover:shadow-xl hover:scale-105 hover:translate-2 hover:transform duration-500 text-center">
                    <img class="rounded-lg w-full" src="${latest.urlToImage}" alt="">
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <a class="md:text-4xl text-3xl text-white font-bold tracking-wide cursor-pointer hover:text-gray-100 href="${latest.url}">${latest.title}</a>
                        <p class="md:text-2xl text-lg font-medium mb-2">${latest.description}</p>
                        <h3 class="text-lg py-2 font-semibold text-green-200">${latest.author}, <span class="font-medium">${latest.name}</span></h3>
                    </div>
                </div>
                

    
}