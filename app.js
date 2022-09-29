const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const PORT = 3000
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// routes setting
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.render('index')
})

// start and listen on the Express server
app.listen(PORT, () => {
  console.log(`Express is listening on  http://localhost:${PORT}`)
})