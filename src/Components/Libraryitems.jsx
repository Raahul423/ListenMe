import React from 'react'
import { replace, useNavigate } from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player';

const Libraryitems = ({Currentsong}) => {

    const navigate = useNavigate();

    const Playlist=(id)=>{
        navigate('/',{state:{id: id},replace:true});
        window.scrollTo({
          top:0,
          behavior:'smooth'
        })
    }

  return (
    <div className='min-h-screen flex flex-wrap justify-around gap-6 '>
     {Currentsong.map((data) => (
            <div key={data.id} onClick={()=>Playlist(data.id)} className=' hover:-translate-y-1 cursor-pointer duration-300  w-[17em]  cointainer @apply bg-[rgb(30,42,62)] border border-solid border-[rgba(54,68,98,0.18)]  p-4 rounded-2xl gap-2 h-fit flex flex-col hover:shadow-2xl/30 max-sm:w-[9em] max-sm:gap-2 '>
              
              <img  className='rounded-2xl' src={data.attributes.artwork.url} alt="SomeThing Wrong" />
    
              <h2 className="text-2xl max-sm:text-sm font-semibold text-red-600">{data.attributes.name}</h2>
              <p className='max-sm:text-[10px]'>Artist: {data.attributes.artistName}</p>
              <p className='max-sm:hidden'>Album: {data.attributes.albumName}</p>
              <p className='max-sm:text-[10px]'>Release Date: {data.attributes.releaseDate}</p>
    
            </div>
          ))}

    </div>
  )
}

export default Libraryitems
