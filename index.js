const express = require('express')
const dotenv = require('dotenv').config()
const app = express()

app.get('/', function(req, res) {
  res.send({ hi: 'there' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, function() {
  console.log(`Server running on port ${port}`)
})
