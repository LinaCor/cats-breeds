import './my-style.css';
import { Link } from "react-router-dom";

export function CategoryItem({ url, breeds }) {

  const [{ id }] = breeds;

  return (
    <div className="card effect">
      <div className="card-image effect-image">
        <img className="custom-img" src={url} alt="some cat" />
        <div className="card-action effect-action">
          <Link to={`/category/${id}/ihihi`} className='effect-link'>
            <span className="effects-span">More info</span>
          </Link>
        </div>
      </div>
    </div>
  )
};