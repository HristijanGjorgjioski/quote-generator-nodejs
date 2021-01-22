const express = require('express');
const fs = require('fs');
let ejs = require('ejs');

const templateString = fs.readFileSync('./views/cards-view.ejs', 'utf-8');

const app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
  res.send(ejs.render(templateString));
});

app.listen(3000, (req, res) => {
  console.log("Server running on port 3000..")
});
