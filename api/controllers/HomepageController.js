module.exports = {
	index: function (req, res){
        return res.ok(Status.find(), 'homepage') 
    }
};
