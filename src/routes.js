const express = require('express');
const routes = express.Router();
const UserControler = require('./controller/Usercontroller');

routes.get('/', UserControler.index);
routes.post('/create', UserControler.create);
routes.put('/update', UserControler.update);
routes.delete('/delete/:id', UserControler.delete);


module.exports = routes;