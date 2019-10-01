var mysql = require('promise-mysql');
var config = require('../config');
var connection = null;

mysql.createConnection(config.connection_params)
.then(conn => {
    connection = conn;
    console.log("Created db connection successfully");
})
.catch(err => {
    console.log("Failed to create db connection", err)
});


/***************************************************
 ***************************************************
 fav db queries
 ***************************************************
 **************************************************/

async function getFav(){
    let query = `SELECT c.id, c.name, c.type, c.fav FROM favourite c`;                 
    return await connection.query(query);
}

async function updateFav(id, name, type, fav){
    let query = `UPDATE favourite SET name = '${name}',
                                      type = '${type}',
                                      fav = '${fav}' 
                                WHERE id = ${id}`
    return await connection.query(query);
}

async function insertFav(name, type, fav){   
    let query = `INSERT INTO favourite (name, type, fav) VALUES ('${name}', '${type}', '${fav}')`;
    console.log('query is', query);
    return await connection.query(query);
}

async function deleteFav(id){
    let query = `DELETE FROM favourite WHERE id = ${id}`;
    return await connection.query(query);
}

module.exports = {   
    insertFav,
    updateFav,
    getFav,
    deleteFav
};

