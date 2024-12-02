import { useParams } from "react-router-dom";
import { getCurrentBreeds } from "../api";
import { useEffect, useState } from "react";
import { Preloader } from "../components/Preloader";
import { CategList } from "./CategList";


export function Category() {
  const { id } = useParams();
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    getCurrentBreeds(id).then((data) => setBreeds(data));
  }, [id])


  return (
    <>
      <div className="cats-container">
        {breeds.length ? <CategList catalog={breeds} /> : <Preloader />}
      </div>
    </>
  )
};