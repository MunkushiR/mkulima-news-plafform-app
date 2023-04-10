const apiKey = 'https://api.openweathermap.org/data/2.5/weather?q';
const city = 'nairobi';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const temperature = Math.round(data.main.temp - 273.15);
    const weatherDescription = data.weather[0].description;
    const location = data.name;
    const weatherElement = document.getElementById('weather-info');
    weatherElement.innerHTML = `Temperature in ${location}: ${temperature}°C, ${weatherDescription}`;
  })


  
  .catch(error => console.error(error));
  function showAlert(message, type) {
    const alertElement = document.createElement('div');
    alertElement.className = `alert ${type}`;
    alertElement.textContent = message;
    const container = document.querySelector('.container');
    const form = document.querySelector('form');
    container.insertBefore(alertElement, form);
  
    setTimeout(() => alertElement.remove(), 3000);
  }
  const quotes = [
    'The farmer is the only man in our economy who buys everything at retail, sells everything at wholesale, and pays the freight both ways.',
    'Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals, and happiness.',
    'Farming looks mighty easy when your plow is a pencil and you\'re a thousand miles from the corn field.',
    'The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings.',
    'The farmer has to be an optimist or he wouldn\'t still be a farmer.'
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = quotes[randomIndex];
  }
  
  
