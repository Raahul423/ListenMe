import { ArrowRight, Heart, HeartIcon, Rss } from 'lucide-react'
import React, { useState } from 'react'
import formatDuration from './Duration'
import { useNavigate } from 'react-router-dom'
import { useFavourites } from './FavouritesContext'
import toast from 'react-hot-toast'

const Musicdata = ({ SongsList, Songsdata }) => {

    const {favourites} = useFavourites();
    const { addToFavourites, removeFromFavourites, isFavourite } = useFavourites();

    const isFav = isFavourite(SongsList.id);

    const handleClick = () => {
        if (isFav) {
            removeFromFavourites(SongsList.id);
            toast("Remove From Favourite")
        } else {
            addToFavourites(SongsList);
            toast.success("Add To Favourites")
        }
    };

    const navigate = useNavigate();

    const Forward = (id) => {
        navigate('/', { state: { id: id } })
    }

    const Clicksongs = (id) => {
        navigate('/', { state: { id: id } })
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const similarSongs = Songsdata
        .filter((data) => data.attributes.genreNames[0] === SongsList.attributes.genreNames[0] && data.id !== SongsList.id)
        .slice(0, 4);

    const Newreleases = Songsdata
        .filter((data) => data.attributes.releaseDate.startsWith("2025"))
        .slice(0, 4);

    return (
        <div className='basis-[30%]  flex flex-col max-sm:p-6 gap-8'>
            <div className='basis-[65%] max-sm:rounded-2xl rounded-tl-[3em] w-[25em]  rounded-bl-[3em]  @apply backdrop-blur-xl border border-[#121926] p-6 max-sm:p-4 gap-2 flex flex-col max-sm:m-auto max-sm:w-[18em]'>

                <img className=' max-sm:h-50 max-sm:w-50 h-80 w-80 m-auto hover:shadow-lg  rounded-3xl hover:scale-95 duration-300 hover:rounded-none  ease-in-out' src={SongsList.attributes.artwork.url} alt="Something Wrong Mr Rahul" />

                <div className=" w-full overflow-hidden flex justify-between items-center">
                    <div className="animate-marquee flex whitespace-nowrap w-full">
                        <p className="mr-8 max-sm:text-xl  text-2xl">{SongsList.attributes.name}</p>
                    </div>
                </div>

                <p className='text-gray-500 max-sm:text-xl'>{SongsList.attributes.artistName}</p>

                <div className='flex justify-between'>
                    <p className=' max-sm:text-sm text-gray-500'>{SongsList.attributes.releaseDate}</p>
                    <HeartIcon onClick={handleClick} className={`h-8 w-8 max-sm:h-5 max-sm:w-5 cursor-pointer ${isFav ? "fill-red-600 stroke-red-600" : ""}`} />
                </div>



            </div>



            <div className='basis-[35%] h-[10em] max-sm:m-auto border-black border rounded-tl-4xl rounded-bl-4xl bg-blue-400/60 p-6 max-sm:px-4 max-sm:w-[18em] gap-6 flex flex-col max-sm:rounded-4xl'>
                <div className='flex justify-between max-sm:text-md'>
                    <p className='text-2xl'>Up Next</p>
                    <Rss className='h-8 w-8' />
                </div>

                <div className='flex flex-col gap-2 overflow-y-auto scroll-hide max-h-42'>
                    {Songsdata.slice(20, 100).map((data) => (
                        <div onClick={() => Forward(data.id)} className='flex justify-between'>
                            <p className='text-sm cursor-pointer'>{data.attributes.name}</p>
                            <p>{formatDuration(data.attributes.durationInMillis)}</p>
                        </div>
                    ))}
                </div>
            </div>




            {/*-----------------  For Mobile Veiw -------------------------*/}


            <div className='sm:hidden max-sm:h-fit max-sm:m-auto max-sm:w-[18em] max-sm:justify-center h-screen rounded-2xl @apply backdrop-blur-xl border border-[#121926] p-4 flex justify-around flex-wrap max-sm:gap-4'>
                <div className=' max-sm:h-fit w-[15em] bg-[#0f1521] rounded-2xl hover:-translate-y-2 shadow-lg duration-300 cursor-pointer p-4 flex flex-col gap-2 h-[20em]'>
                    <p className='text-xl max-sm:py-4 font-semibold'>Pop Up Songs</p>
                    {similarSongs.map((data) => (
                        <div onClick={() => Clicksongs(data.id)} key={data.id} className='flex justify-between text-gray-400 items-center gap-4'>
                            <img className='h-12 w-12 rounded-full' src={data.attributes.artwork.url} alt="Something went Wrong" />
                            <p>{data.attributes.artistName}</p>

                        </div>
                    ))}
                    <div onClick={() => navigate('/Library')} className='justify-end flex text-gray-500 text-sm hover:text-white duration-300'>
                        <p>Show More</p>
                        <ArrowRight />
                    </div>

                </div>



                <div className=' h-[20em] max-sm:h-fit w-[15em] bg-[#0f1521] rounded-2xl hover:-translate-y-2 shadow-lg duration-300 gap-2 flex flex-col cursor-pointer p-4'>
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

                    <div onClick={() => navigate('/Library')} className='justify-end flex text-gray-500 text-sm hover:text-white duration-300'>
                        <p>Show More</p>
                        <ArrowRight />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Musicdata
