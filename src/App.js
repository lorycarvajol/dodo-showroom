import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useLocation, useHistory } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import  { Project1, Project2, Project3 } from './pages/Projects';
import  { Blog1, Blog2, Blog3 } from './pages/Blogs';
import { AnimatePresence } from 'framer-motion';


const App = () => {
  const location = useLocation();
  let history = useHistory();

  useEffect(() => {
    const handleScrollToElement = (e) => {
      console.log(e.wheelDeltaY);
      const url = window.location.origin + "/";

      const wheelRouter = (after, before) => {
        if (e.wheelDeltaY < 0) {
          setTimeout(() => {
            history.push(after);
          }, 500);
        } else if (e.wheelDeltaY > 0) {
          setTimeout(() => {
            history.push(before);
          }, 500);
        }
      };

      switch (window.location.href.toString()) {
        case url:
          if (e.wheelDeltaY < 0) {
            setTimeout(() => {
              history.push("projet-1");
            }, 500);
          }
          break;
        case url + "projet-1":
          wheelRouter("projet-2", "");
          break;
        case url + "projet-2":
          wheelRouter("projet-3", "projet-1");
          break;
        case url + "projet-3":
          wheelRouter("blog-1", "projet-2");
          break;
          case url + "blog-1":
            wheelRouter("blog-2", "projet-3");
            break;
            case url + "blog-2":
          wheelRouter("blog-3", "projet-1");
          break;
          
        
        case url + "contact":
          if (e.wheelDeltaY > 0) {
            setTimeout(() => {
              history.push("projet-2");
            }, 500);
          }
          break;
        default:
          console.log("nothing");
      }
    };
    window.addEventListener("wheel", handleScrollToElement);
  }, [history]);

  return (
   
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route exact path="/projet-1" component={Project1} />
        <Route exact path="/projet-2" component={Project2} />
        <Route exact path="/projet-3" component={Project3} />
        <Route exact path="/blog-1" component={Blog1} />
        <Route exact path="/blog-2" component={Blog2} />
        <Route exact path="/blog-3" component={Blog3} />
        
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </AnimatePresence>
  );
};

export default App;