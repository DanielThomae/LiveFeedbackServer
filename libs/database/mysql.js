var mysql = require('mysql');
var config = require('../../config.json');

let connection;
exports.connection = connection;

exports.connectDatabase = () => {
    this.connection = mysql.createConnection({
        host: config.mysqlHost,
        user: config.mysqlUser,
        password: config.mysqlPassword,
        database: config.mysqlDatabase
    });

    this.connection.connect();
}

exports.execQuery = function (sqlString, success, error) {
    this.connection.query(sqlString, function (_error, _results, _fields) {
        if (_error) {
            error(_error);
            return;
        }

        success(_results);
    });
}

exports.escapeString = function (_string) {
    return this.connection.escape(_string);
}