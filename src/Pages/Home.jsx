import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import DummyData from '../assets/Data';
import Musicdata from '../Components/Musicdata';
import MusicItems from '../Components/MusicItems';

const Home = () => {

    const location = useLocation();
    console.log(location) // check wheather is State Null or Not
    const Songid = location.state?.id;
    const SongsList = DummyData.find((song) => song.id === Songid) || DummyData[0]


    return (
        <div className='bg-[url("/src/assets/Background.png")] bg-cover max-sm:h-fit bg-no-repeat max-sm:bg-repeat h-screen w-full ml-[8em] max-sm:m-0 flex max-sm:flex-col '>
            <MusicItems SongsList={SongsList} Songsdata={DummyData}/>
            <Musicdata SongsList={SongsList} Songsdata={DummyData} />
        </div >
    )
}

export default Home
