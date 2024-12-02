import './App.css';
import { Footer } from './components/Footer.js';
import { Header } from './components/Header.js';
import { Preloader } from './components/Preloader.js';
import { Contact } from './pages/Contact.js'
import { NotFound } from './pages/NotFound.js'
import { Home } from './pages/Home.js';
import { Category } from './pages/Category.js';

import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/category/:id' element={<Category />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
