import './ProductList.css'
import productDemoImage from '../../Assets/product.jpg'
import ProductBox from '../../Components/ProductBox/ProductBox';
import FilterProducts from '../../Components/FilterProducts/FilterProducts';

function ProductList () {
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
                    
                     {/* <!-- Everything below just copy paste --> */}
                    

                </div>

            </div>

            </div>
        </div>
        </>
    )
}

export default ProductList;