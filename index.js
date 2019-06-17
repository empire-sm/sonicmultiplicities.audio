const express = require('express')
const process = require('process')
const serve = require('serve-static')

const app = express()

app.use(serve('public/', {'index': ['index.html']}))
app.use(serve('releases/', { 'index': false }))
app.use(serve('feed/', { 'index': false }))
app.use(serve('narratives/', { 'index': false }))
app.use(serve('garrett/', { 'index': false }))
app.use(serve('scheduler/', { 'index': false }))

app.listen(process.env.PORT || 8080)
