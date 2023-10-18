import { Link } from 'react-router-dom';
import './CategoryItem.css'

function CategoryItem ({itemName}) {
    return (
        <div className="category-list d-flex flex-row justify-content-between align-items-center" id="categoryList"> 
           
                    <div className="category-item">
                        <Link to={'/products'}>{itemName}</Link>
                    </div>
                     

        </div>
    )
}

export default CategoryItem;