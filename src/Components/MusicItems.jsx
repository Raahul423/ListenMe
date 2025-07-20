import { ArrowRight } from 'lucide-react';
import React, { useRef, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { useNavigate } from 'react-router-dom';
import { useFavourites } from './FavouritesContext';

const MusicItems = ({ SongsList, Songsdata }) => {

    const navigate = useNavigate();
     const {favourites} = useFavourites();

    const Clicksongs = (id) => {
        navigate('/', { state: { id: id } })
    }

    const [isplaying, setIsplaying] = useState(false)
    const ref = useRef();

    const similarSongs = Songsdata
        .filter((data) => data.attributes.genreNames[0] === SongsList.attributes.genreNames[0] && data.id !== SongsList.id)
        .slice(0, 4);

    const Newreleases = Songsdata
        .filter((data) => data.attributes.releaseDate.startsWith("2025"))
        .slice(0, 4);

    return (
        <div className='basis-[70%]  p-8 gap-2 max-sm:p-6 flex flex-col'>

            <div className='basis-[50%] max-sm:w-[18em] max-sm:m-auto flex max-sm:flex-col max-sm:gap-6'>
                <div className='basis-[40%] m-auto max-sm:flex max-sm:justify-center max-sm:w-fit relative w-[20em] h-[20em]'>
                    <img className={`rounded-full w-[20em] max-sm:w-[10em] ${isplaying ? 'spin' : 'spin paused'}`} src="./src/assets/Disc.png" alt="Error" />
                    <img
                        className={`rounded-full w-[8em] max-sm:w-16 max-sm:h-16 h-[8em] absolute top-[10em] max-sm:left-20 max-sm:top-[5em] left-[10em] spin translate-x-[-50%] translate-y-[-50%] ${isplaying ? 'spin' : 'paused'}`}
                        src={SongsList?.attributes?.artwork?.url}
                        alt="Now Playing"
                    />
                </div>

                <div className='basis-[60%] flex max-sm:my-4 flex-col items-center gap-4 m-auto max-sm:m-0'>
                    <h2 className='text-[3em] max-sm:text-2xl font-semibold'>Visiting Hours</h2>
                    <p className='text-gray-500 text-xl max-sm:text-sm'>{SongsList?.attributes?.artistName}</p>
                    <ReactAudioPlayer src={SongsList?.attributes?.previews[0].url}
                        ref={ref}
                        controls
                        autoPlay
                        onPlay={() => setIsplaying(true)}
                        onPause={() => setIsplaying(false)}
                        className='max-sm:h-[3em] max-sm:w-[16em]' />
                </div>
            </div>





            <div className='basis-[50%]  flex max-sm:hidden max-sm:h-fit max-sm:m-auto max-sm:w-[18em] max-sm:justify-center h-screen rounded-2xl @apply backdrop-blur-xl border border-[#121926] p-4 justify-around flex-wrap max-sm:gap-4'>
                <div className='group max-sm:h-fit w-[15em] bg-[#0f1521] rounded-2xl hover:-translate-y-2 shadow-lg duration-300 cursor-pointer p-4  flex flex-col gap-2 h-[20em]'>
                    <p className='text-xl max-sm:py-4 font-semibold'>Pop Up Songs</p>
                    {similarSongs.map((data) => (
                        <div onClick={() => Clicksongs(data.id)} key={data.id} className='flex justify-between text-gray-400 items-center gap-4'>
                            <img className='h-12 w-12 rounded-full' src={data.attributes.artwork.url} alt="Something went Wrong" />
                            <p>{data.attributes.artistName}</p>

                        </div>
                    ))}
                    <div className="flex-grow" />

                    <div onClick={() => navigate('/Library')} className='justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-500 text-sm hover:text-white flex'>
                        <p>Show More</p>
                        <ArrowRight />
                    </div>

                </div>

                <div className='max-sm:gap-4 group h-[20em] w-[15em] bg-[#0f1521] rounded-2xl flex flex-col hover:-translate-y-2 shadow-lg duration-300 cursor-pointer p-4 gap-2 overflow-hidden'>
                    <p className='text-xl  font-semibold'>Your Favourite Songs</p>
                    {favourites.map((song) => (
                        <div onClick={() => Clicksongs(song.id)} key={song.id} className="flex justify-between text-gray-400 items-center gap-4">
                            <img className="h-12 w-12 rounded-full " src={song.attributes.artwork.url} />
                            <p className="text-gray-400">{song.attributes.artistName}</p>
                        </div>
                    ))}

                    <div className="flex-grow" />

                    <div onClick={() => navigate('/Favourites')} className='justify-end opacity-0 group-hover:opacity-100 transition-opacity flex text-gray-500 text-sm hover:text-white duration-300'>
                        <p>Show More</p>
                        <ArrowRight />
                    </div>
                </div>

                <div className=' group  h-[20em] max-sm:h-fit w-[15em] bg-[#0f1521] rounded-2xl hover:-translate-y-2 shadow-lg duration-300 gap-2 flex flex-col cursor-pointer p-4'>
                    <p className='text-xl max-sm:py-4 font-semibold'>New Releases Songs</p>
                    {Newreleases.map((data) => (
                        <div onClick={() => Clicksongs(data.id)} key={data.id} className='flex justify-between text-gray-400 items-center gap-4'>
                            <img
                                className='h-12 w-12 rounded-full'
                                src={data.attributes.artwork.url}
                                alt="Artwork"
                            />
                            <p className='text-sm'>{data.attributes.artistName}</p>
                        </div>
                    ))}

                    <div className="flex-grow" />


                    <div onClick={() => navigate('/Library')} className='justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex text-gray-500 text-sm hover:text-white'>
                        <p>Show More</p>
                        <ArrowRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MusicItems
