import { NavLink, useHistory } from "react-router-dom";
import  AuthContext  from "../context/AuthContext";
import Nav from "react-bootstrap/Nav";
import { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";


function Navigation() {
    const [auth, setAuth] = useContext(AuthContext);

    const history = useHistory();

    function LogOut() {
        setAuth(null);
        history.push("/");
    }
    return (

<Navbar expand="lg">
<NavLink to="/" exact>
    <Navbar.Brand>Holidaze</Navbar.Brand>
</NavLink>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <NavLink to="/" exact className="nav-link">
            Home
        </NavLink>
        <NavLink to="/contact" className="nav-link">
            Contact
        </NavLink>

        <NavLink to="/destinations" className="nav-link">
        Hotels
        </NavLink>
        

        {auth ? (
            <>
            
     <NavLink className="nav-link" to="/Admin">Admin</NavLink>  <button type="button" class="btn btn-light" onClick={LogOut}>Log out</button>
</>
        ) : (
            <NavLink to="/login" className="nav-link">
            Login
        </NavLink> )}
    </Nav>
</Navbar.Collapse>
</Navbar>

);
}

export default Navigation;