'use strict';

const fs = require('fs');
const expect = require('chai').expect;
const Buffer = require('buffer').buffer;
const fsReadModule = require(`${__dirname}/../lib/fs-read.js`);

describe('fs-read', function(){
  describe('#readFiles', function(){
    it('should log the text files in numerical order, regardless of size', function(){
      fs.readFile(`${__dirname}/../data/one.txt`, function(err, data){
        let bufferData = data;
        expect(fsReadModule.textFiles[2]).to.equal(bufferData);
        done();
      });
    });
  });
});
