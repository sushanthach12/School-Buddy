
import { Route, Routes } from 'react-router-dom'
import Homepage from '../HomePage/Homepage'

import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Profile from '../Pages/Dashboard/Profile'
import Analytics from '../Pages/Analytics'
import LinkGenerator from '../Pages/LinkGenerator'
import Invoicegenerator from '../Pages/Invoicegenerator'
import InvoiceHistory from '../Pages/InvoiceHistory'


const AllRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Homepage />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/signup' element={<Signup />}></Route>
            <Route exact path='/dashboard' element={<Profile />}></Route>
            <Route exact path='/analytics' element={<Analytics />}></Route>
            <Route exact path='/link-generator' element={<LinkGenerator />}></Route>
            <Route exact path='/invoice-generator' element={<Invoicegenerator />}></Route>
            <Route exact path='/invoice-history' element={<InvoiceHistory />}></Route>
        </Routes>
    )
}

export default AllRoutes