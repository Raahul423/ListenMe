import React, { useEffect, useState } from "react"
import { Route, Router, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Favourites from "./Pages/Favourites"
import Library from "./Pages/Library"
import Trending from "./Pages/Trending"
import { Toaster } from "react-hot-toast"
import Sidebar from "./Components/Sidebar"
import Feed from "./Pages/Feed"
import MobileSidebar from "./Components/MobileSide"




function App() {

  return ( 
    <>
    {<Sidebar/>}
    <MobileSidebar/>
    <Toaster/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="Favourites" element={<Favourites/>} />
      <Route path="Library" element={<Library/>} />
      <Route path="Feed" element={<Feed/>} />
      <Route path="Trending" element={<Trending/>} />
    </Routes>
    </>
   
  
  )
}

export default App
