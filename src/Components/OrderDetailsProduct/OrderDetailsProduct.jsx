function OrderDetailsProduct ({name, price, productImg, quantity}) {
    const availQuantity = [1, 2,3, 4, 5, 6, 7, 8, 9]
    return (
        <>
             <div className="order-details-product d-flex flex-row">

                            <div className="order-details-product-img d-flex">
                                <img src={productImg} alt="" />
                            </div>

                            <div className="order-details-product-data d-flex flex-column">
                                <div>{name}</div>
                                <div>&#8377; {price}</div>
                            </div>
                            <div className="order-details-product-actions d-flex flex-column">
                                <div className="order-details-product-quantity">
                                    <div className="fw-bold">Quantity</div>
                                    <div className="form-group">
                                        <select type="text" className="form-select">
                                            {availQuantity.map((id) => <option selected={quantity == id} key={id} value={id}>{id}</option>)}
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
                        <hr/>
        </>
    )
}

export default OrderDetailsProduct;