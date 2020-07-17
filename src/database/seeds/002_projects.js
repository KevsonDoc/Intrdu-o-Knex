exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('projects').del()
        .then(function() {
            // Inserts seed entries
            return knex('projects').insert([{
                user_id: 2,
                title: "Perseverance",
                user_id: 3,
                title: "StarLog",
                user_id: 4,
                title: "StarOne",
                user_id: 5,
                title: "Hello World",
            }]);
        });
};