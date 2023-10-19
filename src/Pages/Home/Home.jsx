import CategoryItem from '../../Components/CategoryItem/CategoryItem';
import './Home.css'
import all_img from '../../Assets/all-prod.jpg'
import electronic from '../../Assets/electronics.jpg'
import jewellery from '../../Assets/jewellery.jpg'
import mens from '../../Assets/men.avif'
import women from '../../Assets/women.avif'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getAllCategories } from '../../Apis/fakeStoreProdApis';
import { Link } from 'react-router-dom';

function Home () {

    const [allCategories, setAllCategories] = useState([])


    async function downloadAllCategories () {
        const response = await axios.get(getAllCategories())
        // console.log("response all categories", response)
        setAllCategories(response.data)
    }
    console.log(allCategories)


    useEffect(() => {
        downloadAllCategories()
    }, [])
    return (
        <>
            <div className="container">
                <div className="row d-flex">
                    <h1 className="home-title text-center mb-5">Welcome to Shop Cart</h1>
                    
                    {/* {allCategories && allCategories.map((category) => <CategoryItem itemName={category} key={category} />)} */}
                    
                </div>
            </div>
            <div className="container">
            <div className="row d-flex">
                {/* <div className="col parent-img-category-wrapper">
                        <div className="img-category-wrapper">
                            <img src={all_img} alt="" className="img-fluid" />
                        </div>
                    <p>All Products</p>
                </div> */}
                <CategoryItem itemName={"All Products"}/>
                {allCategories && allCategories.map((category) => <CategoryItem  key={category} itemName={category} filter={category}/>)}
                {/* <div className="col parent-img-category-wrapper">
                    <div className="img-category-wrapper">
                        <img src={electronic} alt="" className="img-fluid"/>
                    </div>
                    <p>Electronics</p>
                </div>
                <div className="col parent-img-category-wrapper">
                    <div className="img-category-wrapper">
                        <img src={jewellery} alt="" className="img-fluid"/>
                    </div>
                    <p>Jewellery</p>
                </div>
                <div className="col parent-img-category-wrapper">
                    <div className="img-category-wrapper">
                        <img src={mens} alt="" className="img-fluid"/>
                    </div>
                    <p>Mens </p>
                </div>
                <div className="col parent-img-category-wrapper">
                    <div className="img-category-wrapper">
                        <img src={women} alt="" className="img-fluid"/>
                    </div>
                    <p>Womens</p>
                </div> */}
            </div>
        </div>
        </>
    )
}
export default Home;