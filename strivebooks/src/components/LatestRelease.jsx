//Create a Latest Release component. 
//This component should read from one of the provided 
//.json files and print out the cover of the books.
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import items from '../scifi.json'
const LatestRelease = () =>{
    return(
        <Container fluid>
        <Row class = "row mt-3">
            
                {
                    items.map((bookObject)=>(
                        <Col xs={12} s={6} md={4} xl ={2}>
                            <Card style={{ width: '12rem' }}>
                                <Card.Img variant="top" src={bookObject.img} />
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