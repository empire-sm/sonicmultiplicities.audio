const readline = require('readline')

const latitude = 40.741895
const longitude = -73.989308

const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
})

rl.question('What type of episode? [full/trailer/bonus]', (epType) => {
  switch (epType) {
    case 'full':
    case 'trailer':
    case 'bonus':
    default:
      break
  }
  rl.question('Title of the episode?', (epTitle) => {
    const title = epTitle
    console.log(title)
    rl.question('Summary:', (epSum) => {
      const summary = epSum
      console.log(epSum)
      rl.question('Image URL (leave blank for default):', (imgUrl) => {
        switch(imgUrl) {
          case '':
          default:
            break
        }
        console.log(imgUrl)
        rl.question('Alright, wheres this file:', (filePath) => {
          console.log(filePath)
        })
      })
    })
  })
})
