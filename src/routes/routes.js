const postController = require('../controllers/postController');
const getController = require('../controllers/getController');
const putController = require('../controllers/putController');
const patchController = require('../controllers/patchController');
const deleteController = require('../controllers/deleteController');
const getAllController = require('../controllers/getAllController');

const routes = [
    {
        method: 'POST',
        url: '/',
        handler: postController
    },
    {
        method: 'GET',
        url: '/',
        handler: getController
    },
    {
        method: 'GET',
        url: '/all',
        handler: getAllController
    },
    {
        method: 'PUT',
        url: '/',
        handler: putController
    },
    {
        method: 'PATCH',
        url: '/',
        handler: patchController
    },
    {
        method: 'DELETE',
        url: '/',
        handler: deleteController
    },
];

module.exports = routes;

// function routes(fastify, options, done) {
//     fastify.post('/', loginController);
//     fastify.get('/', getController);

//     done();
// }

// module.exports = routes;
