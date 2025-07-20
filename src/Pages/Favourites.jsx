import React from 'react';
import { useFavourites } from '../Components/FavouritesContext';
import { useNavigate } from 'react-router-dom';


const Favourites = () => {
  const { favourites } = useFavourites();

  const navigate = useNavigate();

  const Playlist = (id) => {
    navigate('/', { state: { id: id }, replace: true });
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="p-8 w-full max-sm:py-16 h-screen max-sm:h-screen max-sm:bg-repeat bg-[url('/src/assets/Background.png')] bg-cover bg-no-repeat text-white max-sm:m-0 ml-[8em] ">
      <h2 className="text-2xl mb-4">Your Favourites</h2>
      {favourites.length === 0 ? (
        <p>No favourite songs yet.</p>
      ) : (
        <div className="flex flex-wrap  max-sm:w-[16em] max-sm-p-6 max-sm:m-auto sm:grid-cols-2 gap-6">
          {favourites.map((song) => (
            <div onClick={()=>Playlist(song.id)} key={song.id} className="bg-[#0f1521] p-4 rounded-xl w-[15em] max-sm:w-[18em] shadow hover:-translate-y-2 duration-300 cursor-pointer">
              <img className="w-50 h-50 max-sm:m-auto rounded-xl" src={song.attributes.artwork.url} />
              <h3 className="text-lg flex flex-wrap font-semibold mt-2">{song.attributes.name}</h3>
              <p className="text-gray-400">{song.attributes.artistName}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
