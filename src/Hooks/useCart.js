import { useContext, useEffect } from "react"
import CartContext from "../Context/CartContext"
import axios from "axios"
import { getCartByUser } from "../Apis/fakeStoreProdApis"

function useCart (userId) {
    const {cart, setCart} = useContext(CartContext)

    async function fetchUserCart (userId) {
        const response = await axios.get(getCartByUser(userId))
        console.log("response by user", response)
        console.log("response by user", response.data[0])
        setCart(response.data[0])
    }

    useEffect(() => {
        fetchUserCart(userId)
    }, [userId])

    return [cart, setCart]
}

export default useCart;