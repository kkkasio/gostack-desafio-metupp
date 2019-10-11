import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.png';

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  const schema = Yup.object().shape({
    name: Yup.string()
      .required()
      .min(3, 'A nome deve ter pelo menos 3 caracteres'),
    email: Yup.string()
      .email()
      .required('O email é obrigatório'),
    password: Yup.string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .required('A senha é obrigatória'),
  });

  return (
    <>
      <img src={logo} alt="" />

      <Form onSubmit={handleSubmit} schema={schema}>
        <Input type="text" name="name" placeholder="Seu nome completo" />
        <Input type="email" name="email" placeholder="Seu melhor email" />
        <Input
          type="password"
          name="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">Criar conta grátis</button>
      </Form>
      <Link to="/">Já tenho conta</Link>
    </>
  );
}
