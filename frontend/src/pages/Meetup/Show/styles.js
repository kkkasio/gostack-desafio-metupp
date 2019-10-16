import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
`;
export const Meetup = styled.div``;
export const Action = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 32px;
  line-height: 37px;
  font-weight: bold;

  div {
    display: flex;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;

  background: ${props => props.color};
  color: #fff;
  width: 130px;
  height: 50px;
  border-radius: 4px;
  border: 0;
  font-size: 18px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${props => props.color && lighten(0.1, props.color)};
  }

  &:first-child {
    margin-right: 15px;
  }

  svg {
    margin-right: 5px;
  }
`;

export const Banner = styled.div`
  margin-top: 30px;

  img {
    width: 900px;
    height: 250px;
    border-radius: 4px;
    display: flex;
    align-self: center;
    margin-bottom: 20px;
    object-fit: cover;
    border-radius: 4px;
  }
`;

export const Description = styled.div`
  color: #fff;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
`;
export const Footer = styled.div`
  display: flex;

  div {
    display: flex;
    align-items: center;

    margin-top: 25px;
    color: #fff;
    opacity: 0.5;

    svg {
      margin-right: 5px;
    }

    &:first-child {
      margin-right: 40px;
    }
  }
`;

export const Delete = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  color: #fff;

  h1 {
    margin-bottom: 15px;
    font-size: 36px;
  }

  p {
    font-size: 18px;
  }

  div {
    margin: 20px 0px;
    display: flex;
  }
`;
