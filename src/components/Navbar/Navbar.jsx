import themes from 'daisyui/src/colors/themes';
import { useContext } from 'react';
import { Navbar, Button, Dropdown, Menu } from 'react-daisyui';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { SettingContext } from '../../data/store/context/SettingProvieder';
import { languages } from '../../i18next';

const activeStyle = ({ isActive }) =>
  isActive ? { color: themes['[data-theme=autumn]'].error } : undefined;

export default function NavBar() {
  const { lang, setLang } = useContext(SettingContext);
  const { t } = useTranslation();

  return (
    <div className="flex container component-preview p-4 items-center justify-center gap-2 font-sans">
      <Navbar className="bg-neutral text-neutral-content">
        <Navbar.Start>
          <Dropdown>
            <Button color="ghost" tabIndex={0} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </Button>
            <Dropdown.Menu
              tabIndex={0}
              className="w-52 menu-compact mt-3 bg-neutral"
            >
              <Dropdown.Item>
                <NavLink to="favorites" style={activeStyle}>
                  {t('Favorites')}
                </NavLink>
              </Dropdown.Item>
              <li tabIndex={0} className="relative">
                <button className="justify-between">
                  {t('language')}
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </button>
                <ul className="p-2  bg-neutral-focus dropdown dropdown-end absolute top-[2rem] left-[50%] translate-x-[-50%]">
                  {languages.map(({ code, country_code, name }) => (
                    <li key={country_code}>
                      <button
                        onClick={() => setLang(code)}
                        disabled={lang === code}
                      >
                        <span
                          className={`flag-icon flag-icon-${country_code}`}
                          style={{
                            opacity: lang === code ? '0.75' : '1',
                          }}
                        ></span>
                        {name}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            </Dropdown.Menu>
          </Dropdown>
          <NavLink
            to="/"
            className="btn btn-ghost normal-case text-xl"
            style={activeStyle}
          >
            {t('Movies')}
          </NavLink>
          <Menu horizontal className="p-0">
            <Menu.Item>
              <NavLink
                to="favorites"
                className="btn btn-ghost normal-case text-xl leading-none hidden lg:block"
                style={activeStyle}
              >
                {t('Favorites')}
              </NavLink>
            </Menu.Item>
            <Menu.Item tabIndex={0} className="hidden lg:block">
              {/* after large */}
              <button>
                {t('language')}
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </button>
              <Menu className="p-2 bg-neutral-focus z-40 ">
                {languages.map(({ code, country_code, name }) => (
                  <Menu.Item key={country_code}>
                    <button
                      onClick={() => setLang(code)}
                      disabled={lang === code}
                    >
                      <span
                        className={`flag-icon flag-icon-${country_code}`}
                        style={{
                          opacity: lang === code ? '0.75' : '1',
                        }}
                      ></span>
                      {name}
                    </button>
                  </Menu.Item>
                ))}
              </Menu>
            </Menu.Item>
          </Menu>
        </Navbar.Start>
        <Navbar.End>
          <NavLink
            to="/search"
            className="btn btn-ghost normal-case text-xl"
            style={activeStyle}
          >
            {t('Search')}
          </NavLink>
        </Navbar.End>
      </Navbar>
    </div>
  );
}
