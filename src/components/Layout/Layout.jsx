import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Main } from './Layout.styled';

import Header from '../Header';
import Footer from '../Footer';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Suspense fallback={'Loading...'}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </Container>
  );
};

export default Layout;
