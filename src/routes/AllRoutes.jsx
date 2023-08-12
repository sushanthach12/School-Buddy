
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'

const AllRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
        </Routes>
    )
}

export default AllRoutes