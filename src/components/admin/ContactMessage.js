import React from 'react';
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { MAPI } from "../../constants/api";
import Toast from 'react-bootstrap/Toast'

import Col from 'react-bootstrap/Col'


function MessageList() {
  const [contactMsg, messageSite] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
 

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(MAPI);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          messageSite(json);
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
          
          
          {contactMsg.map(function (contactMsg) {
            const { Name, Email, Message } = contactMsg;
            return (
              <>
              
              
              <Col xs={12}>
        <Toast>
  <Toast.Header>
    <strong className="mr-auto">Message</strong><strong className="mr-auto">Close all Messages</strong>
  </Toast.Header>
  <Toast.Body>Name: {Name}</Toast.Body>
  <Toast.Body>E-mail: {Email}</Toast.Body>
  <Toast.Body>Message: {Message}</Toast.Body>
</Toast>
</Col>
</>
 );
          })}
          
        </Container>
      )
    }

export default MessageList;
