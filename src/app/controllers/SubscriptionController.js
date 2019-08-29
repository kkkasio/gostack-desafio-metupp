import Subscription from '../models/Subscription';
import Meetup from '../models/Meetup';
import User from '../models/User';

class SubscriptionController {
  async index(req, res) {
    const meetups = await Subscription.findAll({
      where: {
        user_id: req.userId,
      },
    });

    return res.json(meetups);
  }

  async store(req, res) {
    const meetup = await Meetup.findByPk(req.params.meetupId, {
      include: [User],
    });

    /**
     * verificação: se o meetup já aconteceu
     */
    if (meetup.past)
      return res.status(400).json({ error: 'Meetup already passed' });

    if (meetup.user_id === req.userId)
      return res.status(400).json({ error: 'You are owner this meetup' });

    // const sameHour = await Meetup.findOne({
    //   where: {
    //     date: meetup.date,
    //   },
    // });

    const registered = await Subscription.findOne({
      where: {
        meetup_id: req.params.meetupId,
        user_id: req.userId,
      },
    });

    if (registered)
      return res
        .status(400)
        .json({ error: 'You are subscribed to this meetup' });

    const subscription = await Subscription.create({
      user_id: req.userId,
      meetup_id: meetup.id,
    });

    return res.json(subscription);
  }
}

export default new SubscriptionController();
