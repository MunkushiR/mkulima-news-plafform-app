const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
const port = process.env.PORT || 3000;

// Set up body parser and EJS templating engine
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Set up routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/news', (req, res) => {
  // Load news articles from database or external API
  const newsArticles = [
    { title: 'New weather patterns expected in the coming months', date: 'April 1, 2023', content: 'lots of heavy rain.' },
    { title: 'Farmers receive new subsidies from government', date: 'May 27, 2023', content: 'wind and cold.' },
    { title: 'New agricultural technology reduces water usage', date: 'june 22, 2023', content: 'very dry and hot.' },
  ];
  res.render('news', { newsArticles });
});

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

