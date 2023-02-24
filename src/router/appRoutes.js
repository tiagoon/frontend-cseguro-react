import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "../views/home";
import UsersEdit from "../views/usersEdit";

function AppRoutes() {
   return(
      <Router>
         <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/users/:id/edit' element={< UsersEdit />}></Route>
         </Routes>
      </Router>
   );
}

export default AppRoutes;