
import { Route, Routes } from 'react-router-dom'
import Homepage from '../HomePage/Homepage'

import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Profile from '../Pages/Dashboard/Profile'
import Analytics from '../Pages/Analytics'
import LinkGenerator from '../Pages/LinkGenerator'


const AllRoutes = () => {
    return (
        <Routes>

            <Route exact path='/' element={<Homepage />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/signup' element={<Signup />}></Route>
            <Route exact path='/dashboard' element={<Profile />}></Route>
            <Route exact path='/analytics' element={<Analytics />}></Route>
            <Route exact path='/link-generator' element={<LinkGenerator />}></Route>

        </Routes>
    )
}

export default AllRoutes