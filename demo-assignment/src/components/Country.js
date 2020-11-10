import React from 'react'
import {Container,Row,Col} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Card,CardBody} from 'reactstrap';
import {faSortUp,faSortDown} from '@fortawesome/free-solid-svg-icons'

function Country() {
    return (
        <Card style={{marginTop:40,marginRight:470,marginLeft:50}}>
          <CardBody >
          <Container style={{width:1500,height:160,marginTop:60,marginLeft:20}}>
          <Row >
          <Col style={{width:86.75,height:83.25}}>
          <p style={{fontSize:20}}>Italy</p><h1>475<span align="center" ><FontAwesomeIcon icon={faSortUp} 
          color="green" width="17" height="9" style={{marginLeft:20,marginTop:10}} /></span></h1>
          </Col>
          <Col style={{width:111,height:85.42,marginLeft:15}}>
          <p style={{fontSize:20}}>United States</p><h1>431<span align="center"><FontAwesomeIcon icon={faSortUp} 
          color="green" width="17" height="9" margin-top="10" style={{marginLeft:20,marginTop:10}}/></span></h1>
          </Col>
          <Col style={{width:89,height:85.42,marginLeft:15}}>
          <p style={{fontSize:20}}>Canada</p><h1>174<span align="center"><FontAwesomeIcon icon={faSortDown} 
          color="red" width="17" height="9" margin-top="10" style={{marginLeft:20,marginTop:10}}/></span></h1>
          </Col>
          <Col style={{width:86.75,height:83.25,marginLeft:15}}>
          <p style={{fontSize:20}}>Spain</p><h1>475<span align="center"><FontAwesomeIcon icon={faSortUp} 
          color="green" width="17" height="9" margin-top="10" style={{marginLeft:20,marginTop:10}}/></span></h1>
          </Col>
          <Col style={{width:89,height:85.42,marginLeft:15}}>
          <p style={{fontSize:20}}>Japan</p><h1>134<span align="center"><FontAwesomeIcon icon={faSortUp} 
          color="green" width="17" height="9" margin-top="10" style={{marginLeft:20,marginTop:10}}/></span></h1>
          </Col>
          <Col style={{width:102,height:85.42,marginLeft:15}}>
          <p style={{fontSize:20}}>South Africa</p><h1>471<span align="center"><FontAwesomeIcon icon={faSortDown} 
          color="red" width="17" height="9" margin-top="10" style={{marginLeft:20,marginTop:10}}/></span></h1></Col>
          </Row>      
         
          </Container>
         
        </CardBody>
      </Card>
       
    )
}

export default Country
