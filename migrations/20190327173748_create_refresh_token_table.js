
/**
 * @param {object} knex
 * @return {Promise}
 *
 */
exports.up = function(knex, Promise) {
    return knex.schema.createTable('refresh_tokens', table => {
        table.integer('id').primary();
        table.string('tokens').notNull();
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
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('refresh_tokens');
};
