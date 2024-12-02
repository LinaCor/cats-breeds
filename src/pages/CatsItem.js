import './my-style.css';

import { Link } from "react-router-dom";

export function CatsItem({ url, breeds }) {

  const [{ id, name, description }] = breeds;

  return (
    <div className="card">
      <div className="card-image">
        <img className="custom-img" src={url} alt="some cat" />
      </div>
      <div className="card-content">
        <span className="card-title grey-text text-darken-4">{name}</span>
        <p>{description}</p>

      </div>
      <div className="card-action">
        <Link to={`/category/${id}`} className="btn grey darken-3">More photo & info</Link>
      </div>
    </div>
  )
};