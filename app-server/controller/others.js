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
  content: 'Loc8r is the application you’ll build throughout this book. It displays differently on different devices, showing a list of places and details about each place, and allows visitors to log in and leave reviews.'
};
/* GET 'register' page */
module.exports.register = function(req, res){
  res.render('register', { title: 'register' });
  content: 'Loc8r is the application you’ll build throughout this book. It displays differently on different devices, showing a list of places and details about each place, and allows visitors to log in and leave reviews.'
};
