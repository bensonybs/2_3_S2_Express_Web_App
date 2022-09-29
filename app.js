const express = require('express')
const app = express()
const PORT = 3000

// setting the route and corresponding response
app.get('/', (req, res) => {
  res.send(`This is Express Web App`)
})

// Listen the server when it started
app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})