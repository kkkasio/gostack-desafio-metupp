import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import mail from '../../lib/Mail';

class SubscriptionMail {
  get key() {
    return 'SubscriptionMail';
  }

  /**
   * tarefa que é executada quando o processo é chamado
   */
  async handle({ data }) {
    console.log('fila executou');

    const { meetup, user } = data;
    await mail.sendMail({
      to: `${meetup.User.name} <${meetup.User.email}>`,
      subject: `${meetup.title} - Nova Inscrição `,
      template: 'subscription',
      context: {
        organizer: meetup.User.name,
        meetup: meetup.title,
        date: format(
          parseISO(meetup.date),
          "'dia' dd 'de' MMMM', às' H:mm'h'",
          {
            locale: pt,
          }
        ),
        user: user.name,
        email: user.email,
      },
    });
  }
}
export default new SubscriptionMail();
