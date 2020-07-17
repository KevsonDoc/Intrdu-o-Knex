const express = require('express');
const routes = express.Router();

const UserControler = require('./controller/Usercontroller');
const ProjectControler = require('./controller/Projectcontroler');

routes.get('/', UserControler.index);
routes.post('/create', UserControler.create);
routes.put('/update', UserControler.update);
routes.delete('/delete/:id', UserControler.delete);
routes.get('/projects', ProjectControler.index);

module.exports = routes;