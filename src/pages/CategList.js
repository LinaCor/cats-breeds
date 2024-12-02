import './my-style.css';
import { CategoryItem } from './CategoryItem';


export function CategList({ catalog }) {

  return (
    <>
      <div className="cats-container">
        {catalog.map(el => <CategoryItem key={el.id} {...el} />)}
      </div>
    </>
  )
};
