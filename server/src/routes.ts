import express from 'express';
import knex from './database/connection';

import pointsController from './controllers/pointsController'
import itensController from './controllers/itensController'

const routes = express.Router();
const PointsController = new pointsController()
const ItensCoontroller = new itensController()

routes.get('/itens', ItensCoontroller.index);

routes.post('/points',PointsController.create);

routes.get('/points', PointsController.index);

routes.get('/points/:id', PointsController.show);

export default routes;

/*const users = [
    'Délcio',
    'Edson',
    'Fuxi',
    'Olavo'
];

//Pega todos os usuários na lista users
app.get('/users', (request, response) => {
    console.log('Listagem de usuários')
    return response.json(users)
});

//Filtra dados do usuário
app.get('/users', (request, response) =>{
    const search = String(request.query.search);
    const filterUsers = search ? users.filter(user => user.includes(search)) : users;
    return response.json(filterUsers);
});

//Busca usuarios da lista users por ID
app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id]
    response.json(user);
});

//Cria um usuário com nome e email como estrutura
app.post(
    '/users', (request, response) => {
        const User = {
            nome: 'Leonel',
            email: 'leonel@gmails.com'
        };

        response.json(User)
    }
);*/
