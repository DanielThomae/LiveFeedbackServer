
// Get a all projects
exports.getAllRooms = (req, res, database) => {
    let sqlString = "SELECT * FROM rooms WHERE active = 1";

    database.execQuery(sqlString,
        function (results) {
            res.send(JSON.stringify(results));
        }, function (error) {
            console.log(error);
            res.status(404).send({
                "msg": "Could find a project",
                "errorCode": "5.0.1"
            });
        })
}

// Get a project
exports.getRoom = (req, res, database) => {
    let itemID = parseInt(req.params.id);

    if (Number.isNaN(itemID)) {
        // Return error
        res.status(400).send({
            "msg": "Could not get room",
            "errorCode": "5.1.1"
        })
    }
    else {
        itemID = database.escapeString(itemID);
        let sqlString = `SELECT * FROM rooms WHERE active = 1 AND id = ${itemID}`;

        database.execQuery(sqlString,
            function (results) {
                res.send(JSON.stringify(results));
            }, function (error) {
                console.log(error);
                res.status(404).send({
                    "msg": "Could find a room",
                    "errorCode": "5.1.2"
                });
            })
    }
}

// Create a project
exports.createRoom = (req, res, database) => {

    console.log(req.body);

    let name = req.body.name;
    let conectionKey = req.body.conectionKey;

    if (name == null) {
        let error = new Object({
            "msg": "Name not send",
            "errorCode": "5.2.1"
        })
        res.status(400).send(JSON.stringify(error))
        return
    }

    let insertQuery = "INSERT INTO rooms` (`name`, `conectionKey`) VALUES (" + database.escapeString(name) + ", " + conectionKey + ");";
    database.execQuery(insertQuery,
        function (results) {
            res.status(200).send({
                "msg": "Room created!"
            });
        }, function (error) {
            console.log(error);
            res.status(404).send({
                "msg": "Error while creating Room",
                "errorCode": "5.2.4"
            });
        })
}

// Update a project
exports.updateRoom = (req, res) => {

    let id = req.params.id;
    if (id == null || Number.isNaN(id)) {
        let error = new Object({
            "msg": "Name not send",
            "errorCode": "5.3.1"
        })
        res.status(400).send(JSON.stringify(error))
        return;
    }

    // Check if project exists
    //------------------------------------------------


    //------------------------------------------------

    let name = req.body.name;
    let conectionKey = req.body.conectionKey;

    if (name == null) {
        let error = new Object({
            "msg": "Name not send",
            "errorCode": "5.3.1"
        })
        res.status(400).send(JSON.stringify(error))
        return
    }

    if (conectionKey == null || Number.isNaN(conectionKey)) {
        let error = new Object({
            "msg": "conectionKey not send",
            "errorCode": "5.3.2"
        })
        res.status(400).send(JSON.stringify(error))
        return
    }

    res.status(200).send({ "msg": "created" })
}

exports.deleteProject = function (req, res) {
    let id = req.params.id;
    if (id == null || Number.isNaN(id)) {
        let error = new Object({
            "msg": "Name not send",
            "errorCode": "5.3.1"
        })
        res.status(400).send(JSON.stringify(error))
        return;
    }

    // Check if project exists
    //------------------------------------------------


    //------------------------------------------------


    // project.active = false;
    // save to database
}