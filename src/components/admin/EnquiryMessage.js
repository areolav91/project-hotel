import React from 'react';
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { EAPI } from "../../constants/api";
import Toast from 'react-bootstrap/Toast'
import Col from 'react-bootstrap/Col'


function EnqList() {
  const [enqMsg, enqSite] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(EAPI);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          enqSite(json);
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
      
      <Container>
       
          
          {enqMsg.map(function (enqMsg) {
            const { Name, Date, Information } = enqMsg;
            return (
              
              <>
              <div class="enqtoast">
              <Col xs={12}>
        <Toast show={showA} onClose={toggleShowA}>
  <Toast.Header>
    <strong className="mr-auto">Hotel Message</strong><strong className="mr-auto">Close all Messages</strong>
  </Toast.Header>
  <Toast.Body>Name: {Name}</Toast.Body>
  <Toast.Body>Date: {Date}</Toast.Body>
  <Toast.Body>Information: {Information}</Toast.Body>
</Toast>
</Col>
</div>
 </>
            );
          })}
          
        </Container>
        
      );
    }

export default EnqList;
