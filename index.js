require('dotenv').config()
const axios = require('axios')
const express = require('express')
const app = express()
// const API_KEY = 'farts'
const API_KEY = process.env.API_KEY

app.get('/', (req, res) => {
    axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=twin+peaks`)
    .then(response => {
        res.send(response.data)
    })
})

app.listen(3000, () => {
    console.log('Listening on tha port')
})