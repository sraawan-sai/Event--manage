import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import MainPage from '../components/MainPage'

const MainLayout = () => {
  const location = useLocation()
  const isRoothpath = location.pathname ==='/'
  console.log(isRoothpath,'location')
  return (
    <div>
      {isRoothpath && <MainPage />}
    
      <Outlet />
    </div>
  )
}

export default MainLayout
