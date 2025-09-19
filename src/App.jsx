import './App.css'
import React, { Suspense } from 'react';
import Home from './screens/Home'


const Products = React.lazy(() => import('./screens/Products'));
const Services = React.lazy(() => import('./screens/Services'));
const Success = React.lazy(() => import('./screens/Success'));
const AboutUs = React.lazy(() => import('./screens/AboutUs'));
const Footer = React.lazy(() => import('./screens/Footer'));

function App() {

  return (
    <>
      <Home/>
      <Suspense fallback={<div>Cargando...</div>}>
      <Products />
      <Services />      
      <Success />
      <AboutUs />
      <Footer/>
      </Suspense>
    </>
  )
}

export default App
