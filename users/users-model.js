const db = require('../database/db-config.js');

module.exports = {
    add,
    find,
    findBy,
    findById
};

function find() {
    return db('users')
        .select('id', 'username', 'department');
};

function findBy(filter) {
    return db('users')
        .where(filter)
        .select('id', 'username', 'department');
};

function add(user) {
    return db('users')
        .insert(user, 'id')
        .then(ids => {
            console.log(ids)
            const [id] = ids;
            return findById(id);
        });
};

function findById(id) {
    return db('users')
        .where({ id })
        .first();
};