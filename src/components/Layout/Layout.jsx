import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Link, Nav } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';

const Layout = () => {
  return (
    <Container>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
