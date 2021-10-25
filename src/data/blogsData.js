import React from 'react';
import { ElfsightWidget } from 'react-elfsight-widget';

export const blogsData = [
   {
     id: 1,
     title: "Doryanne",
     subtitle: "thérapeute holistique,praticienne et enseignante énergétique ",
     
      //affichage ElfsightWidget dans contenu
      content: <ElfsightWidget
      widgetID="b3071723-19df-43b6-a8a7-1213fa033ef1"
      />,



     link: "https://www.instagram.com/__doryanne/?hl=fr",
   },
   {
     id: 2,
     title: "La Guidance",
    subtitle: "Site de RDV",
     
     infos:
       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",
     img: "",
     link: "https://www.instagram.com/laguidance/",
   },
   {
     id: 3,
     title: "Blog",
     subtitle: "Mes humeurs du moment",
     
     infos:
       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",
     img: "",
     link: "",
   },
   
 ];
 