module.exports = {
  feed: {
    title: '▲',
    description: '▲',
    generator: '▲',
    feedUrl: 'http://sonicmultiplicities.audio/feed.xml',
    siteUrl: 'http://sonicmultiplicities.audio',
    imageUrl: 'http://sonicmultiplicities.audio/triangle.png',
    author: '▲',
    managingEditor: '▲',
    copyright: 'None',
    language: 'en',
    categories: ['Music'],
    itunesOwner: { name: '▲', email:'andrew@grathwohl.me'  },
    itunesImage: 'http://sonicmultiplicities.audio/triangle.png',
    itunesExplicit: false,
    itunesCategory: [{
      "text": "Music"
    }],
    itunesAuthor: '▲',
  },
  item: {
    title: '▲',
    description: 'Joseph Werle and Michael Dinner, acoustic guitars',
    url: 'http://sonicmultiplicities.audio/1.mp3',
    categories: ['Music'],
    author: '▲',
    date: new Date(),
    enclosure: {
      url: 'http://sonicmultiplicities.audio/1.mp3',
      file: '../releases/▲.mp3',
      type: 'audio/mpeg'
    },
    itunesDuration: 736
  }
}
