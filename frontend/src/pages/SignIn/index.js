import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.png';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="Metapp" />

      <Form onSubmit={handleSubmit}>
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
