
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          "name": "Henderson Mccoy",
          "email": "hendersonmccoy@comtest.com"
        },
        {
          "name": "Felicia Good",
          "email": "feliciagood@comtest.com"
        },
        {
          "name": "Wheeler Schwartz",
          "email": "wheelerschwartz@comtest.com"
        },
        {
          "name": "Shelia Neal",
          "email": "shelianeal@comtest.com"
        },
        {
          "name": "Ann Cooley",
          "email": "anncooley@comtest.com"
        },
        {
          "name": "Allison Carver",
          "email": "allisoncarver@comtest.com"
        },
        {
          "name": "Moss Burton",
          "email": "mossburton@comtest.com"
        },
        {
          "name": "Tabitha Albert",
          "email": "tabithaalbert@comtest.com"
        },
        {
          "name": "Marisa Craig",
          "email": "marisacraig@comtest.com"
        },
        {
          "name": "Robbins Bush",
          "email": "robbinsbush@comtest.com"
        },
        {
          "name": "Esperanza Townsend",
          "email": "esperanzatownsend@comtest.com"
        },
        {
          "name": "Weber Baxter",
          "email": "weberbaxter@comtest.com"
        },
        {
          "name": "Dawn Madden",
          "email": "dawnmadden@comtest.com"
        },
        {
          "name": "Ramirez Skinner",
          "email": "ramirezskinner@comtest.com"
        },
        {
          "name": "Robyn Valdez",
          "email": "robynvaldez@comtest.com"
        },
        {
          "name": "Boyer Calhoun",
          "email": "boyercalhoun@comtest.com"
        },
        {
          "name": "Rose Zamora",
          "email": "rosezamora@comtest.com"
        },
        {
          "name": "Mann Pope",
          "email": "mannpope@comtest.com"
        },
        {
          "name": "Wise Bright",
          "email": "wisebright@comtest.com"
        },
        {
          "name": "Wilder Doyle",
          "email": "wilderdoyle@comtest.com"
        },
        {
          "name": "Desiree Mullen",
          "email": "desireemullen@comtest.com"
        },
        {
          "name": "Baxter Mason",
          "email": "baxtermason@comtest.com"
        },
        {
          "name": "Bruce House",
          "email": "brucehouse@comtest.com"
        },
        {
          "name": "Leonard Ferrell",
          "email": "leonardferrell@comtest.com"
        },
        {
          "name": "Chapman Christian",
          "email": "chapmanchristian@comtest.com"
        },
        {
          "name": "Love Hahn",
          "email": "lovehahn@comtest.com"
        },
        {
          "name": "Ford Kennedy",
          "email": "fordkennedy@comtest.com"
        },
        {
          "name": "Nancy Black",
          "email": "nancyblack@comtest.com"
        },
        {
          "name": "Therese Zimmerman",
          "email": "theresezimmerman@comtest.com"
        },
        {
          "name": "Tabatha Mueller",
          "email": "tabathamueller@comtest.com"
        },
        {
          "name": "Parker Golden",
          "email": "parkergolden@comtest.com"
        },
        {
          "name": "Mcintosh Livingston",
          "email": "mcintoshlivingston@comtest.com"
        },
        {
          "name": "Lancaster Frederick",
          "email": "lancasterfrederick@comtest.com"
        },
        {
          "name": "Snider Cabrera",
          "email": "snidercabrera@comtest.com"
        },
        {
          "name": "Sandoval Saunders",
          "email": "sandovalsaunders@comtest.com"
        },
        {
          "name": "Horne Cantrell",
          "email": "hornecantrell@comtest.com"
        },
        {
          "name": "Roslyn Joseph",
          "email": "roslynjoseph@comtest.com"
        },
        {
          "name": "Holman Dejesus",
          "email": "holmandejesus@comtest.com"
        },
        {
          "name": "Kerr Pena",
          "email": "kerrpena@comtest.com"
        },
        {
          "name": "Gloria Parker",
          "email": "gloriaparker@comtest.com"
        },
        {
          "name": "Bradshaw Mckenzie",
          "email": "bradshawmckenzie@comtest.com"
        },
        {
          "name": "Lora Herman",
          "email": "loraherman@comtest.com"
        },
        {
          "name": "Willa Christensen",
          "email": "willachristensen@comtest.com"
        },
        {
          "name": "Nona Serrano",
          "email": "nonaserrano@comtest.com"
        },
        {
          "name": "Bowers Gomez",
          "email": "bowersgomez@comtest.com"
        },
        {
          "name": "Tessa Merritt",
          "email": "tessamerritt@comtest.com"
        },
        {
          "name": "Terrie Espinoza",
          "email": "terrieespinoza@comtest.com"
        },
        {
          "name": "Irwin Melton",
          "email": "irwinmelton@comtest.com"
        },
        {
          "name": "Ellis Reeves",
          "email": "ellisreeves@comtest.com"
        },
        {
          "name": "Maude Love",
          "email": "maudelove@comtest.com"
        }
      ]);
    });
};
