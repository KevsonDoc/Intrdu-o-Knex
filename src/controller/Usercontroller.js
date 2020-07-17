const knex = require('../database');

module.exports = {
    async index(req, res) {
        const results = await knex('users').then((results) => {
            return res.json(results);
        });
    },

    async create(req, res, next) {
        try {
            const { username } = req.body;

            await knex('users').insert({ username });

            return res.status(201).send();
        } catch (error) {
            next(error)
        }

    },

    async update(req, res, next) {
        try {
            const { username } = req.body;
            const { id } = req.body;
            await knex('users')
                .update({ username })
                .where({ id })
            return res.status(200).send();
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            console.log(id)

            await knex('users').where({ id }).del()
            return res.send();
        } catch (error) {
            next(error)
        }
    }
}