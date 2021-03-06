exports.up = function(knex) {
    return knex.schema.createTable('check_ins', function(table){
        table.increments();
        table.integer('user_id').notNullable().references('id').inTable('users')
        table.text('movie_name').notNullable();
        table.integer('rating');
        table.text('review_body');
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('check_ins');
};
