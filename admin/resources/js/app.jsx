import './bootstrap';
import '../css/app.css'
import React from 'react';
import ReactDOM from 'react-dom/client';

if (document.getElementById('app')) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));
    Index.render(
        <React.StrictMode>
            hello
        </React.StrictMode>
    )
}
