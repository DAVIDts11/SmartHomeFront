import React ,{ useEffect, useState } from "react";

import MainControl from "./MainControl";
import LightsControl from "./LightsControl";
import Irrigation from "./Irrigation";
import { Routes , Route } from 'react-router-dom';

export default function Main() {

    return (
        <Routes > {/* The Switch decides which component to show based on the current URL.*/}
          <Route exact path='/'  element={<MainControl/>}></Route>
          <Route exact path="/lights_control"  element={<LightsControl/>}></Route>
          <Route exact path="/irrigation"  element={<Irrigation/>}></Route>
       
          
        </Routes>
      );
}

// <Route exact path='/signup' component={Signup}></Route>
