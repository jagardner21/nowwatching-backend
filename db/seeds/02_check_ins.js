
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('check_ins').del()
    .then(function () {
      // Inserts seed entries
      return knex('check_ins').insert([{
        "movie_name": "Executive Target",
        "rating": 1,
        "review_body": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
      }, {
        "movie_name": "Thanksgiving Family Reunion (National Lampoon's Holiday Reunion)",
        "rating": 4,
        "review_body": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
      }, {
        "movie_name": "Late Mathias Pascal, The (a.k.a. The Living Dead Man) (Feu Mathias Pascal)",
        "rating": 2,
        "review_body": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
      }, {
        "movie_name": "Come Dance with Me!",
        "rating": 5,
        "review_body": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
      }, {
        "movie_name": "Escobar: Paradise Lost",
        "rating": 1,
        "review_body": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
      }, {
        "movie_name": "Back Stage",
        "rating": 1,
        "review_body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
      }, {
        "movie_name": "Blood and Black Lace (Sei donne per l'assassino)",
        "rating": 3,
        "review_body": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
      }, {
        "movie_name": "Braveheart",
        "rating": 2,
        "review_body": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
      }, {
        "movie_name": "Hop",
        "rating": 5,
        "review_body": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
      }, {
        "movie_name": "Sinbad: Legend of the Seven Seas",
        "rating": 4,
        "review_body": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
      }, {
        "movie_name": "Amateurs, The (Moguls, The)",
        "rating": 1,
        "review_body": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
      }, {
        "movie_name": "15 Minutes",
        "rating": 5,
        "review_body": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
      }, {
        "movie_name": "Disturbia",
        "rating": 3,
        "review_body": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
      }, {
        "movie_name": "Crude Oasis, The",
        "rating": 3,
        "review_body": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
      }, {
        "movie_name": "Very Thought of You, The",
        "rating": 4,
        "review_body": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
      }, {
        "movie_name": "Scout, The",
        "rating": 3,
        "review_body": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
      }, {
        "movie_name": "Devil Bat, The",
        "rating": 3,
        "review_body": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
      }, {
        "movie_name": "It's All True",
        "rating": 5,
        "review_body": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
      }, {
        "movie_name": "Urban Cowboy",
        "rating": 5,
        "review_body": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
      }, {
        "movie_name": "Crimson Petal and the White, The",
        "rating": 4,
        "review_body": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
      }, {
        "movie_name": "Wolfman, The",
        "rating": 4,
        "review_body": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
      }, {
        "movie_name": "Show Boat",
        "rating": 1,
        "review_body": "Fusce consequat. Nulla nisl. Nunc nisl."
      }, {
        "movie_name": "Dark Victory",
        "rating": 5,
        "review_body": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
      }, {
        "movie_name": "Education for Death",
        "rating": 4,
        "review_body": "Fusce consequat. Nulla nisl. Nunc nisl."
      }, {
        "movie_name": "Dodsworth",
        "rating": 5,
        "review_body": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
      }, {
        "movie_name": "Lion King II: Simba's Pride, The",
        "rating": 5,
        "review_body": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
      }, {
        "movie_name": "Reprise",
        "rating": 3,
        "review_body": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
      }, {
        "movie_name": "Bloody New Year",
        "rating": 2,
        "review_body": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
      }, {
        "movie_name": "Tea and Sympathy",
        "rating": 1,
        "review_body": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
      }, {
        "movie_name": "Caddyshack",
        "rating": 2,
        "review_body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
      }, {
        "movie_name": "Boy",
        "rating": 3,
        "review_body": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
      }, {
        "movie_name": "Another 48 Hrs.",
        "rating": 4,
        "review_body": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
      }, {
        "movie_name": "Leech Woman, The",
        "rating": 2,
        "review_body": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
      }, {
        "movie_name": "Haiku Tunnel",
        "rating": 1,
        "review_body": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
      }, {
        "movie_name": "Perrier's Bounty",
        "rating": 2,
        "review_body": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
      }, {
        "movie_name": "Pawn Shop Chronicles",
        "rating": 5,
        "review_body": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
      }, {
        "movie_name": "Adjuster, The",
        "rating": 5,
        "review_body": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
      }, {
        "movie_name": "Miss Bala",
        "rating": 2,
        "review_body": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
      }, {
        "movie_name": "Killer Pad",
        "rating": 4,
        "review_body": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
      }, {
        "movie_name": "Cruising",
        "rating": 5,
        "review_body": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
      }, {
        "movie_name": "Conquest of the Planet of the Apes",
        "rating": 4,
        "review_body": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
      }, {
        "movie_name": "Summer in Berlin (Sommer vorm Balkon)",
        "rating": 3,
        "review_body": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
      }, {
        "movie_name": "Desperately Seeking Susan",
        "rating": 1,
        "review_body": "In congue. Etiam justo. Etiam pretium iaculis justo."
      }, {
        "movie_name": "Horrible Dr. Hichcock, The",
        "rating": 3,
        "review_body": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
      }, {
        "movie_name": "Exodus",
        "rating": 4,
        "review_body": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
      }, {
        "movie_name": "Life Before Her Eyes, The",
        "rating": 4,
        "review_body": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
      }, {
        "movie_name": "Ella Lola, a la Trilby",
        "rating": 2,
        "review_body": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
      }, {
        "movie_name": "Look Who's Talking Now",
        "rating": 1,
        "review_body": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
      }, {
        "movie_name": "Ghost",
        "rating": 2,
        "review_body": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
      }, {
        "movie_name": "Dust of Time, The",
        "rating": 5,
        "review_body": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
      }]);
    });
};
