//Create a Latest Release component. 
//This component should read from one of the provided 
//.json files and print out the cover of the books.

import { useState } from 'react'
import {Container, Row, Col, Card, Badge,Button} from 'react-bootstrap'
import items from '../scifi.json'
import { Component } from 'react'

const LatestRelease = () =>{
    const [chosenBook, setChosenBook] = useState(null) 

    return(
        <Container fluid>
        <Row class = "row mt-3">
                {//Create SingleBook component instead 
                    items.map((bookObject)=>(
                        <Col xs={12} s={6} md={4} xl ={2}>
                            <Card style={{ width: '12rem', height:'100%'}}>
                                <Card.Img 
                                variant="top" 
                                src={bookObject.img}
                                onClick={()=>{ setChosenBook( bookObject )}}
                                />
                                <Card.Body>
                                    <Card.Title>{bookObject.title}</Card.Title>
                                    <Card.Text>
                                    <Badge variant='warning'>Price: {bookObject.price}<span>€</span></Badge>
                                    <Button variant="primary">
                                    Purchase <Badge bg="secondary"></Badge>
                                    
                                    </Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                      
                    ))
                }
            
        </Row>
    </Container>
    )
    

}

export default LatestRelease


/* class LatestRelease extends Component {
  
    state= {
        chosenBook : null
    }
    render(){
        const myStyle = {
            width: '12rem',
            height: '100%',
        }
        return(
            <Container fluid>
                <Row class = "row mt-3">{
                    items.map((book) => (
                        <Col xs={12} s={6} md={4} xl ={2}>
                        <Card style={ myStyle }>
                            <Card.Img 
                            variant="top" 
                            src={book.img}
                            onClick={()=>{this.setState(
                                {
                                    chosenBook : book 
                                }
                            )}}
                            />
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>
                                {book.price}<span>€</span>
                                </Card.Text>
                                <Button variant="primary">Go Book</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                        ))
    
                }


                </Row>
            </Container>
        )
    }
    

}
export default LatestRelease */