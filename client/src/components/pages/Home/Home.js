import '../../App.css';
import HeroSection from '../HeroSection/HeroSection';
import Cards from '../commons/Cards/Cards';
import React, { useState } from 'react';
import Auth from '../../../hoc/auth';


function Home() {
    
    return (          
        <>
            <HeroSection />
            <Cards />
          
        </>
    );
}

export default Auth(Home, null);