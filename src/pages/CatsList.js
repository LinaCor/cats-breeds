import './my-style.css';
import { CatsItem } from "./CatsItem"


export function CatsList({ catalog }) {

  return (
    <>
      <div className="cats-container">
        {catalog.map(el => <CatsItem key={el.id} {...el} />)}
      </div>
    </>
  )
};