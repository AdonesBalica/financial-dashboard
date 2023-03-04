import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1em;
  border-bottom: 1px solid #ccc;
  font-weight: bold;

  a {
    text-decoration: none;
    color: #bdbdbd;

    &.active {
      color: #000;
    }

    &:hover {
      color: #000;
    }
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin-right: 1em;
  }
`;
