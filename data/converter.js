const lineReader = require('line-reader');
const fs = require('fs');

const allLines = []
let starts = false
let current
lineReader.eachLine('sprueche.txt', function(line, last) {
  if (line) {
    if (starts) {
      current.text += line
    } else {
      starts = true
      current = {author: line, text: ''}
    }
  } else {
    starts = false
    allLines.push(current)
  }

  if(last){
    fs.writeFileSync("sprueche.json", JSON.stringify( allLines, null, 2))
  }
});

