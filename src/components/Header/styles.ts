import styled from 'styled-components';

export const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 60px;

  .brand {
    display: flex;
  }

  nav {
    display: flex;
    gap: 20px;
    
    a {
      /* color: var(--white); */
      text-decoration: none;
    }
  }
`;