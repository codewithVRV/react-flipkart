import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import ProductList from "../Pages/ProductList/ProductList";
import ProductsDetail from "../Pages/ProductsDetail/ProductsDetail";

function MainRoutes () {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/products" element={<ProductList />}/>
                <Route path="/products/:id" element={<ProductsDetail />}/>
                <Route path="*" element={<Error />}/>
            </Routes>
        </>
    )
}

export default MainRoutes;