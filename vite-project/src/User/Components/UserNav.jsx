import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/context';
import Cookies from 'js-cookie';
// import { IoPersonOutline } from 'react-icons/io5';
import { BsBagHeart } from 'react-icons/bs'
import Dropdown from 'react-bootstrap/Dropdown';


    
    export default function UserNav() {
        const { state, dispatch } = useContext(GlobalContext);
    
        const linkStyle = {
            color: '#CD7F32',
           
        };
    
    
        
        const signOutStyle = {
            color: 'black', 
            backgroundColor: '#CD7F32',
            border: 'none',
            transition: 'color 0.3s ease-in-out', 
        };
    
        const cartIconStyle = {
            transition: 'transform 0.3s ease-in-out', 
        };
    
        const handleCartHover = (e) => {
            e.target.style.transform = 'rotate(-10deg)'; 
        };
    
        const handleCartMouseOut = (e) => {
            e.target.style.transform = 'rotate(0deg)'; 
        };
    
    

    return (
        <Navbar expand="lg" className="bg-theme">
            <Container>
            <Link className='navbar-brand' to='/'>
                    <img src="src/images/Blahom_logo_Final01@3x.png" width='200px' alt="" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                    <Link to='/' className='nav-link' style={linkStyle}
                        
                        onMouseOver={(e) => e.target.style.color = 'white'} 
                           onMouseOut={(e) => e.target.style.color = '#CD7F32'} 
                       
                       >Home</Link>

                     <Link to='/events' className='nav-link' style={linkStyle}
                       
                        onMouseOver={(e) => e.target.style.color = 'white'} 
                           onMouseOut={(e) => e.target.style.color = '#CD7F32'} 
                       
                       >Events</Link>

                       <Link to='/brands' className='nav-link' style={linkStyle}
                       
                        onMouseOver={(e) => e.target.style.color = 'white'} 
                           onMouseOut={(e) => e.target.style.color = '#CD7F32'} 
                       
                       >Characters</Link>
                       <Link to='/products' className='nav-link' style={linkStyle}
                       
                        onMouseOver={(e) => e.target.style.color = 'white'} 
                           onMouseOut={(e) => e.target.style.color = '#CD7F32'} 
                       
                       >Products</Link>
                    
                        <Dropdown style={linkStyle}
                        
                        onMouseOver={(e) => e.target.style.color = 'white'} 
                        onMouseOut={(e) => e.target.style.color = '#CD7F32'}
                        
                       
>
                            <Dropdown.Toggle variant="bg-theme" id="dropdown-basic"  style={linkStyle}
                        
                        onMouseOver={(e) => e.target.style.color = 'white'} 
                        onMouseOut={(e) => e.target.style.color = '#CD7F32'}>
                                Category
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='bg-theme'>
                                <Dropdown.Item href="/category" >All Categories</Dropdown.Item>
                                <hr />
                                <Dropdown.Item href="/books">Books</Dropdown.Item>
                                <Dropdown.Item href="/ebooks">E-books</Dropdown.Item>
                                <Dropdown.Item href="/merch">Merch</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                
                    
                    </Nav>

                    <div className="d-flex gap-3">
                    <Link
                            className="btn"
                            to='/cart'
                            onMouseOver={handleCartHover}
                            onMouseOut={handleCartMouseOut}
                        >
                            <BsBagHeart size={24} color="#CD7F32" style={cartIconStyle}
                            
                            onMouseOver={(e) => e.target.style.color = 'white'} 
                            onMouseOut={(e) => e.target.style.color = '#CD7F32'} 
                            />
                        </Link>
                        <button
                            className="btn"
                            style={signOutStyle}
                            onMouseOver={(e) => e.target.style.color = 'black'} 
                            onMouseOut={(e) => e.target.style.color = 'white'} 
                            onClick={() => {
                                Cookies.remove('token');
                                dispatch({ type: "USER_LOGOUT" });
                            }}
                        >
                            SignOut
                        </button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}