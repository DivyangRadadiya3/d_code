import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';

export default function Router() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home name='Home' />} />
        <Route path='/cart' element={<Cart name='Cart' />} />
        <Route path='*' element={<Home name='Home' />} />
      </Routes>
    </>
  );
}