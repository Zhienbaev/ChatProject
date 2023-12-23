import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import App from './App';
import GoChat from './components/goChat';
import "./index.css"
import MyProfill from './components/myProfil';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <div>
        <Routes>
            <Route exact path="/" element={<GoChat />}>

            </Route>
          <Route exact path="/MyChat" element={<App/>}>
          </Route>
          <Route exact path="/MyProfill" element={<MyProfill/>}>
          </Route>
        </Routes>
      </div>
    </Router>
);
