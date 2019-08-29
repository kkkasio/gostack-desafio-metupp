import { Op } from 'sequelize';

import Subscription from '../models/Subscription';
import Meetup from '../models/Meetup';
import User from '../models/User';

class SubscriptionController {
  async index(req, res) {
    const meetups = await Subscription.findAll({
      where: {
        user_id: req.userId,
      },
      include: [
        {
          model: Meetup,
          where: {
            date: {
              [Op.gt]: new Date(),
            },
          },
        },
      ],
      order: [[Meetup, 'date']],
      // order: [[{ model: Meetup, as: 'Meetup' }, 'date', 'asc']],
    });

    return res.json(meetups);
  }

  async store(req, res) {
    const meetup = await Meetup.findByPk(req.params.meetupId, {
      include: [User],
    });

    /**
     * verificação: se o meetup existe
     */
    if (!meetup)
      return res.status(401).json({ error: 'Meetup does not exists' });

    /**
     * verificação: se o meetup já aconteceu
     */
    if (meetup.past)
      return res.status(400).json({ error: 'Meetup already passed' });

    /**
     * vefificação: se o dono do meetup é o usuario logado
     */
    if (meetup.user_id === req.userId)
      return res.status(400).json({ error: 'You are owner this meetup' });

    const registered = await Subscription.findOne({
      where: {
        user_id: req.userId,
      },
      include: [
        {
          model: Meetup,
          required: true,
          where: {
            date: meetup.date,
          },
        },
      ],
    });

    /**
     * verificação: se o usuario está inscritro em outro meetupp no mesmo data/horario
     */
    if (registered)
      return res
        .status(400)
        .json({ error: "Can't subscribe on two meetups at the same hour" });

    const subscription = await Subscription.create({
      user_id: req.userId,
      meetup_id: meetup.id,
    });

    return res.json(subscription);
  }
}

export default new SubscriptionController();
