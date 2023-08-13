
import { Route, Routes } from 'react-router-dom'
import Homepage from '../HomePage/Homepage'

const AllRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Homepage />}></Route>
        </Routes>
    )
}

export default AllRoutes