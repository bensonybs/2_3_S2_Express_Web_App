const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const PORT = 3000
const movieList = require('./movies.json')
const imageUrl = 'https://movie-list.alphacamp.io/posters/' //This constant is left for learning how to concat string in handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// routes setting
app.use(express.static('public'))
app.get('/', (req, res) => {
  
  const numberList = [1, 2, 3, 4, 5, 6, 7, 8]
  res.render('index', { movies: movieList.results, numberList: numberList, imageUrl: imageUrl})
})

// start and listen on the Express server
app.listen(PORT, () => {
  console.log(`Express is listening on  http://localhost:${PORT}`)
})