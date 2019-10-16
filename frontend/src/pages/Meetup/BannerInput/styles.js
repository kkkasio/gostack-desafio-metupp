import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 10px;
  flex: 1;

  &:hover {
    opacity: 0.7;
  }

  label {
    background-size: cover;
    cursor: pointer;

    div {
      background-size: cover;
      background-position: center center;
      img {
        height: 350px;
        width: 900px;
      }
    }

    div {
      height: 300px;
      width: 900px;
      color: #fff;
      opacity: 0.7;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      border-radius: 4px;
      background: rgba(0, 0, 0, 0.4);

      strong {
        margin-top: 5px;
      }
    }

    input {
      display: none;
    }
  }
`;
