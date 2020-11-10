import React,{Component} from 'react'
import contentData from "../data.json";
import { Card, CardTitle, Row, Col } from 'reactstrap';
import { Container } from 'reactstrap';
import { Badge } from 'reactstrap';


var teamlist=contentData.teams;
var comparisonlist=contentData.comparisons;

class Content1 extends Component
{
    render()
    {
        return(
            
            <Row style={{marginTop:40,marginRight:80,marginLeft:50}}>
            <Col md="4" style={{width:717,height:415.07,marginRight:80, paddingLeft:0}}>
            <h5>Team Members<span class="float-right" style={{fontSize:13,color:"blue"}}>
            View All</span></h5></Col>
           
            {
                teamlist.map((team)=>{
                    return(
                        <Container className="block-example border border-light" style={{width:530,height:75.07,backgroundColor:"white"}}>
                        <img src={team.image} alt="Andrew" style={{width:80,height:80}}></img>
                        <span style={{padding:2,marginTop:20}}>{team.name}</span>
                        <span class="float-right" style={{paddingTop:20,}}> <Badge color="light" pill style={{padding:10,color:"lightgreen"}}>{team.designation}</Badge></span>
                        </Container>

                       

                    );
                })
            }
            </Row>
            

        )

    }

}
export default Content1
