
var express = require('express');
var router = express.Router();
const ctrlLocations=require('../controller/location');
const ctrlOthers=require('../controller/others');
/* GET home page. */router.get('/', ctrlLocations.homeList);
router.get('/location', ctrlLocations.locationInfo);
router.put('/location', ctrlLocations.locationInfo);
router.get('/location1', ctrlLocations.locationInfo1);
router.get('/location2', ctrlLocations.locationInfo2);
router.get('/location/review/new', ctrlLocations.addReview);
router.get('/mh',ctrlOthers.mh);
router.get('/nw',ctrlOthers.nw);
router.get('/wp',ctrlOthers.wp);
router.get('/cv',ctrlOthers.cv);
router.get('/signin',ctrlOthers.signin);
router.get('/register',ctrlOthers.register);
module.exports = router;