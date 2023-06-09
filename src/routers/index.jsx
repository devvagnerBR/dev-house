import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Homepage from '../pages/homepage'
import NewRoom from '../pages/new_room'
import AuthContextProvider from '../contexts/auth_context';
import Room from '../pages/room';
import AdminRoom from '../pages/admin';
import Page404 from '../pages/page404';

const RouterConfig = () => {

  return (

    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path='/' exact element={<Homepage />} />
          <Route path='/salas/nova' element={<NewRoom />} />
          <Route path='/admin/sala/:id' element={<AdminRoom />} />
          <Route path='/sala/:id' element={<Room />} />
          <Route path='sala-nao-encontrada' element={<Page404 />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default RouterConfig