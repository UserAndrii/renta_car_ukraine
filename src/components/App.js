import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import HomePage from 'pages/HomePage';
import CatalogPage from 'pages/CatalogPage';
import FavoriteCarsPage from 'pages/FavoriteCarsPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoriteCarsPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
