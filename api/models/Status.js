/**
* Status.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models

'use strict';
var bluebird = require('bluebird'),
    fs = bluebird.promisifyAll(require('fs'));

//var restrictPath = __dirname+'/../config/restrict.json';
var restrictPath = 'api/config/restrict.json';

console.log("we are going to look in",restrictPath);

fs
.readFileAsync(restrictPath)
.then(function(contents){
    console.log(contents);
    console.log(contents.toString('utf-8'));
    var mood = JSON.parse(contents.toString('utf-8')); 
    
})
.catch(console.error);
*/
module.exports = {

  attributes: {
    mood: {type: "string",
           in: sails.config.restrict.mood,//['happy', 'sad', 'denied']
           required: true
          },
    trigger: {
        type: "string",
        in: sails.config.restrict.trigger,
        required: true
    },
    happy: {
        type: "integer",
        required: true
    }
  }
}; 
