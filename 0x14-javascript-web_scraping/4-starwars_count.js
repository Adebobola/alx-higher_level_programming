#!/usr/bin/node
const url = process.argv[2];
const request = require('request');
request(url, function (err, reply, data) {
  if (err) return console.log('error:', err);
  else {
    let count = 0;
    const json = JSON.parse(data);
    for (const res of json.results) {
      for (const char of res.characters) {
        if (char.includes(18)) {
          count++;
        }
      }
    }
    console.log(count);
  }
});
