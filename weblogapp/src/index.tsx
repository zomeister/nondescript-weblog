import React, { StrictMode } from 'react';
import ReactDOM, { createRoot, Root } from 'react-dom/client';
import './index.css';
import App from './App';
// // Re-using the same import
// import { APIResponseType } from "./api";
// // Explicitly use import type
// import type { APIResponseType } from "./api";
// // Explicitly pull out a value (getResponse) and a type (APIResponseType) 
// import { getResponse, type APIResponseType} from "./api";
// // import reportWebVitals from './reportWebVitals';
// // import 'bootstrap/dist/css/bootstrap.css';


const root: Root = createRoot( document.getElementById('root') as HTMLElement );
root.render (
  <StrictMode>
    <App />
  </StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
