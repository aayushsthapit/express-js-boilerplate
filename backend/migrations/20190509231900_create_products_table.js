/**
 * @param {object} knex
 * @return {Promise}
 */
exports.up = function(knex, Promise) {
    return knex.schema.createTable('products', table=>{
        table.increments();
        table.string('name').notNull();
        table.string('description');
        table.float('cost_price');
        table.float('selling_price');
        table.integer('created_by');
        table.integer('updated_by');
        table.integer('category');
        table.foreign('created_by').references('users.id')
        table.foreign('updated_by').references('users.id')
        table.foreign('category').references('categories.id')
        table.timestamps(false,true);
    })
  
};

/**
 * @param {object} knex
 * @return {Promise}
 */
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products')
};
