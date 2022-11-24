import React, {Fragment} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../page/HomePage";

function AppRoute(props) {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
}

export default AppRoute;