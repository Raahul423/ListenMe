import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Favourites from "./Pages/Favourites"
import Library from "./Pages/Library"
import { Toaster } from "react-hot-toast"
import Sidebar from "./Components/Sidebar"
import MobileSidebar from "./Components/MobileSide"

function App() {
  return (
    <>
      <Sidebar />
      <MobileSidebar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favourites" element={<Favourites />} />
        <Route path="/Library" element={<Library />} />
      </Routes>
    </>
  )
}

export default App
