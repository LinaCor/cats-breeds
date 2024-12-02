import { Link } from "react-router-dom"

export function Header() {
  return (
    <>
      <nav>
        <div className="nav-wrapper  grey darken-4">
          <Link to="*" className="brand-logo">Logo</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Main</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

    </>
  )
};