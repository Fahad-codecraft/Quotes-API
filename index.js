const express = require('express');
const cors = require('cors');
const quotes = require('./quotes.json');
const app = express();
app.use(cors());
const PORT = process.env.PORT || 8001;

app.get('/', (req, res) => {
  const html = `
  <p>
    <a href="/api/quotes">for quotes click here</a>
  </p>
  `
  res.send(html);
})

app.get('/api/quotes', (req, res) => {
  return res.json(quotes);
})

app.get("/api/quotes/:id", (req, res) => {
  const id = Number(req.params.id);
  const quote = quotes.find(quote => quote.id === id);
  return res.json(quote)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});