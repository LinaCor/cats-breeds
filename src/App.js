import './App.css';
import { Header } from './components/Header.js';
import { Home } from './pages/Home.js';
import { Category } from './pages/Category.js';
import { CategoryCards } from './pages/CategoryCard.js';

import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/category/:id' element={<Category />} />
        <Route path='/category_item/:name/:id' element={<CategoryCards />} />
      </Routes>
    </div>
  );
}

export default App;
