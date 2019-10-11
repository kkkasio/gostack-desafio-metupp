import Meetup from '../models/Meetup';

class OrganizingController {
  async index(req, res) {
    const meetups_user = await Meetup.findAll({
      where: {
        user_id: req.userId,
      },
    });

    return res.json(meetups_user);
  }
}

export default new OrganizingController();
