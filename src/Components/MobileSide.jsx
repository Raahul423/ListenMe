import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu } from 'lucide-react'; // optional: for icons
import Favourite from '../assets/heart_3898377.png';
import player from '../assets/next_12153430.png';
import library from '../assets/book_5558430.png';

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="sm:hidden z-10">
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-[110]  p-2 rounded-full shadow-lg"
      >
        {open ? <X className="text-white " /> : <Menu className="text-white" />}
      </button>

      <div
        className={`fixed top-0 left-0 w-full  text-white flex flex-col items-center pt-20 gap-6 transition-all duration-500 ease-in-out  rounded-b-3xl ${
          open ? 'h-[20em] @apply backdrop-blur-xl' : 'h-0 overflow-hidden'
        }`}
      >
        <Link
          onClick={() => setOpen(false)}
          className={`flex items-center gap-2 ${currentPath === '/Favourites' ? 'bg-white/20 px-4 py-2 rounded-xl' : ''}`}
          to="/Favourites"
        >
          <img className="h-6 w-6" src={Favourite} alt="Favourite" />
          Favourite
        </Link>

        <Link
          onClick={() => setOpen(false)}
          className={`flex items-center gap-2 ${currentPath === '/' ? 'bg-white/20 px-4 py-2 rounded-xl' : ''}`}
          to="/"
        >
          <img className="h-6 w-6" src={player} alt="Player" />
          Player
        </Link>

        <Link
          onClick={() => setOpen(false)}
          className={`flex items-center gap-2 ${currentPath === '/Library' ? 'bg-white/20 px-4 py-2 rounded-xl' : ''}`}
          to="/Library"
        >
          <img className="h-6 w-6" src={library} alt="Library" />
          Library
        </Link>
      </div>
    </div>
  );
};

export default MobileSidebar;
