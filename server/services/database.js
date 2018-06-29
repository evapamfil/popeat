var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'Popeat'
});

connection.connect();

function sendQuery(query, callback) {
    connection.query(query, function(error, results, fields) {
        if (error) {
            callback(error);
        } else {
            callback(null, results);
        }
    });
}

module.exports = {
    sendQuery: sendQuery
};
