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
                <div class="md:flex flex-col space-y-8 hidden">
                <div class="relative shadow-lg hover:shadow-xl hover:scale-105 hover:translate-2 hover:transform duration-500">
                    <div class="w-1/2 float-right">
                        <img class="rounded-lg" src="${latest.urlToImage}" alt="">
                    </div>
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                        <a class="md:text-2xl text-lg text-white font-bold tracking-wide cursor-pointer hover:text-gray-100 href="${latest.url}">${latest.title}</a>
                        <p class="md:text-xl text-lg font-medium mb-2">${latest.description}</p>
                        <h3 class="text-lg py-2 font-semibold text-green-200">${latest.author}, <span class="font-medium">${latest.name}</span></h3>
                    </div>
                </div>
                <div class="relative shadow-lg hover:shadow-xl hover:scale-105 hover:translate-2 hover:transform duration-500">
                    <div class="w-1/2 float-right">
                        <img class="rounded-lg" src="${latest.urlToImage}" alt="">
                    </div>
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                        <a class="md:text-2xl text-lg text-white font-bold tracking-wide cursor-pointer hover:text-gray-100 href="${latest.url}">${latest.title}</a>
                        <p class="md:text-xl text-lg font-medium mb-2">${latest.description}</p>
                        <h3 class="text-lg py-2 font-semibold text-green-200">${latest.author}, <span class="font-medium">${latest.name}</span></h3>
                    </div>
                </div>
            </div>
        </div>
        `
    });

    document.getElementById("output").innerHTML = output;
    

 })
} 
// display local news
function getLocal() {
    fetch(localUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            let news = ''
            data.slice(0, 3).forEach(local => {
                
                news += `
                <div class="md:flex justify-bewtween">
                    <div class="bg-green-300 hover:bg-green-400 rounded-md shadow-lg hover:shadow-xl hover:scale-105 hover:translate-x-2 hover:transform duration-500">
                        <div class="">
                            <img class="rounded-t-lg" id="img-url" src="${local.image_url}" alt="">
                        </div>
                        <div class="pt-2 pb-4 px-6 my-8">
                            <h3 class="text-xl font-semibold text-gray-800">${local.title}</h3>
                            <p>${local.description}</p>
                            <h3 class="py-2 font-semibold text-green-800" href="${local.source_url}">By ${local.source_name}</h3>
                        </div>
                    </div>
                </div>
                `
            });

            document.getElementById("local-news").innerHTML = news;

        })

}


    
}