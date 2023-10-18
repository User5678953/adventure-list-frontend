import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// IMPORT SASS STYLES
import './styles.scss'
// SET UP ROUTER
import { BrowserRouter as Router } from 'react-router-dom'

// IMPORT AUTH KIT
// import { AuthProvider } from "react-auth-kit"
//   {/* <AuthProvider>
//         authType={"cookie"}
//         authName="_auth"
//         cookieDomain={window.location.hostname}
//         cookieSecure
//       </AuthProvider>
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </Router>
);

