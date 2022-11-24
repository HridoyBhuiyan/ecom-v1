import React, {Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import './assets/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets/css/style.css';
import './assets/css/responsive.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <App />
  </Fragment>
);


serviceWorkerRegistration.register();

reportWebVitals();
