
import { Route, Routes } from 'react-router-dom'
import Homepage from '../HomePage/Homepage'

import Home from '../components/Home'
const Paths = [
    { path: '/', element: <Homepage /> },
]


import Login from '../Pages/Login'

// const Paths = [
//     { path: '/', element: <Homepage /> },
// ]


const AllRoutes = () => {
    return (
        <Routes>

            {/* <Route exact path='/' element={<Homepage />}></Route> */}
            {
                Paths.map(path => {
                    return <Route exact path={path.path} element={path.element}></Route>
                })
            }

            <Route exact path='/' element={<Homepage />}></Route>

            <Route exact path='/login' element={<Login />}></Route>

        </Routes>
    )
}

export default AllRoutes