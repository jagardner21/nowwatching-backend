
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_check_ins').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_check_ins').insert([
        {
          "user_id": 20,
          "check_in_id": 47
        },
        {
          "user_id": 6,
          "check_in_id": 12
        },
        {
          "user_id": 5,
          "check_in_id": 40
        },
        {
          "user_id": 2,
          "check_in_id": 23
        },
        {
          "user_id": 46,
          "check_in_id": 19
        },
        {
          "user_id": 6,
          "check_in_id": 34
        },
        {
          "user_id": 27,
          "check_in_id": 49
        },
        {
          "user_id": 13,
          "check_in_id": 45
        },
        {
          "user_id": 28,
          "check_in_id": 32
        },
        {
          "user_id": 15,
          "check_in_id": 15
        },
        {
          "user_id": 5,
          "check_in_id": 5
        },
        {
          "user_id": 6,
          "check_in_id": 23
        },
        {
          "user_id": 47,
          "check_in_id": 49
        },
        {
          "user_id": 47,
          "check_in_id": 14
        },
        {
          "user_id": 20,
          "check_in_id": 14
        },
        {
          "user_id": 9,
          "check_in_id": 1
        },
        {
          "user_id": 37,
          "check_in_id": 6
        },
        {
          "user_id": 26,
          "check_in_id": 28
        },
        {
          "user_id": 42,
          "check_in_id": 38
        },
        {
          "user_id": 14,
          "check_in_id": 47
        },
        {
          "user_id": 46,
          "check_in_id": 46
        },
        {
          "user_id": 5,
          "check_in_id": 28
        },
        {
          "user_id": 40,
          "check_in_id": 23
        },
        {
          "user_id": 29,
          "check_in_id": 41
        },
        {
          "user_id": 33,
          "check_in_id": 41
        },
        {
          "user_id": 21,
          "check_in_id": 14
        },
        {
          "user_id": 9,
          "check_in_id": 48
        },
        {
          "user_id": 17,
          "check_in_id": 17
        },
        {
          "user_id": 46,
          "check_in_id": 18
        },
        {
          "user_id": 7,
          "check_in_id": 48
        },
        {
          "user_id": 7,
          "check_in_id": 29
        },
        {
          "user_id": 46,
          "check_in_id": 10
        },
        {
          "user_id": 27,
          "check_in_id": 17
        },
        {
          "user_id": 8,
          "check_in_id": 2
        },
        {
          "user_id": 38,
          "check_in_id": 46
        },
        {
          "user_id": 44,
          "check_in_id": 14
        },
        {
          "user_id": 33,
          "check_in_id": 48
        },
        {
          "user_id": 31,
          "check_in_id": 4
        },
        {
          "user_id": 37,
          "check_in_id": 38
        },
        {
          "user_id": 34,
          "check_in_id": 23
        },
        {
          "user_id": 48,
          "check_in_id": 1
        },
        {
          "user_id": 23,
          "check_in_id": 46
        },
        {
          "user_id": 25,
          "check_in_id": 6
        },
        {
          "user_id": 41,
          "check_in_id": 14
        },
        {
          "user_id": 2,
          "check_in_id": 29
        },
        {
          "user_id": 16,
          "check_in_id": 2
        },
        {
          "user_id": 43,
          "check_in_id": 32
        },
        {
          "user_id": 21,
          "check_in_id": 6
        },
        {
          "user_id": 18,
          "check_in_id": 25
        },
        {
          "user_id": 8,
          "check_in_id": 18
        }
      ]);
    });
};
