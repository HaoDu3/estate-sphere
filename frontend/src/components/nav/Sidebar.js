
import {useAuth} from '../../context/auth';
import {NavLink} from 'react-router-dom';


export default function Sidebar() {
    return (
       <nav className="nav">
  <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>

  <NavLink className="nav-link" to="/ad/create">Create Ad</NavLink>
  <NavLink className="nav-link" to="/user/profile">User Profile</NavLink>
  <NavLink className="nav-link" to="/user/settings">Settings</NavLink>
  <NavLink className="nav-link" to="/user/wishlist">Wishlist</NavLink>
  <NavLink className= "nav-link" to="/user/enquiries">Enquired Properties</NavLink>
</nav>

    );
}