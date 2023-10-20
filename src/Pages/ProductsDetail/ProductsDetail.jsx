import { useParams } from 'react-router-dom';
import './ProductsDetail.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getProduct } from '../../Apis/fakeStoreProdApis';


function ProductsDetail () {

    const [singleDetail, setSingleDetail] = useState([])
    const {id} = useParams()
    async function getDetailsOfSingleProduct () {
        const response = await axios.get(getProduct(id))
        setSingleDetail(response.data)
    }


    useEffect(() => {
        getDetailsOfSingleProduct()
    }, [])
    return (
        <>
            <div className="container">
            <div className="row">
                <div className="product-details-wrapper d-flex flex-row justify-content-between align-items-start">

                    <div className="product-img d-flex" id="product-img-header">
                        <img src={singleDetail.image} alt="product-image" id="product-img" />
                    </div>

                    <div className="product-details-box d-flex flex-column">
                        <div id="productDetails">

                            <div className="product-name" id="product-name">{singleDetail.title}</div>
                            <div className="product-price fw-bold" id="product-price">{singleDetail.price}</div>
                            <div className="product-description">
                                <div className="product-description-title fw-bold" id="product-info">Descript of Product</div>
                                <div className="product-description-data" id="product-desc">{singleDetail.description}</div>
                                
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