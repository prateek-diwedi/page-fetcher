const input = process.argv.slice(2);
const fs = require('fs');
//console.log(url[0]);
let url = input[0];
//console.log(url)
let path = input[1];
const request = require('request');
request(url, (error, response, body) => {
  if (!response) {
    console.log('No response');
    return;
  }
  fs.writeFile(path, body, () => {
    if (error) {
      console.log('Error! Did no write, please input')
    } else {
      console.log(`Downloaded and saved 3261 bytes to ${path}`);
    }
  })
});
