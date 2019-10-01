
var env = process.env.NODE_ENV || 'dev'

var config = {
        dev : {
            connection_params: {
                host     : process.env.host,
                user     : process.env.user,
                password : process.env.password,
                database : process.env.database,
                timezone : process.env.timezone,
            },
            secret_key : process.env.secret_key
        }
        
}

module.exports = config[env];