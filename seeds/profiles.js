
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('profiles').insert({ user_id: 99901, image: '.jpg', URL: 'http://website.com' }),
        knex('profiles').insert({ user_id: 99902, image: '.jpg', URL: 'http://website.com' }),
        knex('profiles').insert({ user_id: 99903, image: '.jpg', URL: 'http://website.com' }),
        knex('profiles').insert({ user_id: 99904, image: '.jpg', URL: 'http://website.com' }),
        knex('profiles').insert({ user_id: 99905, image: '.jpg', URL: 'http://website.com' }),
        knex('profiles').insert({ user_id: 99906, image: '.jpg', URL: 'http://website.com' }),
        knex('profiles').insert({ user_id: 99907, image: '.jpg', URL: 'http://website.com' }),
        knex('profiles').insert({ user_id: 99908, image: '.jpg', URL: 'http://website.com' }),
        knex('profiles').insert({ user_id: 99909, image: '.jpg', URL: 'http://website.com' }),
        knex('profiles').insert({ user_id: 99910, image: '.jpg', URL: 'http://website.com' }),
        knex('profiles').insert({ user_id: 99911, image: '.jpg', URL: 'http://website.com' }),
        knex('profiles').insert({ user_id: 99912, image: '.jpg', URL: 'http://website.com' }),
        knex('profiles').insert({ user_id: 99913, image: '.jpg', URL: 'http://website.com' }),
        knex('profiles').insert({ user_id: 99914, image: '.jpg', URL: 'http://website.com' }),
        knex('profiles').insert({ user_id: 99915, image: '.jpg', URL: 'http://website.com' }),
        knex('profiles').insert({ user_id: 99916, image: '.jpg', URL: 'http://website.com' }),
        knex('profiles').insert({ user_id: 99917, image: '.jpg', URL: 'http://website.com' }),
        knex('profiles').insert({ user_id: 99918, image: '.jpg', URL: 'http://website.com' }),
        knex('profiles').insert({ user_id: 99919, image: '.jpg', URL: 'http://website.com' }),
        knex('profiles').insert({ user_id: 99920, image: '.jpg', URL: 'http://website.com' }),
        knex('profiles').insert({ user_id: 99921, image: '.jpg', URL: 'http://website.com' }),
        knex('profiles').insert({ user_id: 99922, image: '.jpg', URL: 'http://website.com' }),
        knex('profiles').insert({ user_id: 99923, image: '.jpg', URL: 'http://website.com' }),
        knex('profiles').insert({ user_id: 99924, image: '.jpg', URL: 'http://website.com' }),
        knex('profiles').insert({ user_id: 99925, image: '.jpg', URL: 'http://website.com' }),
        knex('profiles').insert({ user_id: 99926, image: '.jpg', URL: 'http://website.com' })
      ])
    })
}
