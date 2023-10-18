import CategoryItem from '../../Components/CategoryItem/CategoryItem';
import './Home.css'

function Home () {
    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 className="home-title text-center mb-5">Welcome to Shop Cart</h1>
                    <CategoryItem itemName={"All Product"}/>
                    
                </div>
            </div>
            <div className="container">
            <div className="row d-flex">
                <div className="col parent-img-category-wrapper">
                    <div className="img-category-wrapper">
                        <img src="./img/all-prod.jpg" alt="" className="img-fluid" />
                    </div>
                    <p>All Products</p>
                </div>
                <div className="col parent-img-category-wrapper">
                    <div className="img-category-wrapper">
                        <img src="./img/electronics.jpg" alt="" className="img-fluid"/>
                    </div>
                    <p>Electronics</p>
                </div>
                <div className="col parent-img-category-wrapper">
                    <div className="img-category-wrapper">
                        <img src="./img/jewellery.jpg" alt="" className="img-fluid"/>
                    </div>
                    <p>Jewellery</p>
                </div>
                <div className="col parent-img-category-wrapper">
                    <div className="img-category-wrapper">
                        <img src="./img/men.avif" alt="" className="img-fluid"/>
                    </div>
                    <p>Mens </p>
                </div>
                <div className="col parent-img-category-wrapper">
                    <div className="img-category-wrapper">
                        <img src="./img/women.avif" alt="" className="img-fluid"/>
                    </div>
                    <p>Womens</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Home;