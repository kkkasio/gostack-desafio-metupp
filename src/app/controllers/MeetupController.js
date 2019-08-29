import * as Yup from 'yup';
import { Op } from 'sequelize';
import { isBefore, parseISO, startOfDay, endOfDay } from 'date-fns';

import Meetup from '../models/Meetup';
import User from '../models/User';

class MeetupController {
  async index(req, res) {
    const page = req.query.page || 1;
    const where = {};

    if (req.query.date) {
      const date = parseISO(req.query.date);
      where.date = {
        [Op.between]: [startOfDay(date), endOfDay(date)],
      };
    }

    const meetups = await Meetup.findAll({
      where,
      order: [['date', 'DESC']],
      limit: 10,
      offset: 10 * page - 10,
      include: [
        {
          model: User,
          attributes: ['name', 'email'],
        },
      ],
    });

    return res.json(meetups);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.date().required(),
    });

    /**
     * verificação: validando dados de entrada
     */
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    /**
     * Não deve ser possível cadastrar meetups com datas que já passaram.
     */
    if (isBefore(parseISO(req.body.date), new Date()))
      return res.status(400).json({ error: 'Invalid Date' });

    const user = req.userId;

    const meetup = await Meetup.create({
      ...req.body,
      user_id: user,
    });

    return res.json({ meetup });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string()
        .required()
        .min(5),
      location: Yup.string()
        .required()
        .min(5),
      date: Yup.date().required(),
      description: Yup.string().required(),
    });

    /**
     * verificação: validação dados de entrada
     */
    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation Fails' });

    const meetup = await Meetup.findOne({
      where: {
        id: req.params.id,
        user_id: req.userId,
      },
    });

    /**
     * verificação: se o meetup existe
     */
    if (!meetup) return res.status(400).json({ error: 'Meetup not exists' });

    /**
     * vefificação: se o usuario logado é o dono do meetup.
     */
    if (meetup.user_id !== req.userId)
      return res.status(401).json({ error: 'You are not autorized' });

    /**
     * vefificação: se o meetup já aconteceu.
     */
    if (meetup.past)
      return res.status(400).json({ error: "Can't update past meetups." });

    /**
     * verificação: se a data a ser atualizada já passou
     */
    if (isBefore(parseISO(req.body.date), new Date()))
      return res.status(400).json({ error: 'Meetup date invalid' });

    await meetup.update(req.body);

    return res.json(meetup);
  }

  async delete(req, res) {
    const meetup = await Meetup.findByPk(req.params.id);

    /**
     * verificação: se o user é o dono do meetup
     */
    if (meetup.user_id !== req.userId)
      return res.status(401).json({ error: 'Not authorized' });

    /**
     * verificação: se o meetup já aconteceu
     */
    if (meetup.past)
      return res.status(400).json({ error: "Can't delete past meetups." });

    await meetup.destroy();

    return res.send();
  }
}

export default new MeetupController();
