import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import {
  MdCancel,
  MdViewHeadline,
  MdDateRange,
  MdLocationOn,
} from 'react-icons/md';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import history from '~/services/history';

import {
  Container,
  Meetup,
  Action,
  Button,
  Banner,
  Description,
  Footer,
} from './styles';

export default function Show() {
  const [meetup, setMeetup] = useState({});
  const { meetupId } = useParams();

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/${meetupId}`);

      const { date } = response.data;

      console.tron.log(response.data);

      const data = {
        ...response.data,
        dateFormated: format(parseISO(date), "dd 'de' MMMM', às ' h'h' ", {
          locale: pt,
        }),
      };

      setMeetup(data);
    }
    loadMeetup();
  }, [meetupId]);

  return (
    <Container>
      <Meetup>
        <Action>
          {meetup.title}
          {!meetup.past && (
            <div>
              <Button type="button" color="#4DBAF9">
                <MdViewHeadline size={25} color="#fff" /> Editar
              </Button>
              <Button type="button" color="#D44059">
                <MdCancel size={25} color="#fff" /> Cancelar
              </Button>
            </div>
          )}
        </Action>
        <Banner>
          {console.tron.log(meetup.banner)}
          <img src={meetup.banner && meetup.banner.url} alt="Banner" />
        </Banner>

        <Description>{meetup.description}</Description>

        <Footer>
          <div>
            <MdDateRange size={25} color="#fff" /> {meetup.dateFormated}
          </div>
          <div>
            <MdLocationOn size={25} color="#fff" />
            {meetup.location}
          </div>
        </Footer>
      </Meetup>
    </Container>
  );
}
