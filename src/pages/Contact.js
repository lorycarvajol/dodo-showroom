import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import ButtonsBottom from '../components/ButtonsBottom';
import ContactForm from '../components/ContactForm';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import Starlight from './video/BlueStar.mp4';

const Contact = () => {
   return (
      <main>
         <Mouse />
            
         <div className="contact">
         <video autoPlay loop
               style={{
                  position: "absolute",
                  width: "100%",  
                  height: "100%",           
                  bottom: "0px",
                  objectFit: "cover"
               }}>
               <source src={Starlight} type="video/mp4"/>
            </video>
            <Navigation />
            <Logo />
            <ContactForm />
            <div className="contact-infos">
               <div className="address">
                  <div className="content">
                     <h4>adresse</h4>
                     <p>66 impasse de la bête</p>
                     <p>73100 Aix-les-bains</p>
                  </div>
               </div>           
               <div className="phone">
                  <div className="content">
                     <h4>téléphone</h4>
                     <CopyToClipboard text="4484565952" className="hover">
                        <p style={{cursor: 'pointer'}} className="clipboard" onClick={() => {
                           alert('Téléphone copié !');
                        }}>0642854555</p>
                     </CopyToClipboard>
                  </div>
               </div>
               <div className="email">
                  <div className="content">
                     <h4>email</h4>
                     <CopyToClipboard text="dodo@lachiante.com" className="hover">
                        <p style={{cursor: 'pointer'}} className="clipboard" onClick={() => {
                           alert("email copié !");
                        }}>dodo@lachiante.com</p>
                     </CopyToClipboard>
                  </div>
               </div>
               <SocialNetwork />
               <div className="credits">
                  <p>Carvajol lory - 2021</p>
               </div>
            </div> 
            <ButtonsBottom left={'/projet-2'} right={'/'} />    
         </div>   
      </main>
   );
};

export default Contact;