var express = require('express');
var router = express.Router();

//router.use(function(req, res, next) {
//    // do logging
//    console.log('Something is happening.');
//    next(); // make sure we go to the next routes and don't stop here
//});
//
//// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
////router.get('/', function(req, res,next) {
////    res.reder('index',{ message: 'hooray! welcome to our api!' });
////
////});
//router.get('/', function(req, res) {
//    res.reder('index');
//});

















/* GET home page. */
//app.get('/', routes.index);
router.get('/', function(req, res) {

    res.render('index');

});
router.post('/api/todos', function(req, res) {
  // res.status(status).send({message:"vccv"})
    res.render('pages/badar');
   // res.render("badar");
});
module.exports = router;
