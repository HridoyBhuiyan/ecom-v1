import React, {Fragment} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../page/HomePage";
import UserOnboardPage from "../page/UserOnboardPage";
import ContactPage from "../page/othersPage/ContactPage";
import PolicyPage from "../page/othersPage/PolicyPage";
import PurchasePage from "../page/othersPage/PurchasePage";
import RefundPage from "../page/othersPage/RefundPage";
import ProductDetailsPage from "../page/ProductDetailsPage";
import NotificationPage from "../page/NotificationPage";
import FavouritePage from "../page/FavouritePage";
import CartPage from "../page/CartPage";
import OrderPage from "../page/OrderPage";

function AppRoute(props) {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/login'} element={<UserOnboardPage/>}/>
                    <Route path={'/contact'} element={<ContactPage/>}/>
                    <Route path={'/policy'} element={<PolicyPage/>}/>
                    <Route path={'/purchase'} element={<PurchasePage/>}/>
                    <Route path={'/refund'} element={<RefundPage/>}/>
                    <Route path={'/productdetails'} element={<ProductDetailsPage/>}/>
                    <Route path={'/notification'} element={<NotificationPage/>}/>
                    <Route path={'/favourite'} element={<FavouritePage/>}/>
                    <Route path={'/cart'} element={<CartPage/>}/>
                    <Route path={'/order'} element={<OrderPage/>}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
}

export default AppRoute;