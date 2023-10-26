import { Link } from 'react-router-dom';
import './CategoryItem.css'
import all_img from '../../Assets/all-prod.jpg'

function CategoryItem ({itemName, filter=''}) {


    const redirectLink = `/products?category=${filter}`
    
    return (
       

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