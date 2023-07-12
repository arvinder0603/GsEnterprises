import React from 'react'

import { MainPage } from "./MainPage";
import { ProductsPage } from "./ProductsPage";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

const RoutesPath = () => {
  return (
    <div>

<Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/products" element={<ProductsPage/>}></Route>
      </Routes>
     



    </div>
  )
}

export default RoutesPath