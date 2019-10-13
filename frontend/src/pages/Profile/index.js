import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdCheckCircle } from 'react-icons/md';
import * as Yup from 'yup';

import { Container } from './styles';

import { profileUpdateRequest } from '~/store/modules/user/actions';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(profileUpdateRequest(data));
  }

  const schema = Yup.object().shape({
    name: Yup.string()
      .required()
      .min(3),
    email: Yup.string()
      .email()
      .required(),
    oldPassword: Yup.string(),
    password: Yup.string().when('oldPassword', (oldPassword, field) =>
      oldPassword
        ? field
            .required('Nova senha é obrigatória')
            .min(6, 'A nova senha deve ter pelo menos 6 caracteres')
        : field
    ),
    confirmPassword: Yup.string().when('password', (password, field) =>
      password
        ? field
            .required('A confirmação da Nova Senha é obrigatório')
            .oneOf([Yup.ref('password'), null], 'As senhas não são iguais')
        : field
    ),
  });

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit} schema={schema}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="Seu melhor Email" />
        <hr />
        <Input type="password" name="oldPassword" placeholder="Senha atual" />
        <Input
          type="password"
          name="password"
          placeholder="Sua nova senha secreta"
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação da senha secreta"
        />

        <div>
          <button type="submit">
            <MdCheckCircle size={25} color="#fff" />
            Salvar Perfil
          </button>
        </div>
      </Form>
    </Container>
  );
}
