import themes from 'daisyui/src/colors/themes';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { SettingContext } from '../../data/store/context/SettingProvieder';
export default function Navbar() {
  const { lang, setLang } = useContext(SettingContext);
  return (
    <nav className="bg-neutral-focus text-white text-xl py-4 fixed top-0 w-full z-50 shadow">
      <ul className="flex items-center gap-5  container font-semibold ">
        <li className=" hover:text-primary transition-colors cursor-pointer">
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive
                ? { color: themes['[data-theme=autumn]'].error }
                : undefined
            }
          >
            Movies
          </NavLink>
        </li>
        <li className=" hover:text-primary transition-colors cursor-pointer">
          <NavLink
            to="favorites"
            style={({ isActive }) =>
              isActive
                ? { color: themes['[data-theme=autumn]'].error }
                : undefined
            }
          >
            Favorites
          </NavLink>
        </li>
        <li>
          <button className="btn btn-primary" onClick={() => setLang('ar')}>
            {lang}
          </button>
        </li>
        <li className="ml-auto hover:text-primary transition-colors cursor-pointer">
          <NavLink
            to="search"
            style={({ isActive }) =>
              isActive
                ? { color: themes['[data-theme=autumn]'].error }
                : undefined
            }
          >
            Search
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
