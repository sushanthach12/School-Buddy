
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'

const Paths = [
    { path: '/', element: <Home /> },
]

const AllRoutes = () => {
    return (
        <Routes>
            {
                Paths.map(path => {
                    return <Route exact path={path.path} element={path.element}></Route>
                })
            }
        </Routes>
    )
}

export default AllRoutes