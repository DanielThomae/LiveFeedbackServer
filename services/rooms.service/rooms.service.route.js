var controller = require('./rooms.service.controller');

// Main-Function import
exports.import = function (_app, _database) {
    _app.get('/api/v1/rooms/', function (req, res) {
        controller.getAllRooms(req, res, _database);
    })
        .get('/api/v1/rooms/:id', function (req, res) {
            controller.getRoom(req, res, _database);
        })
        .post('/api/v1/rooms', (req, res) => {
            controller.createRooms(req, res, _database);
        })
        .put('/api/v1/rooms/:id?', function (req, res) {
            controller.updateRooms(req, res, _database);
        })
        .delete('/api/v1/rooms/:id?', function (req, res, _database) {
            controller.deleteRooms(req, res, _database);
        })
}
