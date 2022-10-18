#!/usr/bin/node
const arg = process.argv[2];
const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/' + arg;
request(url, function (err, reply, data) {
  if (err) return console.error(err);
  console.log(JSON.parse(data).title);
}
);
