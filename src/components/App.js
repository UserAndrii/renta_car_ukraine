import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Layout from './Layout';
import FirstDownload from './FirstDownload/FirstDownload';

import { fetchCurrentUser } from 'redux/auth/operations';
import {
  selectIsAdmin,
  selectIsLoading,
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
const AddNewCarPage = lazy(() => import('pages/AddNewCarPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage'));
const VerifyPage = lazy(() => import('pages/VerifyPage'));

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

  return !isLogged && !isAdmin ? <Navigate to={navigateTo} /> : component;
}

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isLoading ? (
    <FirstDownload />
  ) : (
    <>
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
            path="/profile"
            element={
              <PrivateRouters component={<ProfilePage />} navigateTo="/login" />
            }
          />

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
            path="/service/edit/:carId"
            element={
              <AdminRoutes component={<EditCarPage />} navigateTo="/catalog" />
            }
          />

          <Route
            path="/service/add_new_car"
            element={
              <AdminRoutes
                component={<AddNewCarPage />}
                navigateTo="/catalog"
              />
            }
          />

          <Route path="/verify/:verifyToken" element={<VerifyPage />} />

          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
