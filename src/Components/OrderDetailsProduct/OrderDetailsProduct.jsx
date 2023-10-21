function OrderDetailsProduct () {
    return (
        <>
             <div className="order-details-product d-flex flex-row">

                            <div className="order-details-product-img d-flex">
                                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
                            </div>

                            <div className="order-details-product-data d-flex flex-column">
                                <div>Some Product</div>
                                <div>&#8377; 1000</div>
                            </div>
                            <div className="order-details-product-actions d-flex flex-column">
                                <div className="order-details-product-quantity">
                                    <div className="fw-bold">Quantity</div>
                                    <div className="form-group">
                                        <select type="text" className="form-select">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>

                                </div>
                                <div className="order-details-product-remove btn btn-danger">Remove</div>
                            </div>

                        </div> 
        </>
    )
}

export default OrderDetailsProduct;