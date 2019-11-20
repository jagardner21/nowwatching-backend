
exports.up = function(knex) {
    return knex.schema.createTable('check_ins', function(table){
        table.increments();
        table.string('movie_name').notNullable();
        //table.{something}('rating'); -> unsure what datatype the rating star will give, likely integer?
        table.integer('user_id').references('id').inTable('users').notNullable();
        table.string('review_body').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('check_ins');
};
