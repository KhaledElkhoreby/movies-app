import themes from 'daisyui/src/colors/themes';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { SettingContext } from '../../data/store/context/SettingProvieder';
import { languages } from '../../i18next';
export default function Navbar() {
  const { lang, setLang } = useContext(SettingContext);
  const { t } = useTranslation();

  return (
    <nav className="bg-neutral-focus text-white text-xl py-4 fixed top-0 w-full z-50 shadow">
      <div className="flex justify-between items-center gap-5  container font-semibold ">
        <div className="flex justify-center items-baseline gap-8">
          <div className=" hover:text-primary transition-colors cursor-pointer">
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive
                  ? { color: themes['[data-theme=autumn]'].error }
                  : undefined
              }
            >
              {t('Movies')}
            </NavLink>
          </div>
          <div className=" hover:text-primary transition-colors cursor-pointer">
            <NavLink
              to="favorites"
              style={({ isActive }) =>
                isActive
                  ? { color: themes['[data-theme=autumn]'].error }
                  : undefined
              }
            >
              {t('Favorites')}
            </NavLink>
          </div>
        </div>
        <div className="flex justify-center items-baseline gap-8">
          <div className="hover:text-primary transition-colors cursor-pointer">
            <NavLink
              to="search"
              style={({ isActive }) =>
                isActive
                  ? { color: themes['[data-theme=autumn]'].error }
                  : undefined
              }
            >
              {t('Search')}
            </NavLink>
          </div>
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-accent rounded-btn ">
              {t('language')}
            </label>
            <ul
              tabIndex="0"
              className="menu dropdown-content p-2 shadow  min-w-max rounded-box mt-4 "
            >
              {languages.map(({ code, country_code, name }) => (
                <li key={country_code}>
                  <button
                    className="btn btn-active btn-accent disabled:text-slate-400 flex flex-row-reverse justify-between"
                    onClick={() => setLang(code)}
                    disabled={lang === code}
                  >
                    <span
                      className={`flag-icon flag-icon-${country_code}`}
                      style={{
                        opacity: lang === code ? '0.75' : '1',
                      }}
                    ></span>
                    <span className="">{name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
