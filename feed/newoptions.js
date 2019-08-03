module.exports = {
  feed: {
    title: '▲ Presents: Sonic Multiplicities',
    description: 'The official podcast feed for works of Sonic Multiplicities performed by the ▲ Ensemble. Each episode presents a complete, unmodified Sonic Multiplicities session, heard here exactly as it was performed at The Cathedral, ▲ Ensemble\'s Brooklyn, NY HQ. Join us for an intimate and intense journey through the roaring musical psyches of some of NYC\'s finest free improvisers! Highly recommended for fans of electroacoustic music, free & avant-garde jazz, noise music, the violin and the SuperCollider programming language.',
    feedUrl: 'https://sonicmultiplicities.audio/feed.xml',
    siteUrl: 'https://sonicmultiplicities.audio',
    imageUrl: 'https://sonicmultiplicities.audio/triangle.png',
    author: 'Andrew Grathwohl',
    managingEditor: 'Andrew Grathwohl',
    copyright: '2019 Sacred Data, LLC',
    pubDate: 'May 20, 2019 04:00:00 GMT',
    ttl: '60',
    language: 'en',
    categories: ['Music'],
    itunesOwner: { name: 'Andrew Grathwohl', email: 'sm@grathwohl.me' },
    itunesImage: 'https://sonicmultiplicities.audio/triangle.png',
    itunesExplicit: false,
    itunesCategory: [
      { "text": "Music" },
      { "text": "Arts", "subcats": [ { "text": "Performing Arts" } ] },
      { "text": "Society & Culture", "subcats": [ { "text": "Personal Journals" } ] }
    ],
    itunesAuthor: 'Andrew Grathwohl'
  },
  items: [{
    title: 'SM001: Aboard the cargo freighter, Fair Lady - Adrift',
    description: 'Join master Sonicmeister, violinist, and music educator Garrett Semmelink as he summons the powers of Sonic Multiplicities to paint a hauntingly gorgeous picture of a cargo freighter amidst turbulent waters. Using only his instrument and the SM1.2 software interface, Semmelink grabs the listener in a sonic choke-hold, thrusting them into the freight workers\' inner despair - a place where there is nowhere to hide. Download this session in <a href="https://s3.amazonaws.com/sonicmultiplicities.audio/feed/downloads/SM001.opus">Opus</a> and <a href="https://s3.amazonaws.com/sonicmultiplicities.audio/feed/downloads/SM001.flac">FLAC</a>.',
    url: 'https://s3.amazonaws.com/sonicmultiplicities.audio/feed/SM001.mp3',
    categories: ['Music'],
    guid: 'SM001',
    author: 'Andrew Grathwohl',
    date: 'Aug 2, 2019',
    'lat': 0.000000,
    'long': 0.000000,
    enclosure: {
      url: 'https://s3.amazonaws.com/sonicmultiplicities.audio/feed/SM001.mp3',
      file: '../releases/SM001.mp3',
      type: 'audio/mpeg'
    },
    itunesSubtitle: 'Sonic Multiplicities #1, featuring Garrett Semmelink on violin & prepared violin.',
    itunesDuration: 1086,
    itunesExplicit: false,
    itunesKeywords: ['music', 'experimental', 'avant-garde', 'electroacoustic', 'computer', 'linux', 'audio'],
    itunesTitle: 'SM001: Aboard the cargo freighter, Fair Lady - Adrift',
    itunesImage: 'https://sonicmultiplicities.audio/triangle.png',
    itunesSeason: 2019,
    itunesEpisode: 1
  }]
}
