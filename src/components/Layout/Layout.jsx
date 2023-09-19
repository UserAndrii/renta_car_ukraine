import { Container } from './Layout.styled';

import Header from '../Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Suspense fallback={'Loading...'}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
