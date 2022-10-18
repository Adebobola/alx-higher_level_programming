#!/usr/bin/node
const file = process.argv[2];
const data = process.argv[3];
const fileSelector = require('fs');

fileSelector.writeFile(file, data, 'utf8', function (err) {
  if (err) return console.log(err);
}
);
