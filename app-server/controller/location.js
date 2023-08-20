module.exports.homeList= function(req,res){
    res.render('home',{title:'Home'});
};
module.exports.locationInfo= function(req,res){
    res.render('location-info',{title:'location '});
};
module.exports.locationInfo1= function(req,res){
    res.render('location-info1',{title:'review'});
};
module.exports.locationInfo2= function(req,res){
    res.render('location-info2',{title:'review'});
};
module.exports.addReview= function(req,res){
    res.render('location-review-form',{title:'review'});
};