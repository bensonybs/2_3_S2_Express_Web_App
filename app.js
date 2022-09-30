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
  res.render('index', { movies: movieList.results, numberList: numberList, imageUrl: imageUrl })
})
app.get('/movies/1', (req, res) => {
  const movie = {
    "id": 1,
    "title": "Jurassic World: Fallen Kingdom",
    "genres": [
      1,
      2,
      15
    ],
    "description": "Several years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar. Claire Dearing, the former park manager and founder of the Dinosaur Protection Group, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.",
    "release_date": "2018-06-06",
    "image": "c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg"
  }
  res.render('show', { movie: movie })
})

// start and listen on the Express server
app.listen(PORT, () => {
  console.log(`Express is listening on  http://localhost:${PORT}`)
})