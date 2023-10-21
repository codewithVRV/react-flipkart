import CategoryItem from '../../Components/CategoryItem/CategoryItem';
import './Home.css'
import useCategory from '../../Hooks/useCategory';
import useCart from '../../Hooks/useCart';
import { useContext, useEffect } from 'react';
import UserContext from '../../Context/UserContext';

function Home () {


    const [allCategories] = useCategory()
    const {user} = useContext(UserContext)
    const [cart, setCart] = useCart(user ? user.id : undefined)


    useEffect(() => {

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
        </>
    )
}
export default Home;