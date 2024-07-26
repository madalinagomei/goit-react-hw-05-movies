import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding-left: 25px;
  font-size: 18px;
  margin-top: 20px;
  width: 80px;
  color: #154c79;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;

  :hover {
    color: orangered;
  }
`;
