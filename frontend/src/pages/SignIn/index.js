import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '~/pages/_layouts/auth/styles';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  const schema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required('Qual o seu email?'),
    password: Yup.string()
      .required('Qual a sua senha?')
      .min(6, 'A senha deve ter pelo menos 6 caracteres'),
  });

  return (
    <>
      <img src={logo} alt="Metapp" />

      <Form onSubmit={handleSubmit} schema={schema}>
        <Input type="email" name="email" placeholder="Seu melhor email" />
        <Input
          type="password"
          name="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">{loading ? <Loading /> : 'Acessar'}</button>
      </Form>
      <Link to="/register">Criar conta grátis</Link>
    </>
  );
}
