import './App.css';
import Home from './components/Home';
import React from "react"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Cart from './components/Cart';
import Login from './components/Login';
import CardDetail from './components/CardDetail';
import Protected from './components/Protected';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="login" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="detail/:id" element={<Protected><CardDetail/></Protected>} />
    </Route>
  )
);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
