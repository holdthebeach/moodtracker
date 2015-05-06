/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	boom: function(shout, slap){
        console.log("start of index");
        Status
        .create({mood: "bossatron"}) // ceate a user in the DB for me
        .then(function(createdMood){ // here is a copy of the user I create
            console.log("user mood",createdMood);// lets see what the user looks like in the server windows
            return slap.json(createdMood);   // lets send the copy of the user to the requesting brower
        })
        .catch(console.error);
        
        console.log("end of index");
    }
};

