import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';


import testPhoto1 from './img/avatar_fem.jpg'
import testPhoto2 from './img/project_fone.jpg'
import icon_next from './img/play_media_icon.svg'


export default function UserForm (){
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
        <div class="account-content">
          <div class="link-container">  
            <img class="avatar"src={testPhoto1}/>
            <tbody>
            <tr>
              <td class="foricon"><img class="icon"src={icon_next}/></td>
              <td><button class="btn-send" onClick={handleMenuClick}>Github</button></td>
            </tr>
            <tr>
              <td><img class="icon"src={icon_next}/></td>
              <td><button class="btn-send" onClick={handleMenuClick}>Twitter</button></td>
            </tr>
            <tr>
              <td><img class="icon"src={icon_next}/></td>
              <td> <button class="btn-send" onClick={handleMenuClick}>Vk</button></td>
            </tr>
            <tr>
              <td><img class="icon"src={icon_next}/></td>
              <td><button class="btn-send" onClick={handleMenuClick}>Personal Website</button></td>
            </tr>
            <tr>
              <td></td>
              <td><Link to="/message" class="btn-send">Send Message</Link></td>
            </tr>
            <tr>
              <td></td>
              <td><Link  to = "/edit_profile" class="btn-send" >Edit Profile</Link></td>
            </tr>
            <tr>
              <td></td>
              <td><Link  to = "/admin_panel" class="btn-send" >Dashboard</Link></td>
            </tr>
            </tbody>
          </div> 
          <div class="link-container">  
        <Row><h3>About Me</h3></Row>
        <Row><h4>Based in location</h4></Row> 
        <Row><h4>profile.short_intro</h4></Row>
        <Row><h3>Skills</h3></Row>
        <Col><Row><h4>skill.name</h4></Row></Col>
        <Col><Row><h4>skill.description</h4></Row></Col>
        <Row><h3>Other Skills</h3></Row>
        <Col><Row><h4>skill.name</h4></Row></Col>

        <Row><h3>Projects</h3></Row>
        <div class="card_container">
        <div class="article-card">
        <div class="content">
      <p class="date">Tags</p>
      <Link  to = "/single_project" class="title">Card Title</Link>
    </div>
    <img src={testPhoto2} alt="article-cover" />
        </div>

        <div class="article-card">
        <div class="content">
        <p class="date">Tags</p>
      <Link  to = "/single_project" class="title">Card Title</Link>
    </div>
    <img src={testPhoto2} alt="article-cover" />
        </div>

        <div class="article-card">
        <div class="content">
        <p class="date">Tags</p>
      <Link  to = "/single_project" class="title">Card Title</Link>
    </div>
    <img src={testPhoto2} alt="article-cover" />
        </div>

        <div class="article-card">
        <div class="content">
        <p class="date">Tags</p>
      <Link  to = "/single_project" class="title">Card Title</Link>
    </div>
    <img src={testPhoto2} alt="article-cover" />
        </div>

        <div class="article-card">
        <div class="content">
        <p class="date">Tags</p>
      <Link  to = "/single_project" class="title">Card Title</Link>
    </div>
    <img src={testPhoto2} alt="article-cover" />
        </div>

        <div class="article-card">
        <div class="content">
        <p class="date">Tags</p>
      <Link  to = "/single_project" class="title">Card Title</Link>
    </div>
    <img src={testPhoto2} alt="article-cover" />
        </div>
        </div>
        </div>
        </div> 
        </div>
    )}