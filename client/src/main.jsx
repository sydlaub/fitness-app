// import ReactDOM from 'react-dom/client'
// import React from "react"
// // import { Auth0Provider } from "@auth0/auth0-react";
// import App from "./App";

// import { createRoot } from 'react-dom/client';
// import { Auth0Provider } from '@auth0/auth0-react';

// import { BrowserRouter } from 'react-router-dom';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//     ,
//   </React.StrictMode>,

// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));
console.log("test", window.location.origin);

root.render(
  <Auth0Provider
    domain="dev-xsszomjebt84unzm.us.auth0.com"
    clientId="59xRE3eGSQ0KAjFgWgutIwgH1tKEqTXm"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);