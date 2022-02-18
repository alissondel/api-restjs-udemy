import { Router } from 'express';
import homeController from '../controllers/HomeControlller';

const router = new Router();

router.get('/', homeController.index);

export default router;

/*
index => Lista todos os usuários; (GET);
store/create => Cria um novo usuário; (POST);
delete => Apaga um usuário; (DELETE);
show => Mostra um usuário; (GET);
update => Atualualiza um usuário; (PATCH ou PUT);
*/
