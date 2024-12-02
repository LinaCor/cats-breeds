import { Link } from "react-router-dom";
import logo from "../img/cat-svgrepo-com.svg";
import "../pages/my-style.css";


export function Header() {
  return (
    <>
      <header className="header grey darken-4">
        <Link to="/" className="brand-logo">
          <img src={logo} alt="logo" className="logo-img" />
        </Link>
      </header>
    </>
  )
};