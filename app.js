const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const PORT = 3000
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// routes setting
app.use(express.static('public'))
app.get('/', (req, res) => {
  const movieOne = {
    id: 1,
    title: 'Jurassic World 3: Fallen Kingdom',
    image: 'https://movie-list.alphacamp.io/posters/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg'
  }
  const numberList = [1, 2, 3, 4, 5, 6, 7, 8]
  res.render('index', { movie: movieOne, numberList: numberList})
})

// start and listen on the Express server
app.listen(PORT, () => {
  console.log(`Express is listening on  http://localhost:${PORT}`)
})