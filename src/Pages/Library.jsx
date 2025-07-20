import React, { useState } from 'react'
import Libraryitems from '../Components/Libraryitems';
import DummyData from '../assets/Data';
import {ArrowBigLeft, ArrowBigRight } from 'lucide-react';

const Library = () => {

  const Itemperpage = 44;
  const [pagging, setPagging] = useState(1)

  const totalpages = Math.ceil(DummyData.length / Itemperpage);
  const startIndex = (pagging - 1) * Itemperpage;
  const Currentsong = DummyData.slice(startIndex, startIndex + Itemperpage);

  const NextPage = () => {
    if (pagging < totalpages) {
      setPagging(next => next + 1);
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })
    }
  }


  const PrevPage = () => {
    if (pagging > 1) {
      setPagging(Prev => Prev - 1)
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })
    }
  }

  return (

    <div className='ml-[8em] max-sm:m-0 max-sm:p-[1em] w-full bg-[url("./src/assets/Background.png")] bg-cover p-6 '>
      <h1 className='text-4xl font-semibold py-8'>Songs Libarary</h1>
      <Libraryitems Currentsong={Currentsong} />

      <div className='px-[4em] max-sm:p-4 justify-center items-center py-10 gap-4 flex'>
        <button onClick={PrevPage} disabled={pagging === 1} className='py-2 px-8 bg-amber-900 cursor-pointer max-sm:py-1 rounded-sm'>
          <ArrowBigLeft/>
        </button>

        <span>
          Page  {pagging}  Of  {totalpages}
        </span>

        <button onClick={NextPage} disabled={pagging === totalpages} className='py-2 px-8 max-sm:py-1 bg-amber-950 cursor-pointer rounded-sm'>
          <ArrowBigRight/>
        </button>




      </div>
    </div>


  )
}

export default Library
