//const express = require('express')
import express from 'express'

const app = express()
const hostname = 'localhost'
const port = 2002

app.get('/', function (req, res) {
    res.send('<h3>Hello World NodeJS KimThuLuu</h6>')
})
app.listen(port, hostname, () => {
    console.log(`Hello KimThu, I'm running server at http://${hostname}:${port}/`)
})