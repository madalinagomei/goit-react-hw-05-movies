import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #154c79;
  }
`;

export const Nav = styled.nav`
  padding: 25px;
  border-bottom: 3px solid black;
  border-color: #12b3cc;
`;
