import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import DateTimePicker from '~/components/DateTimePicker';
import BannerInput from '~/pages/Meetup/BannerInput';

import { Container, Button } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function New() {
  const schema = Yup.object().shape({
    title: Yup.string()
      .required('O titulo é obrigatório')
      .min(5, 'O titulo deve conter no mínimo 5 caracteres'),
    description: Yup.string().required('A descrição é obrigatória'),
    location: Yup.string()
      .required('A localização é obrigatória')
      .min(5),
    date: Yup.date()
      .required('A data é obrigatória')
      .min(new Date(), 'Mão é possivel voltar no tempo.'),
    file_id: Yup.string().required('A Imagem é obrigatória'),
  });

  async function handleSubmit(data) {
    let response;
    try {
      response = await api.post('meetups', data);
      toast.success('Meetup criado com sucesso!');
      history.push('/dashboard');
    } catch (err) {
      const { error } = response.data;
      toast.error(error);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema}>
        <BannerInput name="file_id" />
        <Input type="text" name="title" placeholder="Titulo do Meetup" />
        <Input
          multiline
          name="description"
          rows="10"
          placeholder="Descrição Completa"
        />
        <Input name="location" type="text" placeholder="Localização" />

        <DateTimePicker name="date" placeholder="Data do meetup" />

        <Button>
          <button type="submit">
            <MdAddCircleOutline color="#fff" size={25} /> Salvar meetup
          </button>
        </Button>
      </Form>
    </Container>
  );
}
