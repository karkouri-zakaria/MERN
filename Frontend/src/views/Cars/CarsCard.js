import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CarsCard(props) {
  return (
    <Card className='col-md-3 Card' style={{margin:'10 rem'}}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{props.Brand}</Card.Title>
        <Card.Text>
            {props.Year}
        </Card.Text>
        <Button variant="warning">See More</Button>
      </Card.Body>
    </Card>
  );
}