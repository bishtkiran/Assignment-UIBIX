import React from 'react'
import {Button,Container,Row,Col} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import JohnDoe from '../Images/JohnDoe.png'
import {Spring} from 'react-spring/renderprops'

function Header({name}) {
    return (
      <Spring from={{opacity:0, marginTop: -500}}
      to={{opacity:1, marginTop:0}}
      >
      {
        props=>(
          <div style={props}>
          <div>
          <Container style={{width:1516,height:110,marginLeft:50,marginTop:10}}>
          <Row>
            <Col md="12">
            <span style={{fontSize:40}}>Dashboard
            <div class="float-right" >
            <Button color="success"><FontAwesomeIcon icon={faPlus} 
            color="white"/>&nbsp;Add Unit</Button>
             <img src={JohnDoe} alt="John" style={{width:100,height:100,marginLeft:30}}></img><span style={{fontSize:18}}>John Doe</span> </div></span><br/><br/>
            <span style={{margin:0}}>Welcome back, {name}
            </span>
              
            </Col>
          </Row>
         </Container>  
          
          
          </div>
          </div>
        )
      }
      
      </Spring>
        
    )
}

export default Header
