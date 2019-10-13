import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 0 30px;

  color: #fff;
`;

export const Content = styled.div`
  height: 80px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  aside {
    display: flex;
  }

  button {
    background: #f94d6a;
    border: 0;
    width: 70px;
    height: 40px;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;

    &:hover {
      background: ${lighten(0.07, '#f94d6a')};
    }
  }
`;
export const Profile = styled.div`
  margin-right: 15px;
  text-align: right;
  span {
    display: block;
    font-size: 16px;
    font-weight: bold;
  }

  a {
    margin-top: 3px;
    font-size: 14px;
    display: block;
    color: #999;

    &:hover {
      opacity: 0.6;
    }
  }
`;
