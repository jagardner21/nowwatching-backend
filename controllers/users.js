const knex = require('../db/knex')

exports.getAllUsers = function(req, res){
    knex('users')
        .then(users => res.json(users))
}

exports.getUserCheckIns = function(req, res){
    knex('check_ins')
        .where('user_id', req.params.id)
        .then(checkIns => {
            if(checkIns.length === 0){
                res.send("No Check-Ins Yet.")
            } else{
                res.json(checkIns)
            }
        })           
}

//change this from req.params.id to req.body.id?
exports.getOneUser = function(req, res){
    knex('users')
        .where('id', req.params.id)
        .then(user => {
            if(user.length === 0){
                res.status(404).send("User Not Found")
            } else {
                res.json(user)
            }
        })
}

exports.addUser = function(req, res){
    knex('users')
        .insert(req.body)
        .returning("*")
        .then(newUser => res.json(newUser))
}

//change to req.body.id?
exports.updateUser = function(req, res){
    knex('users')
        .where('id', req.params.id)
        .update({
            ...req.body,
            updated_at: new Date()
        })
        .returning("*")
        .then(updatedUser => res.json(updatedUser))
}

//change to req.body.id?
exports.deleteUser = function(req, res){
    knex('check_ins')
        .del()
        .where('user_id', req.params.id)
        .then(() => {
            knex('users')
            .del()
            .where('id', req.params.id)
            .returning('*')
            .then(deletedUser => res.json(deletedUser))
        })
}