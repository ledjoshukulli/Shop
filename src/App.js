import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './containers/HomePage';
import Shop from './containers/Shop';
import Manager from './containers/Manager';
import User from './containers/User';
import Cart from './containers/Cart';
import Edit from './containers/Edit';
import { ShopProvider } from './context/ShopContext';

function App() {
  return (
    <ShopProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/manager" element={<Manager />} />
        <Route path="/shop/edit/:productId" element={<Edit />} />
        <Route path="/shop/user" element={<User />} />
        <Route path="/shop/cart" element={<Cart />} />
      </Routes>
      </ShopProvider>
  );
}


export default App;
