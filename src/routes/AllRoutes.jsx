
import { Route, Routes } from 'react-router-dom'
import Homepage from '../HomePage/Homepage'

import Login from '../Pages/Login'
import Signup from '../Pages/Signup'



const AllRoutes = () => {
    return (
        <Routes>

            <Route exact path='/' element={<Homepage />}></Route>

            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/signup' element={<Signup />}></Route>

        </Routes>
    )
}

export default AllRoutes