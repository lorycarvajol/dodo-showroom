import React from 'react';
import Navigation from '../components/Navigation';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/Logo';
import Blog from '../components/Blog';
import Mouse from '../components/Mouse';
import Starlight from './video/BlueStar2.mp4';

export const Blog2 = () => {
   return (
     <main>
       <Mouse />
       <div className="blog">
         <div className="videoContainer">
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
         </div>
         <Navigation />
         <Logo />
         <Blog blogNumber={1} />
         <ButtonsBottom left={"/blog-1"} right={"/blog-3"} />
       </div>
     </main>
   );
 };