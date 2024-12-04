import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getBreeds } from "../api";
import { Preloader } from "../components/Preloader";
import { CatsList } from "./CatsList.js"
import { Search } from "../components/Search.js";

export function Home() {
  const [cats, setCats] = useState([]);
  const [pureCats, setPureCats] = useState([]);

  const { search } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (str) => {
    const queryString = new URLSearchParams();
    queryString.set('search', str);
    navigate(`?${queryString.toString()}`, { replace: true });
  };

  useEffect(() => {
    getBreeds().then(data => {
      setCats(data);
      setPureCats(data);
    });
  }, []);

  useEffect(() => {
    if (search) {
      const query = new URLSearchParams(search);
      const searchTerm = query.get('search');

      if (searchTerm) {
        const filteredArr = cats.filter(item => item.breeds[0]?.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setCats(filteredArr.length ? filteredArr : pureCats);
      } else if (searchTerm.length === 0) {
        setCats(pureCats);
      }
    }
    //eslint-disable-next-line
  }, [search]);



  return (
    <>
      <Search callback={handleSearch} />
      {cats.length ? <CatsList catalog={cats} /> : <Preloader />}
    </>
  )
}