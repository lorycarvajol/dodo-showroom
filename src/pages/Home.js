import React from "react";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import ButtonsBottom from "../components/ButtonsBottom";
import DynamicText from "../components/DynamicText";
import Mouse from "../components/Mouse";
import { motion } from "framer-motion";
import Starlight from './video/BlueStar.mp4';
import Holist from './images/Holistiqua.png';

const Home = () => {

  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 100,
    },
    visible: { 
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -100,
    }
  };

  return (
    <main>
      <Mouse />
      <motion.div
        className="home"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
      >    
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
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            <motion.h1 drag onDragEnd   dragConstraints={{ left: -250, right: 950, top: -200, bottom: 250 }}>
              <img src={Holist} alt="Titre site"/>
            </motion.h1>
            <motion.h2 drag onDragEnd dragConstraints={{ left: -250, right: 1250, top: -200, bottom: 250 }}>
              <DynamicText />
            </motion.h2>
          </div>
        </div>
        <ButtonsBottom right={"/projet-1"} />
      </motion.div>
    </main>
  );
};

export default Home;