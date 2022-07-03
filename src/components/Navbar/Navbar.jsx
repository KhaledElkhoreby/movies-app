import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="bg-neutral-focus text-white text-xl py-4 fixed top-0 w-full z-50 shadow">
      <ul className="flex items-center gap-5  container font-semibold ">
        <li className=" hover:text-primary transition-colors cursor-pointer">
          <Link to="/">Movies</Link>
        </li>
        <li className=" hover:text-primary transition-colors cursor-pointer">
          <Link to="favorites">Favorites</Link>
        </li>
        <li className="ml-auto hover:text-primary transition-colors cursor-pointer">
          <Link to="search">Search</Link>
        </li>
      </ul>
    </nav>
  );
}
