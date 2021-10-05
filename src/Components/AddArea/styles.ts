import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid #555;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0;

  .image {
    margin-right: 5px;
  }

  input {
    border: 0px;
    background: transparent;
    outline: 0;
    color: #fff;
    font-size: 18px;
    flex: 1;
  }

  button {
    background: transparent;
    color: #000;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    background-color: #FFA07A;
    font-size: 16px;
    font-weight: 700;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;