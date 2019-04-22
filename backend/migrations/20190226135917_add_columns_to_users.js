
exports.up = function(knex, Promise) {
  return knex.schema.table('users', table => {
    table.string('email').notNull();
    table.string('password').notNull();
})
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users',table=>{
    table.dropColumns('email');
    table.dropColumns('password');
  });
};
