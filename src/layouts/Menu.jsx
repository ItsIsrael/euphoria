import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Menu = ({setOpen}) => {
const headersData = [
  {
    label: "Home",
    id: "/",
  },
  {
    label: "Acerca de",
    id: "acerca-de",
  },
  {
    label: "Servicios",
    id: "servicios",
  },
  {
    label: "Contacto",
    id: "contacto",
  },  {
    label: "Merchandising",
    id: "Merchandising",
  }, {
    label: "Login",
    id: "Login",
  },
];

const handleClick = () =>{
  setOpen(false)
}
  return (
      headersData.map((item) => {
        return (
          <li className='nav-item ' key={item.id}>
            <NavLink className={({isActive}) => isActive ? 'active': ''}
            onClick={handleClick} to={item.id}>{item.label}</NavLink>
          </li>
        );
      })
  )
}

export default Menu;