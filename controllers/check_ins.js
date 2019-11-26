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
                res.send(404, "Check-in Not Found")
            } else {
                res.json(checkIn)
            }
        })
}

//I think this is needed because it will require interacting with the join table
// exports.getCheckInsOneUser = function(req, res){
// }

exports.addCheckIn = function(req, res){
    let { movie_name, rating, review_body } = req.body
    knex('check_ins')
        .insert({
            "movie_name": movie_name,
            "rating": rating,
            "review_body": review_body
        })
        .returning("*")
        .then(newCheckIn => {
            knex('users_check_ins')
                .insert({
                    user_id: req.body.user_id,
                    check_in_id: newCheckIn[0].id
                })
        })
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
    knex('users_check_ins')
        .del()   
        .where("check_in_id", req.params.id) 
    knex('check_ins')
        .del()
        .where('id', req.params.id)
        .returning("*")
        .then(deletedCheckIn => res.json(deletedCheckIn))
}