import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'


export class EnquiryForm extends React.Component {
  constructor(props) {
    super(props);

  
    this.state = {
      modifiedData: {
        name: '',
        description: '',
        categories: [],
      },
      allCategories: [],
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
        'https://shielded-beach-74825.herokuapp.com/Enquiries',
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
      <div className="enq-form">
      
      <form id="contid" onSubmit={this.handleSubmit}>
          <h3 class="text-center">Booking Enquiry</h3>
          <br />
          <label>
          <p class="text-center">Hotel Name:</p>
            <Form.Control
              type="text"
              name="Name"
              onChange={this.handleInputChange}
              value={modifiedData.Name}
            />
          </label>
          <label>
          <p class="text-center">Which date would you like to book?:</p>
            <Form.Control
              type="date"
              name="Date"
              onChange={this.handleInputChange}
              value={modifiedData.Date}
            />
            </label>
          <label>
          <h3 class="text-center">Please add your contact information:</h3>
            <Form.Control
              type="text"
              name="Information"
              id="textmessage"
              as="textarea"
              onChange={this.handleInputChange}
              value={modifiedData.Information}
            />
          </label>
          <button class="standard-button" type="submit">Submit</button>
        </form>
      
      
      </div>
    );
  }
}

export default EnquiryForm;