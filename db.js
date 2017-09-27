
module.exports = {
  getUser: getUser,
  getUsers: getUsers
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users')
    .join('profiles', 'profiles.user_id', 'users.id')
    .select('users.id', 'profiles.image', 'profiles.URL as url')
    .where('users.id', id)
    .first()
}
