import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
