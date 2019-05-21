/**
 * @param {object} knex
 * @return {Promise}
 */
exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories',table=>{
      table.increments();
      table.string('name').notNull();
        table.timestamps(false,true)
  })
};

/**
 * @param {object} knex
 * @return {Promise}
 */
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('categories')
};
