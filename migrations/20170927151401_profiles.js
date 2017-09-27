
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('profiles', function (table) {
    table.increments('user_id').primary()
    table.string('image')
    table.string('URL')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('profiles')
}
