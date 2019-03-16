const fs = require('fs')
const Podcast = require('podcast')
const feedOptions = require('./options')

const feed = new Podcast(feedOptions.feed)

let iNum = 0

feedOptions.items.forEach(item => {
  iNum += 1
  feed.addItem(item)
  console.log('Added the item %s', iNum)
})

console.log(feed)

const xml = feed.buildXml()

console.log(xml)

fs.writeFileSync('feed.xml', xml)

console.log('done')
