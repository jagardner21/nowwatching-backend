const knex = require('../db/knex')

exports.getAllUsers = function(req, res){
    knex('users')
        .then(users => res.json(users))
}

//change this from req.params.id to req.body.id?
exports.getOneUser = function(req, res){
    knex('users')
        .where('id', req.params.id)
        .then(user => {
            if(user.length === 0){
                res.send(404, "User Not Found")
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

//NEED HELP WITH CASCADING DELETIONS
exports.deleteUser = function(req, res){
    let usersCheckIns = knex('users_check_ins')
        .where('user_id', req.params.id)
        .then(console.log('USERS CHECK INS', usersCheckIns))
    knex('users_check_ins')
        .where('user_id', req.params.id)
        .del()
        .returning('*')
        .then(deleteUser => res.json(deleteUser))
}