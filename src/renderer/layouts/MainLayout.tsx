/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink, Outlet } from 'react-router-dom';
import Button from 'renderer/components/Button/Button';
import './style/layout.css';

const MainLayout = () => {
  return (
    <div className="layout">
      <header className="layout-header">
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-6 mr-3 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Anime Store
              </span>
            </a>
            <NavLink to="/">
              <Button text="Accueil" />
            </NavLink>
            <NavLink to="/animes/123">
              <Button text="Détail de l'Anime" />
            </NavLink>
            <NavLink to="/character">
              <Button text="Top Personnages" />
            </NavLink>
          </div>
        </nav>
      </header>

      <main className="layout-main bg-gradient-to-r from-cyan-500 to-blue-500">
        <Outlet />
      </main>

      <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            Anime Store™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <NavLink to="/">
              <Button text="Accueil" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <Button text="Contact" />
            </NavLink>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default MainLayout;
