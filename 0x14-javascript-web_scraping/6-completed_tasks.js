#!/usr/bin/node
const url = process.argv[2];
const request = require('request');
request(url, function (err, reply, data) {
  if (!err) {
    const task = JSON.parse(data);
    const dic = {};
    for (let n = 0; n < task.length; n++) {
      const status = (task[n].completed);
      const key = task[n].userId.toString();
      if (status) {
        if (dic[key]) {
          dic[key] += 1;
        } else {
          dic[key] = 1;
        }
      }
    }
    console.log(dic);
  }
});
