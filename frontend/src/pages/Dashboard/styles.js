import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;

  h1 {
    color: #fff;
    font-weight: bold;
    line-height: 1.2;
    font-size: 32px;
  }

  button {
    display: flex;
    justify-content: center;
    background: #f94d6a;
    color: #fff;
    font-weight: bold;
    width: 160px;
    height: 50px;
    border-radius: 4px;
    border: 0;
    font-size: 17px;
    transition: background 0.2s ease-in-out;

    &:hover {
      background: ${lighten(0.07, '#f94d6a')};
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const Meetups = styled.ul``;

export const Meetup = styled.li`
  display: flex;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.25);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  padding: 15px 20px;
  height: 62px;
  color: #fff;

  margin-top: 15px;

  a {
    color: #fff;
    font-weight: bold;

    &:hover {
      opacity: 0.5;
    }
  }

  div {
    display: flex;
    align-items: center;
    span {
      line-height: 18px;
      word-spacing: 2px;
      font-weight: lighter;
      opacity: 0.8;
    }

    button {
      background: none;
      border: 0;
      margin-left: 15px;
    }
  }
`;

export const Empty = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 15px 20px;
  height: 62px;
  color: #fff;
  margin-top: 15px;
`;
