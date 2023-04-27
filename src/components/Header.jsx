import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">HomePage</NavLink>||
        <NavLink to="/favrouite">Favrouite</NavLink>||
        <NavLink to="/read">Read</NavLink>||
        <NavLink to="/profile">Profile</NavLink>
      </nav>
    </div>
  );
};
