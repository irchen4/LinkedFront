import React from "react";
import Typewriter from "typewriter-effect";

import {Link} from 'react-router-dom';

import testPhoto2 from './img/project_fone.jpg'


export const Projects = ()=>{
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);


  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleMenuClick = (event) => {
      setAnchorE2(event.currentTarget);
  }
  const handleClose = () => {
      setAnchorEl(null);
      setAnchorE2(null);
  };
    return(
      <div class='container_content'>
        <div class="main-container">
      <h1 class="typewriter">
      <Typewriter
  
  onInit={(typewriter)=> {

  typewriter
   
  .typeString("Показывай себя и свои проекты.")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("Находи вдохновение, коллег и новые знания.")
  .start();
  }}  />
      </h1>

        <form action="{% url 'projects' %}" method="get">
        <input class="input-search" placeholder="Search by Project Title..." type="text" name="search_query"/>
        <input class="btn-search" type="submit" value="Search" />
    </form>

        </div>
        <div class="prcontainer">

        <div class="article-card">
    <div class="content">
      <p class="date">By owner</p>
      <Link  to = "/single_project" class="title">Card Title</Link>
    </div>
    <img src={testPhoto2} alt="article-cover" />
  </div>
  <div class="article-card">
    <div class="content">
      <p class="date">By owner</p>
      <Link  to = "/single_project" class="title" >Card Title</Link>
    </div>
    <img src={testPhoto2} alt="article-cover" />
  </div>
  <div class="article-card">
    <div class="content">
      <p class="date">By owner</p>
      <Link  to = "/single_project" class="title">Card Title</Link>
    </div>
    <img src={testPhoto2} alt="article-cover" />
  </div>

       {/*<div class="project-card">
        <img class="img-card" src={testPhoto2} />
        <div>Card Title</div>
        <div class="description">
        <div>By owner</div>
          {/*Some quick example text to build on the card title and make up the
              bulk of the card's content.
              <div>% Positive Feedback (Vote)</div>
        <div>tags</div> 
        
          </div>
          <Link  to = "/single_project" class="btn-send">Go somewhere</Link>
        </div>*/}

    </div>
</div>
    )
}