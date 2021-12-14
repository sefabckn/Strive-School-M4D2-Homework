//Create a Latest Release component. 
//This component should read from one of the provided 
//.json files and print out the cover of the books.
//import { useEffect } from 'react'
import { useState } from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import strive from '../scifi.json'
import { Component } from 'react'
/* const LatestRelease = () =>{
    const [chosenBook, setChosenBook] = useState(null) //hook usage
   
    return(
        <Container fluid>
        <Row class = "row mt-3">
                {
                    items.map((bookObject)=>(
                        <Col xs={12} s={6} md={4} xl ={2}>
                            <Card style={{ width: '12rem' }}>
                                <Card.Img 
                                variant="top" 
                                src={bookObject.img}
                                onClick={()=>{ chosenBook === null && setChosenBook( bookObject )}}
                                />
                                <Card.Body>
                                    <Card.Title>{bookObject.title}</Card.Title>
                                    <Card.Text>
                                    {bookObject.price}<span>€</span>
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

export default LatestRelease
 */

class LatestRelease extends Component {

    state= {
        chosenBook : null
    }

    render(){
        return(
            <Container fluid>
                <Row class = "row mt-3">{
                    strive.map((book) => (
                        <Col xs={12} s={6} md={4} xl ={2}>
                        <Card style={{ width: '12rem' }}>
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
export default LatestRelease