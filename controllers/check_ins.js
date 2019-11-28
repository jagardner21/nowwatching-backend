const knex = require('../db/knex')

exports.getAllCheckIns = function(req, res){
    knex('check_ins')
        .then(check_ins => res.json(check_ins))
}

//change this from req.params.id to req.body.id?
exports.getOneCheckIn = function(req, res){
    knex('check_ins')
        .where('id', req.params.id)
        .then(checkIn => {
            if(checkIn.length === 0){
                res.status(404).send("Check-in Not Found")
            } else {
                res.json(checkIn)
            }
        })
}

exports.addCheckIn = function(req, res){
    knex('check_ins')
        .insert(req.body)
        .returning("*")        
        .then(newCheckIn => res.json(newCheckIn))
}

//change to req.body.id?
exports.updateCheckIn = function(req, res){
    knex('check_ins')
        .where('id', req.params.id)
        .update({
            ...req.body,
            updated_at: new Date()
        })
        .returning("*")
        .then(updatedCheckIn => res.json(updatedCheckIn))
}

//change to req.body.id?
exports.deleteCheckIn = function(req, res){
    knex('check_ins')
        .del()
        .where('id', req.params.id)
        .returning("*")
        .then(deletedCheckIn => res.json(deletedCheckIn))
}