import React from 'react';
import Navigation from '../components/Navigation';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/Logo';
import Project from '../components/Project';
import Mouse from '../components/Mouse';
import Starlight from './video/BlueStar.mp4';



export const Project1 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
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
        <Project projectNumber={0} />
        <ButtonsBottom left={'/'} right={'/projet-2'} />
      </div>
    </main>
  );
};

export const Project2 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
      <video autoPlay loop
            style={{
               position: "absolute",
               width: "100%",             
               bottom: "0px",
               objectFit: "cover"
            }}>
          <source src={Starlight} type="video/mp4"/>
        </video>

        <Navigation />
        <Logo />
        <Project projectNumber={1} />
        <ButtonsBottom left={"/projet-1"} right={"/projet-3"} />
      </div>
    </main>
  );
};

export const Project3 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
      <video autoPlay loop
            style={{
               position: "absolute",
               width: "100%",             
               bottom: "0px",
               objectFit: "cover",
               
            }}>
          <source src={Starlight} type="video/mp4"/>
        </video>

        <Navigation />
        <Logo />
        <Project projectNumber={2} />
        <ButtonsBottom left={"/projet-2"} right={"/blog-1"} />
      </div>
    </main>
  );
};