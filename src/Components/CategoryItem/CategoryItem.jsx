import { Link } from 'react-router-dom';
import './CategoryItem.css'
import all_img from '../../Assets/all-prod.jpg'

function CategoryItem ({itemName, filter=''}) {


    const redirectLink = `/products?category=${filter}`
    
    return (
        // <div className="category-list d-flex flex-row justify-content-between align-items-center" id="categoryList"> 
           
        //             <div className="category-item">
        //                 <Link to={'/products'}>{itemName}</Link>
        //             </div>
                     

        // </div>

        <>
            <div className="col parent-img-category-wrapper">
                    <Link to={redirectLink}>
                        <div className="img-category-wrapper">
                            <img src={all_img} alt="" className="img-fluid" />
                        </div>
                    </Link>
                    <p>{itemName}</p>
                </div>
        </>
    )
}

export default CategoryItem;