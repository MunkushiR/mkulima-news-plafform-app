// Weather section
const weatherForm = document.querySelector('#weather form');
weatherForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const weatherFile = document.querySelector('#weather input[type="file"]').files[0];
// OpenWeatherMap API call
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${file.name}&appid=ca70b4bb2b225c9ca1d53bcd6803476b
`)
.then(response => response.json())
.then(data => {
  const weatherInfo = document.getElementById('weather-info');
  const weatherData = `
    <div>
      <h3>${data.name}, ${data.sys.country}</h3>
      <p>Current Temperature: ${data.main.temp} °F</p>
      <p>Feels Like: ${data.main.feels_like} °F</p>
    </div>
  `;
  weatherInfo.innerHTML = weatherData;
})
.catch(error => console.log(error));

});

// Finance section
const financeForm = document.querySelector('#finance form');
financeForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const financeFile = document.querySelector('#finance input[type="file"]').files[0];
});

// Market section
const marketForm = document.querySelector('#Market form');
marketForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const marketFile = document.querySelector('#Market input[type="file"]').files[0];

});
