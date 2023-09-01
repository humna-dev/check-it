import React, { useEffect , useContext} from 'react'
import { FiHome } from 'react-icons/fi'
import { BiCategoryAlt } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'
// import { GlobalContext } from '../../Context/context'
import {GlobalContext} from '../../Context/context'
import Cookies from 'js-cookie';

export default function Sidebar() {
    const { state, dispatch } = useContext(GlobalContext)

    const location = useLocation()

    const NavItems = [
        {
            tab: "Home",
            url: "/",
            icon: <FiHome />
        },
        {
            tab: "Categories",
            url: "/category",
            icon: <BiCategoryAlt />
        },
        {
            tab: "Products",
            url: "/products",
            icon: <BiCategoryAlt />
        },
        {
            tab: "Orders",
            url: "/orders",
            icon: <BiCategoryAlt />
        },
        {
            tab: "Characters",
            url: "/brand",
            icon: <BiCategoryAlt />
        }
    ]


    return (
        <>

            <div className="bg-theme p-3 d-flex text-white justify-content-between align-items-center">
                <span>Admin Name</span>
                <button className="btn btn-outline-light"
                 onClick={() => {
                    Cookies.remove('token')
                    dispatch({ type: "USER_LOGOUT" })
                }}
                >Logout</button>
            </div>


            <ul className="nav flex-column pt-3">
                {
                    NavItems.map((val, key) =>

                        <li key={key} className={`nav-item m-2  ${location.pathname == val.url ? 'bg-white rounded' : null}`}>
                            <Link className='nav-link d-flex align-items-center  gap-2' to={val.url}>
                                <span>{val.icon}</span>

                                <span>{val.tab}</span>
                            </Link>
                        </li>)
                }

            </ul>

        </>
    )
}