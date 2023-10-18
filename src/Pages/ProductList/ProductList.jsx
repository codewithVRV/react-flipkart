import './ProductList.css'
import productDemoImage from '../../Assets/product.jpg'
import ProductBox from '../../Components/ProductBox/ProductBox';

function ProductList () {
    return (
        <>
            <div className="container">
            <div className="row">

                <h2 className="product-list-title text-center">All Products</h2>

                <div className="product-list-wrapper d-flex flex-row"> 

                 {/* <div className="product-list-sidebar d-flex flex-column"> 

                    <div className="sidebar-title">Search Product</div>

                    <div className="sidebar-search form-group">
                        <input type="text" placeholder="Search by name" className="form-control" id="searching" />
                    </div>

                    <div className="sidebar-title fw-bold">Categories</div>
                    <div id="categoryList">

                        <a href="productList.html" className="d-flex text-decoration-none">All Products</a>
                       
                    </div>

                    <div className="sidebar-title">Filter by Price</div>
                    <div className="price-filter">
                        <div className="price-filter-select d-flex  flex-row justify-content-between"> 
                            <div className="form-group">
                                <select name="" id="minPrice" className="form-select">
                                    <option value="0">0</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <select name="" id="maxPrice" className="form-select">
                                    <option value="0">0</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                    <option value="500">500</option>
                                </select>
                            </div>
                        </div>
                        <div className="price-filter-title d-flex justify-content-start">
                            <div id="price-filter-label-min">Min Price</div>
                            <div id="price-filter-label-max">Max Price</div>
                        </div>
                    </div>
                    <button className="btn btn-warning clear-filter" id="search">Search</button>
                    <button className="btn btn-danger clear-filter" id="clear">Clear Filters</button>

                </div>  */}


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