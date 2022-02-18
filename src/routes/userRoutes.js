import { Router } from 'express';
import userController from '../controllers/userControlller';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir em uma aplicação real essas duas rotas
router.get('/', loginRequired, userController.index); // Lista varios Usuários
router.get('/:id', loginRequired, userController.show); // Lista um Usuário

// loginRequired => É um middleware de verificação de token;
router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index => Lista todos os usuários; (GET);
store/create => Cria um novo usuário; (POST);
delete => Apaga um usuário; (DELETE);
show => Mostra um usuário; (GET);
update => Atualualiza um usuário; (PATCH ou PUT);
*/
