//Create a Welcome component with a Jumbotron and a subtitle for your shop.
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
const Welcome = () =>(
<>
    <Jumbotron fluid>
      <Container>
        <h1>Welcome</h1>
        <p>
           This is our Strive Library  
        </p>
        <Button variant="primary">
         Primary Button
        </Button>
      </Container>
    </Jumbotron>
  </> 
);

export default Welcome