import { useNavigate } from "react-router-dom"
import useCategory from "../../Hooks/useCategory"

function FilterProducts () {

    const minPriceOption = [0, 10, 20, 30, 50, 100]
    const maxPriceOption = [0, 10, 20, 30, 50, 100, 500]

    const [allCategories] = useCategory()
    const navigator = useNavigate()

    function handleCategoryNavigate(category) {
        navigator(`/products?category=${category}`)
    }

    return (
        <>
            <div className="product-list-sidebar d-flex flex-column"> 

            <div className="sidebar-title">Search Product</div>

            <div className="sidebar-search form-group">
                <input type="text" placeholder="Search by name" className="form-control" id="searching" />
            </div>

            <div className="sidebar-title fw-bold">Categories</div>
            <div id="categoryList">

                {/* <a href="productList.html" className="d-flex text-decoration-none" onClick={() => handleCategoryNavigate("")}>All Products</a> */}
                {allCategories && allCategories.map((category) => <a onClick={() => handleCategoryNavigate(category)} key={category} className="d-flex text-decoration-none">{category}</a>)}

            </div>

            <div className="sidebar-title">Filter by Price</div>
            <div className="price-filter">
                <div className="price-filter-select d-flex  flex-row justify-content-between"> 
                    <div className="form-group">
                        <select name="" id="minPrice" className="form-select">
                            {minPriceOption.map((optionValue) => <option key={optionValue} value={optionValue}>{optionValue}</option>)}
                        </select>
                    </div>

                    <div className="form-group">
                        <select name="" id="maxPrice" className="form-select">
                        {maxPriceOption.map((optionValue) => <option key={optionValue} value={optionValue}>{optionValue}</option>)}
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

            </div> 
        </>
    )
}

export default FilterProducts;