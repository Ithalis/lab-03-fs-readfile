'use strict';

const fs = require('fs');
module.exports = exports = {};

exports.textFiles = [];

exports.readFiles = function(){
  fs.readFile(`${__dirname}/../data/one.txt`, function(err, data){
    if(err) throw err;
    console.log(`One: ${data.toString('hex', 0, 8)}`);
    exports.textFiles.push(data.toString('hex', 0, 8));
  });
  fs.readFile(`${__dirname}/../data/two.txt`, function(err, data){
    if(err) throw err;
    console.log(`Two: ${data.toString('hex', 0, 8)}`);
    exports.textFiles.push(data.toString('hex', 0, 8));
  });
  fs.readFile(`${__dirname}/../data/three.txt`, function(err, data){
    if(err) throw err;
    console.log(`Three: ${data.toString('hex', 0, 8)}`);
    exports.textFiles.push(data.toString('hex', 0, 8));
  });
};
