var db = require('../helpers/db');

var addFav = (req,res,next)=> {
    let name = req.body.name;
    let type = req.body.type;
    let fav = req.body.fav;
    
    db.insertFav(name, type, fav)
    .then(status => {
        console.log('status', status);
        res.status(200).json(status);
    })
    .catch(err => {
        console.log('err: ', err);
        res.status(500).json({message: 'Failed to add fav for user'});
    })
}


var getFav= (req,res,next)=> {
       
    console.log(' get Fav');
    db.getFav()
    .then(todo => {        
        res.status(200).json(todo);
    })
    .catch(err => {
        console.log('err: ', err);
        res.status(500).send({message: 'Failed to get fav for user'});
    })
}


var updateFav = (req,res,next)=> {
    let id = req.body.id;
    let name = req.body.name;
    let type = req.body.type;
    let fav = req.body.fav;

    db.updateFav(id, name, type, fav)
    .then(status => {
        console.log('status', status);
        res.status(200).json(status);
    })
    .catch(err => {
        console.log('err: ', err);
        res.status(500).send({message: 'Failed to update fav'});
    })
}


var deleteFav = (req, res, next) => {
    let id = req.params.id;
    
    db.deleteFav(id)
    .then(status => {
        console.log('status', status);
        res.status(200).json(status);
    })
    .catch(err => {
        console.log('err: ', err);
        res.status(500).send({message: 'Failed to delete fav for user'});
    })
}


module.exports = {
    addFav,
    getFav,    
    updateFav,
    deleteFav  
}