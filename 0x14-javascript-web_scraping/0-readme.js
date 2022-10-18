#!/usr/bin/node
const arg = process.argv[2];
const fileSelector = require('fs');

fileSelector.readFile(arg, 'utf8', (error, content) => {
  if (error) {
    console.log(error);
  } else {
    console.log(content);
  }
});
