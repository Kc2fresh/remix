import React from "react";
import { Route, Routes, BrowserRouter} from "react-router-dom";

//import Login from "./components/Login";
import Home from "./components/Home";
//import Answer from "./components/Answer";
//import NoMatch from "./components/Home";
//import PasswordUpdate from "./components/PasswordUpdate";


// A wrapper for <Route> that redirects to the login screen if you're not yet authenticated.




function Urls(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/home/*" element={<Home {...props} />} />
            <Route path= "*" element={<Home {...props} />}/>
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Urls;



//<Route path="/answer/*" element={<Answer {...props} />} />