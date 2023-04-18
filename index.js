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

const displayWeather = document.getElementById("weather-news")

// add news updates
const url = "http://localhost:3000/news"

function getAllNews() {
    fetch(url)
     .then((res) => res.json())
     .then(data => {

        // weather news
        data.filter((item) => item.category === "weather").map((item) => {
            document.getElementById("weather-news").innerHTML += `
                <div>
                    <div>
                        <div class="">
                            <img class="w-full rounded-md" src=${item.imageUrl} >
                        </div>
                        <h2 class="mt-2 font-semibold text-lg text-gray-800">${item.title}</h2>
                        <h2 class="text-gray-800 font-medium">Written by: 
                            <span class="text-yellow-600">${item.author}</span>
                        </h2>
                        <p class="text-gray-600">
                            Category:
                            <span class="text-green-500">${item.category}</span>
                        </p>
                        <p class="text-sm mt-1 font-light text-gray-900">${item.content}</p>
                    </div>
                </div>
            `
        });


        // finance
        data.filter((item) => item.category === "finance").map((item) => {
            document.getElementById("finance-news").innerHTML += `
                <div>
                    <div>
                        <div class="">
                            <img class="w-full rounded-md" src=${item.imageUrl} >
                        </div>
                        <h2 class="mt-2 font-semibold text-lg text-gray-800">${item.title}</h2>
                        <h2 class="text-gray-800 font-medium">Written by: 
                            <span class="text-yellow-600">${item.author}</span>
                        </h2>
                        <p class="text-gray-600">
                            Category:
                            <span class="text-green-500">${item.category}</span>
                        </p>
                        <p class="text-sm mt-1 font-light text-gray-900">${item.content}</p>
                    </div>
                </div>
            `
        });


        // market
        data.filter((item) => item.category === "market").map((item) => {
            document.getElementById("market-news").innerHTML += `
                <div>
                    <div>
                        <div class="">
                            <img class="w-full rounded-md" src=${item.imageUrl} >
                        </div>
                        <h2 class="mt-2 font-semibold text-lg text-gray-800">${item.title}</h2>
                        <h2 class="text-gray-800 font-medium">Written by: 
                            <span class="text-yellow-600">${item.author}</span>
                        </h2>
                        <p class="text-gray-600">
                            Category:
                            <span class="text-green-500">${item.category}</span>
                        </p>
                        <p class="text-sm mt-1 font-light text-gray-900">${item.content}</p>
                    </div>
                </div>
            `
        });
        
    })
}




// post news
const form = document.getElementById("form")
form.addEventListener('submit', (e) => {
    e.preventDefault();

    postNewsUpdate();

    form.reset();

})

const selectOption = () => {
    const category = document.getElementById("category").value
    console.log(category)
}

function postNewsUpdate() {
    const postTitle = document.getElementById("post-title").value;
    const postAuthor = document.getElementById("post-author").value;
    const postContent = document.getElementById("post-content").value;
    const imageUrl = document.getElementById("image").value;
    const category = document.getElementById("category").value
    // console.log(category.value)



    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            title: postTitle,
            author: postAuthor,
            category: category,
            imageUrl: imageUrl,
            content: postContent
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            if (postTitle !== "" && category !== "" && imageUrl !== "" && postContent !== "") {
                alert("form submitted successfully!")
            } else {
                console.log("Please fill in the form!")
            }

    }) 

}



document.addEventListener("DOMContentLoaded", () => {
    getAllNews();


})

