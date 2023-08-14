
import { Route, Routes } from 'react-router-dom'
import Homepage from '../HomePage/Homepage'

import Login from '../Pages/Login'



const AllRoutes = () => {
    return (
        <Routes>

            <Route exact path='/' element={<Homepage />}></Route>

            <Route exact path='/login' element={<Login />}></Route>

        </Routes>
    )
}

export default AllRoutes