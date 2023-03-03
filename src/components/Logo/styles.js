import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100px;
  padding: 5px;
  align-items: center;
  justify-content: space-around;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

export const LogoName = styled.p`
  letter-spacing: 2px;
  font-weight: bold;
`;
