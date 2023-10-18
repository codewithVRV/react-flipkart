import './ProductsDetail.css'


function ProductsDetail () {
    return (
        <>
            <div className="container">
            <div className="row">
                <div className="product-details-wrapper d-flex flex-row justify-content-between align-items-start">

                    <div className="product-img d-flex" id="product-img-header">
                        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="product-image" id="product-img" />
                    </div>

                    <div className="product-details-box d-flex flex-column">
                        <div id="productDetails">

                            <div className="product-name" id="product-name">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</div>
                            <div className="product-price fw-bold" id="product-price">$ 109.95</div>
                            <div className="product-description">
                                <div className="product-description-title fw-bold" id="product-info">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</div>
                                <div className="product-description-data" id="product-desc">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</div>
                                
                            </div>
                        </div>

                        <div className="product-actions d-flex justify-content-start">
                            <div className="product-details-action btn btn-primary text-decoration-none">Add to Cart</div>
                        <a href="cart.html" id="goToCartBtn" className="product-details-action btn btn-warning text-decoration-none">Go to cart</a>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}

export default ProductsDetail;