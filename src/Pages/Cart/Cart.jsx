import OrderDetailsProduct from '../../Components/OrderDetailsProduct/OrderDetailsProduct';
import './Cart.css'
// import { useParams } from 'react-router-dom';
// import useCart from '../../Hooks/useCart';



function Cart () {
    // const {userId} = useParams()
    
    // const [cart, setCart] = useCart()

    return (
        <>
            <div className="container">
            <div className="row">
                <h2 className="cart-title text-center">Your cart</h2>
                <div className="cart-wrapper d-flex flex-row"> 
                    <div className="order-details d-flex flex-column" id="orderDetails">
                        <div className="order-details-title fw-bold text-center">Order Details</div>

                        {/* oderdetails product */}
                        <OrderDetailsProduct />

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