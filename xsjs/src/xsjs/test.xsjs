var connection = $.hdb.getConnection();


var query = 'SELECT * FROM "myapp.data::Context.Entity"';  
var rs = connection.executeQuery(query);

$.response.contentType = 'application/json; charset=utf-8';
$.response.setBody(JSON.stringify(rs));
