#!/usr/bin/node
const fileSelector = require('fs');
const request = require('request');
const url = process.argv[2];
const arg = process.argv[3];
request(url, function (err, reply, data) {
  if (err) return console.log(err);
  else {
    fileSelector.writeFile(arg, data, 'utf-8', function (err) {
      if (err) return console.log(err);
    });
  }
});
