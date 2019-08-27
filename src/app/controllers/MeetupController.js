import * as Yup from 'yup';
import { isBefore, parseISO } from 'date-fns';
import Meetup from '../models/Meetup';

class MeetupController {
  async index(req, res) {
    return res.json({ true: 'ok index' });
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.date().required(),
    });

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
     * verificação: dados de entrada
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

    if (meetup.user_id !== req.userId)
      return res.status(401).json({ error: 'Not authorized' });

    if (meetup.past)
      return res.status(400).json({ error: "Can't delete past meetups." });

    return res.json(meetup);
  }
}

export default new MeetupController();
