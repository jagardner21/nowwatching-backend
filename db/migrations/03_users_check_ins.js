
exports.up = function(knex) {
    return knex.schema.createTable('users_check_ins', function(table) {
        table.increments();
        //NEED HELP WITH CASCADING DELETIONS
        table.integer('user_id').references('id').inTable('users').notNullable()
        // .onUpdate('CASCADE').onDelete('CASCADE');
        table.integer('check_in_id').references('id').inTable('check_ins').notNullable()
        table.timestamps(true, true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users_check_ins');
};
