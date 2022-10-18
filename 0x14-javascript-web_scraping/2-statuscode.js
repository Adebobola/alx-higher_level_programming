#!/usr/bin/node
const url = process.argv[2];
const request = require('request');

request(url, function (err, reply, data) {
  if (err) {
    console.log('error:', err);
  } else console.log('code:', reply && reply.statusCode);
});
