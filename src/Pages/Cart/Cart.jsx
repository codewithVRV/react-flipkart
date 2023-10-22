import { useContext, useEffect, useState } from 'react';
import OrderDetailsProduct from '../../Components/OrderDetailsProduct/OrderDetailsProduct';
import './Cart.css'
import CartContext from '../../Context/CartContext';
import axios from 'axios';
import { getProduct, updateProductInCart } from '../../Apis/fakeStoreProdApis';
import UserContext from '../../Context/UserContext';
// import { useParams } from 'react-router-dom';
// import useCart from '../../Hooks/useCart';



function Cart () {


    const {cart, setCart} = useContext(CartContext)
    const {user, setUser} = useContext(UserContext)
    const [products, setProducts] = useState([])
    async function downloadCartProduct (cart) {
        if(!cart || !cart.products) return;
        const productQuantityMapping = {}
        cart.products.forEach(product => {
            productQuantityMapping[product.productId] = product.quantity;
        })
        const productPromise = cart.products.map(product => axios.get(getProduct(product.productId)))
        const productPromiseResponse = await axios.all(productPromise)
        const downloadProducts = productPromiseResponse.map(product => ({...product.data, quantity: productQuantityMapping[product.data.id]}))
        setProducts(downloadProducts)
    }
    
    async function onProductUpdate (productId, quantity) {
        if(!user) return
        const response = await axios.put(updateProductInCart(), {
            userId: user.id, productId, quantity
        })
        setCart({...response.data})
    }
    // const [cart, setCart] = useCart()
    useEffect(() => {
        downloadCartProduct(cart)
    }, [cart])
    return (
        <>
            <div className="container">
            <div className="row">
                <h2 className="cart-title text-center">Your cart</h2>
                <div className="cart-wrapper d-flex flex-row"> 
                    <div className="order-details d-flex flex-column" id="orderDetails">
                        <div className="order-details-title fw-bold text-center">Order Details</div>

                        {/* oderdetails product */}
                        {products.length > 0 && products.map(product => <OrderDetailsProduct 
                                                key={product.id} price={product.price} name={product.title} 
                                                quantity={product.quantity} onRemove={() => onProductUpdate(product.id, 0)}
                                                productImg={product.image}  />)
                                                
                        
                                    }
                        

                        {/* <!-- below product copy paste --> */}
                        <hr/>
                      


                        {/* <!-- ends here --> */}
                    </div>
                    <div className="price-details d-flex flex-column" id="priceDetails">
                            <div className="price-details-box">
                                <div className="price-details-title fw-bold text-center">Price Details</div>
                                <div className="price-details-data">
                                    <div className="price-details-items d-flex flew-row justify-content-between">
                                        <div>Price</div>
                                        <div id="total-price"></div>
                                    </div>
                                    <div className="price-details-items d-flex flew-row justify-content-between">
                                        <div>Discount</div>
                                        <div>&#8377; 2</div>
                                    </div>
                                    <div className="price-details-items d-flex flew-row justify-content-between">
                                        <div>Delivery Charges</div>
                                        <div>FREE</div>
                                    </div>
                                    <div className="price-details-items d-flex flew-row justify-content-between">
                                        <div>Total</div>
                                        <div id="net-price"></div>
                                    </div>
                                </div>
                                <div className="price-details-btn-group both-btn">
                                    <a href="productList.html" className="continue-shopping btn btn-info text-decoration-none">
                                        Continue Shopping
                                    </a>
                                    <a href="checkout.html" className="checkout btn btn-success text-decoration-none">
                                        Checkout
                                    </a>
                                </div>
                                
                            </div>
                            
                            
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default Cart;