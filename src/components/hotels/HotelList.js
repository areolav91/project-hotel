import React from 'react';
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { SWAPI } from "../../constants/api"
import HotelContent from "./hotelContent";


function HotelList() {
  const [hotel, hotelSite] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(SWAPI);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          hotelSite(json);
        } else {
          setError("A server error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>An error happened: {error}</div>;
	}

  return (
<Container className="allhotels">

<h1 class="text-center"> Prime destinations in Bergen!</h1>
        {hotel.map(function (hotel) {
          const { id, name,pictures,description,Price} = hotel;
          return <HotelContent  key={name} id={id} name={name} pictures={pictures} description={description} Price={Price}  />;
        })}

        

    </Container>
  );
}

export default HotelList;