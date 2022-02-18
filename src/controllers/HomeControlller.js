class HomeController {
  async index(req, res) {
    res.json('Welcome API RESTIFUL WITH NODEJS + ESLINT + MYSQL');
  }
}

export default new HomeController();
