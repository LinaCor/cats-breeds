import { useEffect, useState } from "react";
import { getBreeds } from "../api";
import { Preloader } from "../components/Preloader";
import { CatsList } from "./CatsList.js"

export function Home() {
  const [cats, setCats] = useState([]);


  useEffect(() => {
    getBreeds().then(data => setCats(data))
  }, []);

  console.log(cats)

  return (
    <>
      {cats.length ? <CatsList catalog={cats} /> : <Preloader />}
    </>
  )
}