import './bootstrap';
import '../css/app.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "@/App";

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));
    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}
