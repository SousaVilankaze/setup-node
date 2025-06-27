const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    const { hello } = require('./services/hello')
    res.send(hello())
})

module.exports = { app }