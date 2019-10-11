import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #22202c 0%, #402845 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      background: rgba(0, 0, 0, 0.1);
      width: 315px;
      height: 50px;
      border-radius: 4px;
      margin: 0 0 12px;
      border: 0;
      color: #fff;
      padding: 0 15px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
        font-size: 18px;
      }
    }

    span {
      color: #f64c75;
      align-self: start;
      margin: 0 10px 10px;
    }

    button {
      background: #f94d6a;
      color: #fff;
      width: 315px;
      height: 50px;
      border-radius: 4px;
      border: 0;
      font-size: 18px;
      transition: background 0.2s ease-in-out;

      &:hover {
        background: ${lighten(0.07, '#f94d6a')};
      }
    }
  }
  a {
    color: #fff;
    display: block;
    margin-top: 15px;
    font-size: 18px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;

export const Loading = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-left: 4px solid;
  animation: ${rotate} 1s infinite linear;
  border-radius: 50%;
  width: 30px;
  display: flex;
  margin: 0 auto;
  height: 30px;
`;
