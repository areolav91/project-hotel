import { Link } from "react-router-dom";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,  } from 'react-bootstrap';






function HotelContent({ id, name, description,pictures,price }) {
  return (

    

<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={pictures[0].url}></Card.Img>
          <Card.Body>
          <Link to={`hotels/${id}`}>
          <Card.Title>{name}</Card.Title></Link>
          <Card.Text>
      {description}
    </Card.Text>
          </Card.Body>
          </Card>
         

         



      

  );
}

export default HotelContent;