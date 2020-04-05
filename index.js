const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
require('./services/passport')

const app = express()
require('./routes/authRoutes')(app)

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const PORT = process.env.PORT || 5000
app.listen(PORT, function() {
  console.log(`Server running on port ${PORT}`)
})
