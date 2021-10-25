import React from 'react';
import Navigation from '../components/Navigation';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/Logo';
import Blog from '../components/Blog';
import Mouse from '../components/Mouse';
import Starlight from './video/BlueStar2.mp4';

export const Blog1 = () => {
  return (
    <main>
      <Mouse />
      <div className="blog">
      <video autoPlay loop
            style={{
              position: "fixed",
              width: "100%",  
              height: "100%",           
              bottom: "0px",
              objectFit: "cover",
            }}>
          <source src={Starlight} type="video/mp4"/>
        </video>      
        <Navigation />
        <Logo />
        <Blog blogNumber={0} />
        <ButtonsBottom left={'/projet-3'} right={'/blog-2'} />
      </div>
    </main>
  );
};