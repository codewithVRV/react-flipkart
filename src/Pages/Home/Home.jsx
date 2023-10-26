import CategoryItem from '../../Components/CategoryItem/CategoryItem';
import './Home.css'
import useCategory from '../../Hooks/useCategory';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../Context/UserContext';
import ProductBox from '../../Components/ProductBox/ProductBox';
import axios from 'axios';
import { getAllProducts } from '../../Apis/fakeStoreProdApis';
import useCart from '../../Hooks/useCart'

function Home () {


    const [allCategories] = useCategory()
    // const {allProducts, setAllProducts} = useContext(AllProductContext)
    const [allProducts, setAllProducts] = useState()
    const {user} = useContext(UserContext)


    const [cart] = useCart(user ? user.id : undefined)
    // const [cart] = useCart()

    async function allProductsDownload () {
        const response = await axios.get(getAllProducts())
        setAllProducts(response.data)
    }
    

    useEffect(() => {
        allProductsDownload()

    }, [user])
    return (

        <>
            <div className="container">
                <div className="row d-flex">
                    <h1 className="home-title text-center mb-5">Welcome to Shop Cart</h1>
                    
                    
                </div>
            </div>
            <div className="container">
                <div className="row d-flex">
                    
                    <CategoryItem itemName={"All Products"}/>
                    {allCategories && allCategories.map((category) => <CategoryItem  key={category} itemName={category} filter={category}/>)}
                    
                </div>
            </div>  
            <div className="container product-list-box">
                <div className="row">
                {allProducts && allProducts.map((product) =>  <ProductBox key={product.id} id={product.id} productDemoImage={product.image} name={product.title.substr(0, 20) + ".."} price={product.price}/> )}

                </div>
            </div>
        </>
    )
}
export default Home;