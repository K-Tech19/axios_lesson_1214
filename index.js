require('dotenv').config()
const axios = require('axios')
const express = require('express')
const app = express()
const API_KEY = process.env.API_KEY

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/search', (req, res) => {
    console.log(req.query)
    axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${req.query.searchTerm}`)
    .then(response => {
        res.send(response.data)
    })
})

app.listen(3000, () => {
    console.log('Listening on tha port')
})