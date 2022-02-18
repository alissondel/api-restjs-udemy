import User from '../models/User';

class UserController {
  // index (GET)
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      console.log('USER ID', req.userId);
      console.log('USER EMAIL', req.userEmail);

      return res.json(users);
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id); // Buscando pelo primary key
      const { id, nome, emal } = user;
      return res.json({ id, nome, emal });
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }

  // store/create (POST)
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        message: 'Usuario Invalido',
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId); // Buscando pelo primary key
      if (!user) {
        return res.status(400).json({
          errors: ['Usuario não existe'],
        });
      }

      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId); // Buscando pelo primary key
      if (!user) {
        return res.status(400).json({
          errors: ['Usuario não existe'],
        });
      }

      await user.destroy();
      return res.json({
        message: 'Usuario Apagado com Sucesso',
      });
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
