import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


export class ContactForm extends React.Component {
  constructor(props) {
    super(props);

  
    this.state = {
      modifiedData: {
        name: '',
        description: '',
        categories: [],
      },
      error: null,
    };
  }


  componentDidMount = async () => {
    try {
      const response = await axios.get('https://shielded-beach-74825.herokuapp.com/categories');
      this.setState({ allCategories: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState(prev => ({
      ...prev,
      modifiedData: {
        ...prev.modifiedData,
        [name]: value,
      },
    }));
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://shielded-beach-74825.herokuapp.com/messages',
        this.state.modifiedData
      );
      console.log(response);
    } catch (error) {
      this.setState({ error });
    }
  };


  render() {
    const { error, modifiedData } = this.state;

    
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
        <Container className="contform" fluid="md">
          <Row className="justify-content-md-center">
      
        <form id="contid" onSubmit={this.handleSubmit}>
          <h3 class="text-center">Contact us</h3>
          <br />
          <label>
            <p class="text-center">Name:</p>
            <Form.Control
              type="text"
              name="Name"
              onChange={this.handleInputChange}
              value={modifiedData.Name}
            />
          </label>
          <label>
          <p class="text-center">Enter your e-mail:</p>
            
             <Form.Control type="Email"
              name="Email"
              onChange={this.handleInputChange}
              value={modifiedData.email}
            />
          </label>
          <label>
          <p class="text-center">Message:</p>
            <Form.Control
              id="textmessage"
              type="text"
              name="Message"
              as="textarea"
              onChange={this.handleInputChange}
              value={modifiedData.message}
            />
          </label>
          <button class="standard-button" type="submit">Submit</button>
        </form>
      
      </Row>
      </Container>
    );
  }
}

export default ContactForm;