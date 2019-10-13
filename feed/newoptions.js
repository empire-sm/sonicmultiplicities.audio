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
      { "text": "Arts", "subcats": [ { "text": "Performing Arts" } ] },
      { "text": "Music", "subcats": [ { "text": "Music Commentary" }, { "text": "Music Interviews" } ] },
      { "text": "Society & Culture", "subcats": [ { "text": "Personal Journals" } ] }
    ],
    itunesAuthor: 'Andrew Grathwohl'
  },
  items: [{
    title: 'SM000: Introduction',
    description: "Introducing this feed, Andrew Grathwohl ruminates upon the artistic meaning behind the Sonic Multiplicities platform, and why it is so unfit for today's traditional distribution workflows. If you want to know why a serious composer and many serious musicians are all about releasing music via a podcast feed, give this brief narrative overture a gander. Never heard of Sonic Multiplicities before and want to know what the hell we're talking about? Check out our <a href='https://sonicmultiplicities.audio'>home page</a> at https://sonicmultiplicities.audio and brace yourself for its eery Geocities vibes.",
    url: 'https://s3.amazonaws.com/sonicmultiplicities.audio/feed/SM000.mp3',
    categories: ['Music'],
    guid: 'SM000',
    author: 'Andrew Grathwohl',
    date: 'October 13, 2019',
    'lat': 0.000000,
    'long': 0.000000,
    enclosure: {
      url: 'https://s3.amazonaws.com/sonicmultiplicities.audio/feed/SM000.mp3',
      file: '../releases/SM000.mp3',
      type: 'audio/mpeg'
    },
    itunesSubtitle: 'Sonic Multiplicities introduction, by Andrew Grathwohl',
    itunesDuration: 114,
    itunesExplicit: false,
    itunesKeywords: ['music', 'experimental', 'avant-garde', 'electroacoustic', 'computer', 'linux', 'audio'],
    itunesTitle: 'SM000: Introduction',
    itunesImage: 'https://sonicmultiplicities.audio/triangle.png',
    itunesSeason: 2019,
    itunesEpisode: 1,
  }]
}
