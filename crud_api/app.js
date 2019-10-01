var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
var routes = require('./routes/routes');

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/fav', routes);

app.use(function (err, req, res, next) {
    if (err.name === 'permission_denied') {
      return res.status(403).send({message: 'Forbidden'});
    }

    if (err.name === 'UnauthorizedError') {
        return res.status(401).send({message: 'Unauthorized'});
    }

    next();

});

app.get('/', (req, res) => {  
    res.send('Hello web app!')
})

app.listen(port, () => console.log(`App listening on port ${port}!`))
