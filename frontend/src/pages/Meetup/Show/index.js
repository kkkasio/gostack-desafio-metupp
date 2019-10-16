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

import {
  Container,
  Meetup,
  Action,
  Button,
  Banner,
  Description,
  Footer,
} from './styles';

import history from '~/services/history';

export default function Show() {
  const [meetapp, setMeetapp] = useState({});
  const { meetappId } = useParams();

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/${meetappId}`);

      const { date } = response.data;

      const data = {
        ...response.data,
        dateFormated: format(parseISO(date), "dd 'de' MMMM', às ' h'h' ", {
          locale: pt,
        }),
      };

      setMeetapp(data);
    }
    loadMeetup();
  }, [meetappId]);

  function handleEdit(id) {
    history.push(`/edit/${id}`);
  }

  return (
    <Container>
      <Meetup>
        <Action>
          {meetapp.title}
          {!meetapp.past && (
            <div>
              <Button
                type="button"
                onClick={() => handleEdit(meetapp.id)}
                color="#4DBAF9"
              >
                <MdViewHeadline size={25} color="#fff" /> Editar{' '}
              </Button>
              <Button type="button" color="#D44059">
                <MdCancel size={25} color="#fff" /> Cancelar
              </Button>
            </div>
          )}
        </Action>
        <Banner>
          {console.tron.log(meetapp.banner)}
          <img src={meetapp.banner && meetapp.banner.url} alt="Banner" />
        </Banner>

        <Description>{meetapp.description}</Description>

        <Footer>
          <div>
            <MdDateRange size={25} color="#fff" /> {meetapp.dateFormated}
          </div>
          <div>
            <MdLocationOn size={25} color="#fff" />
            {meetapp.location}
          </div>
        </Footer>
      </Meetup>
    </Container>
  );
}
