import { Link, useNavigate, useParams } from 'react-router-dom';
import './ProductsDetail.css'
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { addProductToCart, getProduct } from '../../Apis/fakeStoreProdApis';
import CartContext from '../../Context/CartContext';
import UserContex from '../../Context/UserContext'


function ProductsDetail () {
    const {id} = useParams()
    const [singleDetail, setSingleDetail] = useState([])
    const navigator = useNavigate()
    
    const {setCart} = useContext(CartContext)
    const {user} = useContext(UserContex)

    async function downloadProduct (id) {
        const response = await axios.get(getProduct(id))
        setSingleDetail(response.data)
        
    }


    async function onAddingProduct () {
        if(!user) return;
        const response = await axios.put(addProductToCart(), {
            productId: id,
            userId: user.id
        })
        setCart({...response.data})
        navigator(`/cart/${user.id}`)
    }

    useEffect(() => {
        downloadProduct(id)
    }, [])
    return (
        <>
            <div className="container parent-product-detail-wrapper">
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
                                <div className="product-description-title fw-bold" id="product-info">Description of Product</div>
                                <div className="product-description-data" id="product-desc">{singleDetail.description}</div>
                                
                            </div>
                        </div>

                        <div className="product-actions d-flex justify-content-start">
                            {user && <div className="product-details-action btn btn-primary text-decoration-none" onClick={onAddingProduct}>Add to Cart</div>}
                        {user && <Link to={`/cart/${id}`} id="goToCartBtn" className="product-details-action btn btn-warning text-decoration-none">Go to cart</Link>}
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}

export default ProductsDetail;