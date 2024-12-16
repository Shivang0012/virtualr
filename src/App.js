import './App.css';
import FeatureSection from './components/FeatureSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import PricingSection from './components/PricingSection';
import Testimonials from './components/Testimonials';
import Workflow from './components/Workflow';
import Footer from './components/Footer';
import Login from './components/Login';
import { useState } from 'react';
import Createaccount from './components/Createaccount';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isCOpen , setIsCOpen] = useState(false);
  

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);

  }

  const openCModal = () => {
    setIsCOpen(true);
  }
  const closeCModal = () => {
    setIsCOpen(false);
  }




  return (
    <>
    <Navbar openModal={ openModal } openCModal = { openCModal }  />
    <div className='max-w-7xl mx-auto pt-20 px-6 '>
      <HeroSection/>
      <FeatureSection/>
      <Workflow/>
      <PricingSection/>
      <Testimonials/>
      <Footer/>
    </div>

    <Login isOpen={ isModalOpen } onClose={ closeModal } />

    <Createaccount COpen ={ isCOpen } closeCModal={ closeCModal } />
    </>
  );
}

export default App;
