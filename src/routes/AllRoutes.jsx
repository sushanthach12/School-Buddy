
import { Route, Routes } from 'react-router-dom'
import Homepage from '../HomePage/Homepage'
import Home from '../components/Home'
const Paths = [
    { path: '/', element: <Home /> },
]

const AllRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Homepage />}></Route>
            {
                Paths.map(path => {
                    return <Route exact path={path.path} element={path.element}></Route>
                })
            }
        </Routes>
    )
}

export default AllRoutes