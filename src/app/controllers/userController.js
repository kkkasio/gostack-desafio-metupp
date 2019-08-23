import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists)
      return res.status(400).json({ error: 'user aready exists' });

    const { id, email, nome } = await User.create(req.body);

    return res.json({
      id,
      email,
      nome,
    });
  }
}

export default new UserController();
