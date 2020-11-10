import React from 'react'
import { Card, CardTitle, Row, Col } from 'reactstrap';
import { Container } from 'reactstrap';
import { Badge } from 'reactstrap';
import { Progress } from 'semantic-ui-react';
import Andrew from '../Images/Andrew.png';
import Anna from '../Images/Anna.png';
import Mark from '../Images/Mark.png';
import Johanna from '../Images/Johanna.png';
import usa from '../Images/usa.png'
import italy from '../Images/italy.png'
import spain from '../Images/spain.png'

function Content() {
    return (
        <Row style={{marginTop:40,marginRight:80,marginLeft:50}}>
      <Col md="4" style={{width:717,height:415.07,marginRight:80, paddingLeft:0}}>
          <h5>Team Members<span class="float-right" style={{fontSize:13,color:"blue"}}>
          View All</span></h5>
          <Container className="block-example border border-light" style={{width:530,height:75.07,backgroundColor:"white"}}>
          <img src={Andrew} alt="Andrew" style={{width:80,height:80}}></img>
          <span style={{padding:2,marginTop:20}}>Andrew Johnston</span>
          <span class="float-right" style={{paddingTop:20,}}> <Badge color="light" pill style={{padding:10,color:"lightgreen"}}>Top Trader</Badge></span>
          </Container>
          <Container  className="block-example border border-light" style={{width:530,height:75.07,marginTop:5,backgroundColor:"white"}}>
          <img src={Anna} alt="Anna" style={{width:80,height:80}}></img>
          <span style={{padding:2,marginTop:20}}>Anna Atkinsons</span>
          <span class="float-right" style={{paddingTop:20}}> <Badge color="light" pill style={{padding:10,color:"blue"}}>Manager</Badge></span>
          </Container>
          <Container  className="block-example border border-light" style={{width:530,height:75.07,marginTop:5,backgroundColor:"white"}}>
          <img src={Mark} alt="Mark" style={{width:80,height:80}}></img>
          <span style={{padding:2,marginTop:20}}>Mark Atkinsons</span>
          <span class="float-right" style={{paddingTop:20}}> <Badge color="light" pill style={{padding:10,color:"lightgreen"}}>Top Trader</Badge></span>
          </Container>
          <Container  className="block-example border border-light" style={{width:530,height:75.07,marginTop:5,backgroundColor:"white"}}>
          <img src={Johanna} alt="Johanna" style={{width:80,height:80}}></img>
          <span style={{padding:2,marginTop:20}}>Johanna Tairons</span>
          <span class="float-right" style={{paddingTop:20}}> <Badge color="light" pill style={{padding:10,color:"blue"}}>Manager</Badge></span>
          </Container>
          
          
      </Col>
      <Col md="4" style={{width:717,height:415.07,marginLeft:20}}>
      <h5>Comparison<span class="float-right" style={{fontSize:13,color:"blue"}}>View All</span></h5>
        <Card body style={{width:530,height:320}}>

          <CardTitle tag="h5"></CardTitle>
            <span >
           <img src={usa} alt="USA" style={{width:29,height:21.4}}></img>&nbsp;&nbsp;&nbsp;&nbsp;
           <span>United States</span></span>
           
           <Progress percent={93} size='small' color='green'>
    </Progress>
           <span>
           <img src={italy} alt="Italy" style={{width:29,height:21.4}}></img>&nbsp;&nbsp;&nbsp;&nbsp;
           <span>Italy</span></span>
           <Progress percent={73} size='small' color='green'>
           </Progress>
           <span>
           <img src={spain} alt="Spain" style={{width:29,height:21.4}}></img>&nbsp;&nbsp;&nbsp;&nbsp;
           <span>Spain</span></span>
           
           <Progress percent={13} size='small' color='green'>
    </Progress><br/>
           
         
        </Card>
      </Col>
    </Row>
    )
}

export default Content

