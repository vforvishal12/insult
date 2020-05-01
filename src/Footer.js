import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
//import Nav from 'react-bootstrap/Nav';

function Footer(){

//let currTime = new Date().toLocaleString();
	return (
<Navbar bg="success" variant="light">
  
  
  <Navbar.Collapse>
    <Navbar.Text>
      <a href="https://linkedin.com/in/vishal-kumar-8b9b2a190" target="_blank">About Us</a>
    </Navbar.Text>
  </Navbar.Collapse>

  <Navbar.Collapse>
    <Navbar.Text>
      Contact Us : <a href="https://linkedin.com/in/vishal-kumar-8b9b2a190" target="_blank">9073352001 </a>
    </Navbar.Text>
  </Navbar.Collapse>


  
    <Navbar.Text>
      © Copyright vsaw 2020. Designed and Developed by : <a href="https://linkedin.com/in/vishal-kumar-8b9b2a190" target="_blank">Vishal Saw</a>
    </Navbar.Text>
</Navbar>
		);
}

export default Footer;