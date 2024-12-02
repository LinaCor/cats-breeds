import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCurrentCat } from "../api";
import './my-style.css';


export function CategoryCards() {
  const { id } = useParams();
  const [catImage, setCatImage] = useState();
  const [breeds, setBreeds] = useState([]);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  useEffect(() => {
    getCurrentCat(id).then(data => {
      setCatImage(data.url);
      setBreeds(data.breeds[0]);
    });
  }, [id])


  return (
    <>
      <div className="back-container">
        <button className="btn btn-back grey darken-3" onClick={goBack}>Go back</button>
      </div>
      <div className="card-lonely">
        <div className="card ">
          <div className="card-image">
            <img src={catImage} alt={breeds.alt_names} />
            <span className="card-title">{breeds.name}</span>
          </div>
          <div className="card-content">
            <p>{breeds.description}</p>
            <ul className="collection">
              <li className="collection-item active grey ">Country: {breeds.origin}</li>
              <li className="collection-item">life expectancy: {breeds.life_span}</li>
              <li className="collection-item active grey ">Child friendly: {breeds.child_friendly}</li>
              <li className="collection-item">Dog friendly: {breeds.dog_friendly}</li>
              <li className="collection-item active grey ">Energy: {breeds.energy_level}</li>
              <li className="collection-item">Grooming: {breeds.grooming}</li>
              <li className="collection-item active grey ">Social needs: {breeds.social_needs}</li>
              <li className="collection-item">Friendliness to strangers: {breeds.stranger_friendly}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
};