// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import {Auth0Provider} from "@auth0/auth0-react";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Auth0Provider
//       domain="dev-cn1j7if0vai05r8j.us.auth0.com"
//       clientId="LJzcrJDZqI3xaHAfPvsyh9uLbvhQ58Rj"
//       authorisationParams={{
//         redirect_uri: "http://localhost:5173/"
//       }}
//       audience="http://localhost:8000/"
//       scope="openid profile email"
//     >
     
//       <App />
//     </Auth0Provider>
     
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; 
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-cn1j7if0vai05r8j.us.auth0.com" 
     clientId="LJzcrJDZqI3xaHAfPvsyh9uLbvhQ58Rj" 
     authorizationParams={{
      redirect_uri: "http://localhost:5173/"
     }}
     audience="https://dev-cn1j7if0vai05r8j.us.auth0.com/api/v2/"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);