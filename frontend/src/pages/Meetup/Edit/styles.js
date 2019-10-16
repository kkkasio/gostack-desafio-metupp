import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;

    input,
    textarea {
      background: rgba(0, 0, 0, 0.1);
      height: 50px;
      border-radius: 4px;
      margin: 0 0 12px;
      border: 0;
      color: #fff;
      padding: 10px 15px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
        font-size: 18px;
      }
    }

    textarea {
      height: 150px;
    }

    span {
      color: #f64c75;
      align-self: start;
      margin: 0 10px 10px;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    display: flex;
    justify-content: center;
    background: #f94d6a;
    color: #fff;
    width: 160px;
    height: 50px;
    border-radius: 4px;
    border: 0;
    font-size: 18px;
    transition: background 0.2s ease-in-out;

    &:hover {
      background: ${lighten(0.07, '#f94d6a')};
    }
    svg {
      margin-right: 5px;
    }
  }
`;
