import { StyledLink } from './BackLink.styled';
import { IoArrowBackSharp } from 'react-icons/io5';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <IoArrowBackSharp />
      {children}
    </StyledLink>
  );
};
