var projectsService = require('./rooms.service/rooms.service.route');

exports.importAll = (_app, _database) =>{
    projectsService.import(_app, _database);
} 