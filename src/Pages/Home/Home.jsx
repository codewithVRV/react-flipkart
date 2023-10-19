import CategoryItem from '../../Components/CategoryItem/CategoryItem';
import './Home.css'
import useCategory from '../../Hooks/useCategory';

function Home () {


    const [allCategories] = useCategory()

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