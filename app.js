var express = require('express')
var path = require('path')
var session = require('express-session')

const app = express()

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})

module.exports = app