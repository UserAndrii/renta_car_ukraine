import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './Layout';

import { fetchCurrentUser } from 'redux/auth/operations';
import {
  selectIsAdmin,
  selectIsLogged,
  selectIsRefreshing,
} from 'redux/auth/selectors';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const CatalogPage = lazy(() => import('pages/CatalogPage'));
const FavoriteCarsPage = lazy(() => import('pages/FavoriteCarsPage'));
const ServiceCarPage = lazy(() => import('pages/ServiceCarPage'));
const EditCarPage = lazy(() => import('pages/EditCarPage'));

function RestrictedRoutes({ component, navigateTo = '/' }) {
  const isLogged = useSelector(selectIsLogged);
  return isLogged ? <Navigate to={navigateTo} /> : component;
}

function PrivateRouters({ component, navigateTo = '/' }) {
  const isLogged = useSelector(selectIsLogged);
  const isRefreshing = useSelector(selectIsRefreshing);

  return !isLogged && !isRefreshing ? <Navigate to={navigateTo} /> : component;
}

function AdminRoutes({ component, navigateTo = '/' }) {
  const isLogged = useSelector(selectIsLogged);
  const isAdmin = useSelector(selectIsAdmin);

  return isLogged && !isAdmin ? <Navigate to={navigateTo} /> : component;
}

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route
            path="/login"
            element={
              <RestrictedRoutes
                component={<LoginPage />}
                navigateTo="/favorites"
              />
            }
          />

          <Route
            path="/register"
            element={
              <RestrictedRoutes
                component={<RegisterPage />}
                navigateTo="/favorites"
              />
            }
          />

          <Route path="/catalog" element={<CatalogPage />} />

          <Route
            path="/favorites"
            element={
              <PrivateRouters
                component={<FavoriteCarsPage />}
                navigateTo="/login"
              />
            }
          />

          <Route
            path="/service"
            element={
              <AdminRoutes
                component={<ServiceCarPage />}
                navigateTo="/catalog"
              />
            }
          />

          <Route
            path="/service/edit"
            element={
              <AdminRoutes component={<EditCarPage />} navigateTo="/catalog" />
            }
          />

          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    )
  );
}

export default App;
