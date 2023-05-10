import React from 'react';
import Typewriter from "typewriter-effect";
import {Link} from 'react-router-dom';

import testPhoto2 from './img/avatar_fem.jpg'

export default function ProfileCard() {
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
          <div class="form-search">
            <form action="{% url 'projects' %}" method="get">
            <input class="input-search" placeholder="Search by DevOps name..." type="text" name="search_query"/>
            <input class="btn-search" type="submit" value="Search" />
        </form>
        </div>
            </div>


            <div class="prcontainer">

            <div class="card-container">
	<img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
	<h3>Users Name</h3>
	<h6>location</h6>
	<p>short_intro</p>
	<div class="buttons">
		<Link to="/message" class="primary">Message</Link>
		<button class="primary ghost">Following</button>
	</div>
	<div class="skills">
		<h6>Skills</h6>
		<ul>
			<li>UI / UX</li>
			<li>Front End Development</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li>
		</ul>
	</div>
</div>
<div class="card-container">
	<img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
	<h3>Users Name</h3>
	<h6>location</h6>
	<p>short_intro</p>
	<div class="buttons">
		<button class="primary">Message</button>
		<button class="primary ghost">Following</button>
	</div>
	<div class="skills">
		<h6>Skills</h6>
		<ul>
			<li>UI / UX</li>
			<li>Front End Development</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li>
		</ul>
	</div>
</div>
<div class="card-container">
	<img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
	<h3>Users Name</h3>
	<h6>location</h6>
	<p>short_intro</p>
	<div class="buttons">
		<button class="primary">Message</button>
		<button class="primary ghost">Following</button>
	</div>
	<div class="skills">
		<h6>Skills</h6>
		<ul>
			<li>UI / UX</li>
			<li>Front End Development</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li>
		</ul>
	</div>
</div>

            {/*<div class="project-card">
            <img class="img-card" src={testPhoto2} />
            <h4>Username</h4>
            <div class="description">
             {/*  Some quick example text to build on the card title and make up the
              bulk of the card's content.
              <h4 class="description">% Positive Feedback (Vote) </h4>
              <div>social links </div>
            </div>
            <button class="btn-send" onClick={handleMenuClick}>Go somewhere</button>
            </div>*/}
        </div>
        
    </div>
    )  
}