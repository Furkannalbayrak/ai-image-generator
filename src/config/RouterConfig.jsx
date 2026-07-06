import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreatePicture from '../components/CreatePicture'
import Home from '../components/Home'
import Header from '../components/Header'
import Gallery from '../components/Gallery'
import CreatedPicture from '../components/CreatedPicture'

function RouterConfig() {
  return (
    <div>
      <Routes>

        <Route path='/' element={
          <>
            <Header />
            <Home />
            <Gallery />
          </>
        } />

        <Route path='/create-picture' element={
          <>
            <CreatePicture />
          </>
        } />

        <Route path='/created-picture' element={
          <>
            <CreatedPicture/>
          </>
        } />

      </Routes>
    </div>
  )
}

export default RouterConfig