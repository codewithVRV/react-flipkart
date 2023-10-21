
import './App.css'
import Header from './Components/Header/Header'
import MainRoutes from './Routes/MainRoutes'
import { Toaster } from 'react-hot-toast';
import UserContext from './Context/UserContext';
import { useEffect, useState } from 'react';
import CartContext from './Context/CartContext';
import axios from 'axios';
import jwt_decode from "jwt-decode";

import { useCookies } from 'react-cookie';

function App() {

  const [user, setUser] = useState(null)
  const [cart, setCart] = useState({})
  const [token, setToken] = useCookies(['jwt-token'])


  function accessToken () {
    axios.get(`${import.meta.env.VITE_FAKE_STORE_URL}/accesstoken`, {withCredentials: true})
    .then((res) => {
      setToken('jwt-token', res.data.token, {httpOnly: true})
      const tokenDetails = jwt_decode(res.data.token)
      setUser({username: tokenDetails.user, id: tokenDetails.id})
    })
  }
  useEffect(() => {
    accessToken()
  }, [])

  return (
    <UserContext.Provider value={{user, setUser}}>
      <CartContext.Provider value={{cart, setCart}}>

      <div>
        <Header />
        <MainRoutes />
        <Toaster />
      </div>
      </CartContext.Provider>

    </UserContext.Provider>
  )
}

export default App
