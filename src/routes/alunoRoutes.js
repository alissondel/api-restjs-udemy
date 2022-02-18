import { Router } from 'express';
import alunoController from '../controllers/alunoController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoController.index);
router.post('/', loginRequired, alunoController.store);
router.put('/:id', loginRequired, alunoController.update);
router.get('/:id', alunoController.show);
router.delete('/:id', loginRequired, alunoController.delete);

export default router;
/*
index => Lista todos os usuários; (GET);
store/create => Cria um novo usuário; (POST);
delete => Apaga um usuário; (DELETE);
show => Mostra um usuário; (GET);
update => Atualualiza um usuário; (PATCH ou PUT);
*/
