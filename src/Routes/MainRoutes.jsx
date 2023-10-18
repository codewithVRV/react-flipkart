import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import ProductList from "../Pages/ProductList/ProductList";
import ProductsDetail from "../Pages/ProductsDetail/ProductsDetail";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";

function MainRoutes () {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/products" element={<ProductList />}/>
                <Route path="/products/:id" element={<ProductsDetail />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="*" element={<Error />}/>
            </Routes>
        </>
    )
}

export default MainRoutes;