import { API_URL, API_KEY } from "./config";

//получение всех доступных вариантов
const getBreeds = async () => {
  const response = await fetch(`${API_URL}search?limit=20&has_breeds=1&api_key=${API_KEY}`);
  return await response.json();
}

//получение конкретной породы
const getCurrentBreeds = async (breedsId) => {
  const response = await fetch(`${API_URL}search?limit=20&breed_ids=${breedsId}&api_key=${API_KEY}`);
  return await response.json();
}

//получение конкретного кота
const getCurrentCat = async (imageId) => {
  const response = await fetch(`${API_URL}${imageId}`);
  return await response.json();
}

export { getBreeds, getCurrentBreeds, getCurrentCat };