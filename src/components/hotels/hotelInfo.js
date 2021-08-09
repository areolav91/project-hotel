import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { SWAPI } from "../../constants/api";
import EnquiryForm from "../contact/HotelEnquiry";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export function HotelInfo() {
  const [hotel, sethotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useHistory();

  const { id } = useParams();

  if (!id) {
    history.push("/");
  }

  const url = SWAPI + "/" + id;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            console.log(json);

            sethotel(json);
          } else {
            setError("An error occured");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [url]
  );

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>An error happened: {error}</div>;
	}


  return (

    
    
    
<Container className="info-container">
  <Row className="info-row">
    <Col>
    <div className="info-hotel">
  

    <h3>{hotel.name}</h3>
    <p>
    {hotel.description}
    </p>
    <p>Price {hotel.Price},-NoK</p>
    <img  class="img-fluid" src={hotel.pictures[0].url} width="360px" alt="" />

</div>
</Col>
    <Col><EnquiryForm /></Col>
  </Row>
</Container>


    
          
    
      );
}

export default HotelInfo;

