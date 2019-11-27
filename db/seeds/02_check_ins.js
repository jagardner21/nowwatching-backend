
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('check_ins').del()
    .then(function () {
      // Inserts seed entries
      return knex('check_ins').insert([{
        "user_id": 19,
        "movie_name": "Camp",
        "rating": 4,
        "review_body": "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
      }, {
        "user_id": 4,
        "movie_name": "Recoil",
        "rating": 3,
        "review_body": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum."
      }, {
        "user_id": 27,
        "movie_name": "Frankenfish",
        "rating": 4,
        "review_body": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl."
      }, {
        "user_id": 41,
        "movie_name": "Man Made Monster",
        "rating": 5,
        "review_body": "Nullam varius. Nulla facilisi."
      }, {
        "user_id": 29,
        "movie_name": "Mann tut was Mann kann",
        "rating": 4,
        "review_body": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo."
      }, {
        "user_id": 18,
        "movie_name": "Crime Zone",
        "rating": 1,
        "review_body": "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst."
      }, {
        "user_id": 16,
        "movie_name": "Love is God",
        "rating": 1,
        "review_body": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros."
      }, {
        "user_id": 33,
        "movie_name": "Catacombs",
        "rating": 2,
        "review_body": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus."
      }, {
        "user_id": 14,
        "movie_name": "Last Warrior, The (Last Patrol, The)",
        "rating": 2,
        "review_body": "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
      }, {
        "user_id": 24,
        "movie_name": "Down to Earth",
        "rating": 1,
        "review_body": "Aenean sit amet justo. Morbi ut odio."
      }, {
        "user_id": 50,
        "movie_name": "Stella",
        "rating": 1,
        "review_body": "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
      }, {
        "user_id": 49,
        "movie_name": "Berlin Alexanderplatz",
        "rating": 2,
        "review_body": "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis."
      }, {
        "user_id": 27,
        "movie_name": "Christmas Story 2, A",
        "rating": 2,
        "review_body": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus."
      }, {
        "user_id": 34,
        "movie_name": "The Legend of Awesomest Maximus",
        "rating": 4,
        "review_body": "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio."
      }, {
        "user_id": 13,
        "movie_name": "Sisters of the Gion (Gion no shimai)",
        "rating": 5,
        "review_body": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi."
      }, {
        "user_id": 48,
        "movie_name": "Sydney White",
        "rating": 4,
        "review_body": "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt."
      }, {
        "user_id": 11,
        "movie_name": "Mirage Men",
        "rating": 2,
        "review_body": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
      }, {
        "user_id": 39,
        "movie_name": "Shadows of Our Forgotten Ancestors (Tini zabutykh predkiv)",
        "rating": 3,
        "review_body": "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst."
      }, {
        "user_id": 38,
        "movie_name": "Dead End",
        "rating": 5,
        "review_body": "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo."
      }, {
        "user_id": 44,
        "movie_name": "Stardust",
        "rating": 4,
        "review_body": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo."
      }, {
        "user_id": 27,
        "movie_name": "Charlie, the Lonesome Cougar",
        "rating": 4,
        "review_body": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
      }, {
        "user_id": 11,
        "movie_name": "Battle of the Bulge",
        "rating": 3,
        "review_body": "Duis at velit eu est congue elementum. In hac habitasse platea dictumst."
      }, {
        "user_id": 20,
        "movie_name": "Gurren Lagann: The Lights in the Sky are Stars (Gekijô ban Tengen toppa guren ragan: Ragan hen)",
        "rating": 2,
        "review_body": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo."
      }, {
        "user_id": 23,
        "movie_name": "Scorchers",
        "rating": 2,
        "review_body": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc."
      }, {
        "user_id": 10,
        "movie_name": "The Virginian",
        "rating": 5,
        "review_body": "Etiam faucibus cursus urna. Ut tellus."
      }, {
        "user_id": 47,
        "movie_name": "Candleshoe",
        "rating": 1,
        "review_body": "Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede."
      }, {
        "user_id": 20,
        "movie_name": "Loft (Rofuto)",
        "rating": 5,
        "review_body": "Integer ac neque. Duis bibendum."
      }, {
        "user_id": 36,
        "movie_name": "Crackers",
        "rating": 2,
        "review_body": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio."
      }, {
        "user_id": 37,
        "movie_name": "Bio Zombie (Sun faa sau si)",
        "rating": 2,
        "review_body": "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
      }, {
        "user_id": 33,
        "movie_name": "Widow of St. Pierre, The (Veuve de Saint-Pierre, La)",
        "rating": 5,
        "review_body": "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt."
      }, {
        "user_id": 43,
        "movie_name": "Solomon Kane",
        "rating": 1,
        "review_body": "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
      }, {
        "user_id": 33,
        "movie_name": "Snitch Cartel, The (El cartel de los sapos)",
        "rating": 5,
        "review_body": "Etiam vel augue. Vestibulum rutrum rutrum neque."
      }, {
        "user_id": 41,
        "movie_name": "Baraka",
        "rating": 1,
        "review_body": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci."
      }, {
        "user_id": 17,
        "movie_name": "Falcon Rising",
        "rating": 5,
        "review_body": "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
      }, {
        "user_id": 24,
        "movie_name": "Killer Movie",
        "rating": 2,
        "review_body": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis."
      }, {
        "user_id": 12,
        "movie_name": "Underworld",
        "rating": 4,
        "review_body": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien."
      }, {
        "user_id": 15,
        "movie_name": "Rabbit à la Berlin (Królik po berlinsku)",
        "rating": 4,
        "review_body": "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
      }, {
        "user_id": 37,
        "movie_name": "Tom Sawyer",
        "rating": 5,
        "review_body": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat."
      }, {
        "user_id": 29,
        "movie_name": "The Substitute 2: School's Out",
        "rating": 5,
        "review_body": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc."
      }, {
        "user_id": 34,
        "movie_name": "Blood and Wine (Blood & Wine)",
        "rating": 5,
        "review_body": "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius."
      }, {
        "user_id": 33,
        "movie_name": "Body Snatchers",
        "rating": 5,
        "review_body": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est."
      }, {
        "user_id": 8,
        "movie_name": "Lone Ranger and the Lost City of Gold, The",
        "rating": 2,
        "review_body": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat."
      }, {
        "user_id": 1,
        "movie_name": "Big Trail, The",
        "rating": 4,
        "review_body": "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo."
      }, {
        "user_id": 25,
        "movie_name": "About Last Night...",
        "rating": 4,
        "review_body": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum."
      }, {
        "user_id": 41,
        "movie_name": "Rat Savior, The (Izbavitelj)",
        "rating": 4,
        "review_body": "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante."
      }, {
        "user_id": 31,
        "movie_name": "Henry: Portrait of a Serial Killer",
        "rating": 1,
        "review_body": "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim."
      }, {
        "user_id": 30,
        "movie_name": "Flywheel",
        "rating": 5,
        "review_body": "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices."
      }, {
        "user_id": 40,
        "movie_name": "Poltergeist",
        "rating": 3,
        "review_body": "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
      }, {
        "user_id": 40,
        "movie_name": "Wanted! (Nachbarinnen)",
        "rating": 1,
        "review_body": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique."
      }, {
        "user_id": 48,
        "movie_name": "Diary of a Wimpy Kid: Rodrick Rules",
        "rating": 5,
        "review_body": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat."
      }]);
    });
};
