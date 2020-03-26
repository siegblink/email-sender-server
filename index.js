const express = require('express')
const dotenv = require('dotenv').config()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const app = express()

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    function(accessToken) {
      console.log(accessToken)
    }
  )
)

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
)

const PORT = process.env.PORT || 5000
app.listen(PORT, function() {
  console.log(`Server running on port ${PORT}`)
})
