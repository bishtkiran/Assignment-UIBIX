import React from 'react'
import {Container,Row,Col} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faSortUp,faSortDown } from '@fortawesome/free-solid-svg-icons'
import Currency1 from '../Images/Currency1.png'
import Currency2 from '../Images/Currency2.png'
import Currency3 from '../Images/Currency3.png'
import Currency4 from '../Images/Currency4.png'
function Currency() {
    return (
        <Container style={{width:1527,height:94.5,marginLeft:0,marginTop:70,marginLeft:50}}>
        <Row>
          <Col style={{width:148,height:94}} className="block-example border-right border-light"><p>BALANCE</p>
          <p style={{fontSize:35}}>$5900.00</p></Col>
          <Col style={{width:247,height:94,marginLeft:80}}  className="block-example border-right border-light"><p>PROFITS<span style={{color:"green"}}><FontAwesomeIcon icon={faSortUp} 
          color="green" style={{marginLeft:20}}/>&nbsp;+56%</span></p>
          <p style={{fontSize:35}}>$950.00</p></Col>
          <Col style={{width:247,height:94,marginLeft:80}} className="block-example border-right border-light"><p>LOSSES<span style={{color:"red"}}><FontAwesomeIcon icon={faSortDown} 
          color="red"style={{marginLeft:20}} />&nbsp;+56%</span></p>
          <p style={{fontSize:35}}>$450.00</p></Col>
          <Col style={{width:182,height:83,marginLeft:80}}><p>CURRIENCIES</p>
          <img src={Currency1} alt="Currency1" style={{width:33,height:33}}></img>
          <img src={Currency2} alt="Currency2" style={{width:33,height:33,marginLeft:15}}></img>
          <img src={Currency3} alt="Currency3" style={{width:33,height:33,marginLeft:15}}></img>
          <img src={Currency4} alt="Currency4" style={{width:34,height:33,marginLeft:15}}></img>
          
          
          </Col>
        </Row>
      </Container>
    )
}

export default Currency

