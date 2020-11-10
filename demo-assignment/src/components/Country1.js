import React,{Component} from 'react'
import {Container,Row,Col} from 'reactstrap'
import countryData from "../data.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Card,CardBody} from 'reactstrap';
import {faSortUp,faSortDown} from '@fortawesome/free-solid-svg-icons'


var countrylist=countryData.countries;
class Country1 extends Component
{
	render()
	{
		return(

		<Card style={{marginTop:40,marginRight:470,marginLeft:50}}>

		{
			countrylist.map(function(cnt,id){
				
				return(
					<CardBody >
					<Container style={{width:1500,height:160,marginTop:60,marginLeft:20}}>
					<Row >
					<Col style={{width:86.75,height:83.25}}>
					
					<p style={{fontSize:20}}>{cnt.countryname}</p><h1>{cnt.figure}<span align="center" ><FontAwesomeIcon icon={faSortUp} 
					color="green" width="17" height="9" style={{marginLeft:20,marginTop:10}} /></span></h1>
					</Col>
				
					</Row>      
				   
					</Container>
				   
				  </CardBody>
					
				);
			})
		}
          
      </Card>
		
		)
	}

}

export default Country1

         
       
    