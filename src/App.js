import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ProductList from './ProductComponents/ProductsList'
import DetailedProductCard from './ProductComponents/DetailedProductCards';
import NavBar from './NavBar'
import Home from './Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route 
              path='/products' 
              element={<ProductList />}
            />
            <Route 
              path='/products/:id'
              element={<DetailedProductCard />}
            />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;