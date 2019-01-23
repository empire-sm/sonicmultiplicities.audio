const express = require('express')
const serve = require('serve-static')

const app = express()

app.use(serve('public/', {'index': ['playlist.html', 'index.html']}))
app.use(serve('releases/', { 'index': false }))

app.listen(80)
