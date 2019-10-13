import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { Container } from './styles';

import api from '~/services/api';

export default function Show() {
  const [meetup, setMeetup] = useState('');
  const { id } = useParams();

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get();
    }

    loadMeetup();
  }, []);
  // const { id } = useParams();
  return <h1>ok</h1>;
}
