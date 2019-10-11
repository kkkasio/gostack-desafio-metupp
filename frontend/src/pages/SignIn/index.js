import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.png';

export default function SignIn() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required('Qual o seu email?'),
    password: Yup.string()
      .required('Qual a sua senha?')
      .min(6, 'A senha deve ter pelo menos 6 caracteres'),
  });

  function handleSubmit(data) {
    console.tron.log(data);
  }
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
        <button type="submit">Acessar</button>
      </Form>
      <Link to="/register">Criar conta grátis</Link>
    </>
  );
}
