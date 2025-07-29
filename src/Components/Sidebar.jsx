import React from 'react'
import image from '../assets/Listenme.png'
import feed from '../assets/grid_13963747.png'
import tending from '../assets/chart_16960942.png'
import player from '../assets/next_12153430.png'
import Favourite from '../assets/heart_3898377.png'
import library from '../assets/book_5558430.png'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {

  const location = useLocation()
  const currentpath = location.pathname;


  return (
    <div className='fixed top-0 left-0 h-screen w-[8em] justify-around max-sm:hidden rounded-bl-[4em] rounded-tl-[4em] bg-[#e69a6d] flex flex-col items-center py-4 z-50'>
      <img className='h-20 w-20 rounded-full' src={image} alt="Lisen Me" />

      <div className='flex flex-col gap-10 items-center'>
      

        <Link className={`hover:-translate-y-1 duration-300 ${currentpath === '/Favourites' ? 'px-4 py-4 bg-white/20 rounded-2xl': ''}`} to={'/Favourites'} ><img className='h-8 w-8 m-auto' src={Favourite} alt="Favourite" />Favourite </Link>

        <Link className={`hover:-translate-y-1 duration-300 ${currentpath === '/' ? 'px-6 py-4 bg-white/20 rounded-2xl': ''}`} to={'/'} ><img className='h-8 w-8 m-auto' src={player} alt="player" /> Player</Link>



        <Link className={`hover:-translate-y-1 duration-300 ${currentpath === '/Library' ? 'px-6 py-4 bg-white/20 rounded-2xl': ''}`} to={'Library'} ><img className='h-8 w-8 m-auto' src={library} alt="library" />Library </Link>
      </div>

      <div>
        
      </div>
    </div>
  )
}

export default Sidebar
