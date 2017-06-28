'use strict';

const fs = require('fs');
const expect = require('chai').expect;
const Buffer = require('buffer').buffer;
const fsReadModule = require(`${__dirname}/../lib/fs-read.js`);

const testData = ['646f6c6f72204c6f', '4c6f72656d206970', '697073756d206c6f'];

describe('fs-read', function(){
  describe('#readFiles', function(){
    let files = [];
    it('should return the first file first', function(done) {
      fs.readFile(`${__dirname}/../data/one.txt`, function(err, data) {
        files.push(data.toString('hex', 0, 8));
        expect(data.toString('hex', 0, 8)).to.equal(testData[0]);
        done();
      });
    });
    
    it('should return the second file second', function(done) {
      fs.readFile(`${__dirname}/../data/two.txt`, function(err, data) {
        files.push(data.toString('hex', 0, 8));
        expect(data.toString('hex', 0, 8)).to.equal('4c6f72656d206970');
        done();
      });
    });
    
    it('should return the third file last', function(done) {
      fs.readFile(`${__dirname}/../data/three.txt`, function(err, data) {
        files.push(data.toString('hex', 0, 8));
        expect(data.toString('hex', 0, 8)).to.equal('697073756d206c6f');
        done();
      });
    });
    
    it('should have the files in the correct order', function(done) {
      fsReadModule.readFiles();
      expect(files).to.deep.equal(testData);
      done();
    });
  });
});
