import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';


import testPhoto2 from './img/project_fone.jpg';


export default function SingleProject (){
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
          <div class="project_form">
              <div class="pr-container">
              <h3>Tools & stacks</h3>
                <h4>tags</h4>
                <a>demo_link </a>
                <a> source_link</a>
                
              </div>
          <div class="pr-container">
          <img class="spr_img" src={testPhoto2} />
          <h4>By owner</h4>
              <h3>Project title</h3>
              
              <h4>description</h4>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue="email@example.com" />
              </Col>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            </div>
          </div>
        </div>
    )
  }