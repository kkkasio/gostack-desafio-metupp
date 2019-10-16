import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';
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
  Delete,
} from './styles';

import history from '~/services/history';

export default function Show() {
  const [meetapp, setMeetapp] = useState({});
  const { meetappId } = useParams();

  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get(`meetups/${meetappId}`);

        const { date } = response.data;

        const data = {
          ...response.data,
          dateFormated: format(parseISO(date), "dd 'de' MMMM', às ' h'h' ", {
            locale: pt,
          }),
        };

        setMeetapp(data);
      } catch (error) {
        toast.error('Algo deu errado');
        history.push('/dashboard');
      }
    }

    loadMeetup();
  }, [meetappId]);

  function handleEdit(id) {
    history.push(`/edit/${id}`);
  }

  async function handleDelete(id) {
    try {
      await api.delete(`meetups/${id}`);
      toast.success('Meetup deletado com sucesso!');
      history.push('/dashboard');
    } catch (err) {
      toast.error('Erro ao deletar Meetap!');
    }
  }

  function showAllert(id) {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <Delete>
            <h1>Você tem certeza?</h1>
            <p>Deseja realmente deletar esse Meetap?</p>
            <div>
              <Button type="button" onClick={onClose} color="#4DBAF9">
                Não, Voltar
              </Button>
              <Button
                color="#D44059"
                type="button"
                onClick={() => {
                  handleDelete(id);
                  onClose();
                }}
              >
                Sim, Deletar!
              </Button>
            </div>
          </Delete>
        );
      },
    });
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
              <Button
                type="button"
                onClick={() => showAllert(meetapp.id)}
                color="#D44059"
              >
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
