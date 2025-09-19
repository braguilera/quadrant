import React from 'react';
import Home from './screens/Home';
import './App.css'

const Products = React.lazy(() => import('./screens/Products'));
const Services = React.lazy(() => import('./screens/Services'));
const Success = React.lazy(() => import('./screens/Success'));
const AboutUs = React.lazy(() => import('./screens/AboutUs'));
const Footer = React.lazy(() => import('./screens/Footer'));


function App() {
  return (
    <>
      <Home />
      <Products />
      <Services />
      <Success />
      <AboutUs />
      <Footer />
    </>
  )
}

export default App;