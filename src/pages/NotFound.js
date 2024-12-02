import { useNavigate } from "react-router-dom"

export function NotFound() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  }

  return (
    <>
      страница не найдена
      <button className="btn" onClick={goToHomePage}>назад</button>
    </>
  )
};