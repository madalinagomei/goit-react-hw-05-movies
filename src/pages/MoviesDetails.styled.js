import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px;
`;

export const Img = styled.img`
  width: 250px;
`;

export const MovieInfo = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ExtraInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  > h3 {
    margin-bottom: 20px;
  }
`;

export const LinksWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  border: 1px solid #154c79;
  &.active {
    color: white;
    background-color: #154c79;
  }
`;
