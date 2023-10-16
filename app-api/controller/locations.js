var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
    };
    var mongoose = require('mongoose');
    var Loc = mongoose.model('new');
    module.exports.locationsCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
    module.exports.locationsListByDistance = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };

module.exports.locationsReadOne = async function (req, res) {
try {
const location = await
Loc.findById(req.params.locationid).exec();
sendJsonResponse(res, 200, location);
console.log(location)
} catch (err) {
// Handle the error
sendJsonResponse(res, 500, { error: 'An error occurred' });
}
};
    module.exports.locationsUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
    module.exports.locationsDeleteOne = async function (req, res) {
        const locationId = req.params.locationid;
      
        try {
          // Find the location by ID and remove it
          const location = await Loc.findByIdAndRemove(locationId).exec();
      
          if (!location) {
            // If the location is not found, return a 404 response
            sendJsonResponse(res, 404, { error: 'Location not found' });
            return;
          }
      
          // If the location was successfully deleted, return a success response
          sendJsonResponse(res, 200, { status: 'success' });
        } catch (err) {
          // Handle the error
          sendJsonResponse(res, 500, { error: 'An error occurred' });
        }
      };
    module.exports.locationsCreate = function (req, res) {
        console.log(req.body);
        const { title,content } = req.body;
        const newLocation = {
        title,
        content
    };
        Loc.create(newLocation)
        .then((location) => {
        console.log('Location created:', location);
        return res.status(201).json(location);
        })
        .catch((err) => {
        console.error(err);
        return res.status(400).json({ error: 'Could not create location' });
        });
        };