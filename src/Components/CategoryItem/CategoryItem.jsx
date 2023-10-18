import './CategoryItem.css'

function CategoryItem ({itemName}) {
    return (
        <div className="category-list d-flex flex-row justify-content-between align-items-center" id="categoryList"> 
           
                    <div className="category-item"><a href="productLIst.html">{itemName}</a></div>
                     

        </div>
    )
}

export default CategoryItem;