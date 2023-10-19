import './ProductList.css'
import productDemoImage from '../../Assets/product.jpg'
import ProductBox from '../../Components/ProductBox/ProductBox';
import FilterProducts from '../../Components/FilterProducts/FilterProducts';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getAllProducts, getAllProductsByCategory } from '../../Apis/fakeStoreProdApis';
import { useSearchParams } from 'react-router-dom';

function ProductList () {

    const [allProducts, setAllProducts] = useState([])
    const [query] = useSearchParams()

    async function downloadAllProducts (category) {
        const downloadUrl = category ? getAllProductsByCategory(category) : getAllProducts()
        const response = await axios.get(downloadUrl)
        console.log("all products", response.data)
        setAllProducts(response.data)
    }


    useEffect(() => {
        downloadAllProducts(query.get('category'))
        console.log(query.get('category'))
    }, [])
    return (
        <>
            <div className="container">
            <div className="row">

                <h2 className="product-list-title text-center">All Products</h2>

                <div className="product-list-wrapper d-flex flex-row"> 

                    {/* filterProducts */}
                 <FilterProducts />


                <div className="product-list-box" id="productList">


                   {/* productBox here */}
                    
                    <ProductBox productDemoImage={productDemoImage} name={"Dummy"} price={"100$"}/>
                    {allProducts && allProducts.map((product) =>  <ProductBox key={product.id} productDemoImage={product.image} name={product.title.substr(0, 20) + ".."} price={product.price}/> )}

                     {/* <!-- Everything below just copy paste --> */}
                    

                </div>

            </div>

            </div>
        </div>
        </>
    )
}

export default ProductList;