import { Router } from 'express';
import tokenController from '../controllers/TokenControlller';

const router = new Router();

router.post('/', tokenController.store);

export default router;

/*
index => Lista todos os usuários; (GET);
store/create => Cria um novo usuário; (POST);
delete => Apaga um usuário; (DELETE);
show => Mostra um usuário; (GET);
update => Atualualiza um usuário; (PATCH ou PUT);
*/
