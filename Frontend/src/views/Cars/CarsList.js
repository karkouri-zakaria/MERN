import {Container,Row,Pagination, Col} from 'react-bootstrap';
import CarsCard from './CarsCard.js'
import axios from 'axios';
import { useEffect, useState } from 'react';

const api = axios.create({ baseURL: 'http://localhost:2020/api/v1/' });

const Cars = () => {



    const [cars, setCars ] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

  useEffect (() => {
    const Cars = async (req,res) => {
      await api.get('Cars').then(res => {
        setCars(res.data.cars);
        setTotalPages(res.data.count);
        console.log(cars);


      })
    }
    Cars();
  },[currentPage]);


    const cardList=cars.map(car => <CarsCard key={car._id} Model={car.Model} Year={car.Year} Brand={car.Brand}/>)

let items = [];
for (let number = 1; number <= totalPages; number++) {
  items.push(
    <Pagination.Item onClick={() => setCurrentPage(number)} key={number} active={number === currentPage}>
    1
    </Pagination.Item>,
  );
}

    return (
      <div className='bg1'>
        <Container gap={3}>
          <hr />
            <h2 className='text-warning'>List of Cars</h2>
            <Row>
                {cardList}

            </Row>
            <Row >
                <Col className='md-3 offset-6'>
                      <Pagination size="sm">{items}</Pagination>
                </Col>
            </Row>
            <hr />
        </Container>
      </div>
    )
}

export default Cars