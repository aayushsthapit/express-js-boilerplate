
/**
 * @param {object} knex
 * @return {Promise}
 *
 */
exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments();
        table.string('name').notNull();
        table.timestamp('created_at')
            .notNull()
            .defaultTo(knex.raw('now()'));
        table.timestamp('updated_at').notNull();
    })
};


/**
 * @param {object} knex
 * @return {Promise}
 *
 */
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users');
};
