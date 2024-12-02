import { useParams, useNavigate } from "react-router-dom";
import { getCurrentBreeds } from "../api";
import { useEffect, useState } from "react";
import { Preloader } from "../components/Preloader";
import { CategList } from "./CategList";



export function Category() {
  const { id } = useParams();
  const [breeds, setBreeds] = useState([]);
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  }

  useEffect(() => {
    getCurrentBreeds(id).then((data) => setBreeds(data));
  }, [id])


  return (
    <>
      <div className="back-container">
        <button className="btn btn-back grey darken-3" onClick={goBack} >Go back</button>
      </div>
      {breeds.length ? <CategList catalog={breeds} /> : <Preloader />
      }
    </>
  )
};