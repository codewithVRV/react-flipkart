function ProductBox ({productDemoImage, name, price}) {
    return (
        <>
            <a href="productDetails.html" target="_blank" className="product-item text-decoration-none d-inline-block">
                        <div className="product-img">
                            <img src={productDemoImage} alt="" />
                        </div>
                        <div className="product-name text-center">{name}</div>
                        <div className="product-price text-center">&#8377; {price}</div>
            </a>
        </>
    )
}

export default ProductBox