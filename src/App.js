// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Carts from './components/Cart';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='cart' element={<Carts/>}/>
      </Routes>
   
    </div>
  );
}

export default App;
