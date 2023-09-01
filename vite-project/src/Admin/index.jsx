import React from 'react'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Category from './pages/Category'
import AdminSidebar from './components/AdminSidebar'
import {
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import Products from './pages/Products';
import Orders from './pages/Orders';
import Brands from './pages/Brands'

export default function Admin() {
    return (
        <> <AdminSidebar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category" element={<Category />} />
                <Route path="/products" element={<Products />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/orders" element={<Orders />} />

                

                <Route path="*" element={<Navigate to='/' replace={true} />} />
            </Routes>
            {/* <div className="row m-0 p-0">
            <div className="col-md-3 m-0 p-0 bg-dark" style={{ height: '100vh' }}>
                <Sidebar />
                
                
            </div>
            <div className="col-md-9">
                
            </div>
        </div> */}
        </>
    )
}