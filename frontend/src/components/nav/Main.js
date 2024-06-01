import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {useAuth} from '../../context/auth';
import {useNavigate} from 'react-router-dom';



export default function Main() {
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const logout = () => {
        setAuth({
            user: null,
            token: "",
            refreshToken: ""
        });
        localStorage.removeItem('auth');
        navigate('/login');
    };
    const loggedIn = auth.user !==null && auth.token !=="" && auth.refreshToken !== "";
    const handlePostAdClick = () => {
        if(loggedIn) {
            navigate('/ad/create');
        } else {
            navigate('/login');
        }
    }


    return (
        <Navbar bg="light" expand="lg" className="justify-content-between">
            <Nav>
                <Nav.Link as={NavLink} exact to="/">
                    Home
                </Nav.Link>
                <Nav.Link onClick ={handlePostAdClick} className='nav-link pointer'>Post Ad</Nav.Link>
                {! loggedIn?<>
                <Nav.Link as={NavLink} to="/login">
                    Login
                </Nav.Link>
                <Nav.Link as={NavLink} to="/register">
                    Register
                </Nav.Link>
                </>: ""}
            </Nav>
        { loggedIn ?(<NavDropdown title="Profile" id="nav-dropdown" className="justify-content-between">
                <Nav.Link as={NavLink} to="/dashboard">
                    Dashboard
                </Nav.Link>
                <NavDropdown.Item onClick={logout} href="#">Logout</NavDropdown.Item>
                
            </NavDropdown>) : ("")}
        </Navbar>
    );
}
