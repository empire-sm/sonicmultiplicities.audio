const fs = require('fs')
const Podcast = require('podcast')
const feedOptions = require('./options')

const feed = new Podcast(feedOptions.feed)

feed.addItem(feedOptions.item)

console.log(feed)

const xml = feed.buildXml()

console.log(xml)

fs.writeFileSync('feed.xml', xml)

console.log('done')
