/*news page*/
module.exports.nw = function(req, res){
  res.render('news', { title: 'nw' });
};
module.exports.mh = function(req, res){
  res.render('merch', { title: 'mh' });
};
module.exports.wp = function(req, res){
  res.render('wpty', { title: 'wp' });
};
module.exports.cv = function(req, res){
  res.render('cineverse', { title: 'cv' });
};


/* GET 'signin' page */
module.exports.signin = function(req, res){
  res.render('signin', { title: 'signin' });
};
/* GET 'register' page */
module.exports.register = function(req, res){
  res.render('register', { title: 'register' });

};
