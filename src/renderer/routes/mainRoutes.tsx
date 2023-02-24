/* eslint-disable import/no-named-as-default */
import { Route, Routes } from 'react-router-dom';
import MainLayout from 'renderer/layouts/MainLayout';
import AnimeDetailPage from 'renderer/views/AnimeDetailPage/AnimeDetailPage';
import AnimesListPage from 'renderer/views/AnimesListPage/AnimesListPage';
import CharacterTopPage from 'renderer/views/CharacterPage/Character';
import ContactPage from 'renderer/views/ContactPage/ContactPage';
import HomePage from '../views/Home/HomePage';

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />

      <Route path="/animes">
        <Route index path="/animes" element={<AnimesListPage />} />
        <Route path="/animes/:id" element={<AnimeDetailPage />} />
      </Route>

      <Route path="/character" element={<CharacterTopPage />} />

      <Route path="/contact" element={<ContactPage />} />
    </Route>
  </Routes>
);

export default MainRoutes;
