import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './containers/HomePage';
import Shop from './containers/Shop';
import Manager from './containers/Manager';
import User from './containers/User';
import Cart from './containers/Cart';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/manager" element={<Manager />} />
        <Route path="/shop/user" element={<User />} />
        <Route path="/shop/cart" element={<Cart />} />
      </Routes>
  );
}


export default App;
