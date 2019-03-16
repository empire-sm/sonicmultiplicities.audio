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
  items: [
  {
    title: '▲',
    description: 'Joseph Werle and Michael Dinner, acoustic guitars',
    url: 'http://sonicmultiplicities.audio/1.mp3',
    categories: ['Music'],
    guid: 0001,
    author: '▲',
    date: 'Jan 31, 2019',
    enclosure: {
      url: 'http://sonicmultiplicities.audio/1.mp3',
      file: '../releases/1.mp3',
      type: 'audio/mpeg'
    },
    itunesDuration: 736
  },
  {
    title: '▲▲',
    description: 'Joseph Werle and Tyler Dinner, acoustic guitars',
    url: 'http://sonicmultiplicities.audio/2.mp3',
    categories: ['Music'],
    guid: 0002,
    author: '▲▲',
    date: 'Mar 1, 2019',
    enclosure: {
      url: 'http://sonicmultiplicities.audio/2.mp3',
      file: '../releases/2.mp3',
      type: 'audio/mpeg'
    },
    itunesDuration: 657
  },
  ]
}
