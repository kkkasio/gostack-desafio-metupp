import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@rocketseat/unform';
import { MdCameraEnhance } from 'react-icons/md';
import api from '~/services/api';

import { Container } from './styles';

export default function BannerInput() {
  const { defaultValue, registerField } = useField('banner');
  const { error } = useField('file_id');
  const [banner, setBanner] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]); //eslint-disable-line

  useEffect(() => {
    if (defaultValue) {
      setPreview(defaultValue.url);
      setBanner(defaultValue.id);
    }
  }, [defaultValue]);

  async function handleChange(event) {
    const data = new FormData();
    data.append('file', event.target.files[0]);

    const response = await api.post('files', data);
    const { id, url } = response.data;

    setPreview(url);
    setBanner(id);
  }

  return (
    <Container>
      <label htmlFor="banner">
        {preview ? (
          <div>
            <img src={preview} alt="" />
          </div>
        ) : (
          <div>
            <MdCameraEnhance size={60} color="#fff" />
            <strong>Selecionar imagem</strong>
          </div>
        )}
        <input
          type="file"
          name="banner"
          id="banner"
          accept="image/*"
          data-file={banner}
          ref={ref}
          onChange={handleChange}
        />
      </label>
      {error && <span>{error}</span>}
    </Container>
  );
}
