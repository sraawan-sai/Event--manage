import React from 'react'

import { Outlet, useLocation} from 'react-router-dom'
import Events from '../components/Events'

const EventLayout = () => {
    const location = useLocation()
  const isRoothpath = location.pathname === '/events'
  console.log(isRoothpath)
  return (
    <div>
   {isRoothpath && <Events />}
      <Outlet />
    </div>
  )
}

export default EventLayout
