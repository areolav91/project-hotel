import React from 'react';
import Form from "react-bootstrap/Form";
import { TOKEN_PATH } from "../../constants/api"


export class AdminPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      Price: "",
      pictures: "",
    };
  }

  uploadChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  uploadFile = (event) => {
    this.setState({pictures: event.target.files[0]});
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append(
    "data",
    JSON.stringify({
    name: this.state.name,
    description: this.state.description,
    Price: this.state.price,
    
  }),
);

  formData.append("files.pictures", this.state.pictures);

    try {
      const response = await fetch(
        "https://shielded-beach-74825.herokuapp.com/hotels",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${TOKEN_PATH}`,
          },
          body: formData,
          
        }
      );
      const data = await response.json();
      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };

  render() {

    
    return (
      <div className="addhotel">
        <Form onSubmit={this.handleSubmit}>
          <h3 class="text-center">Add New Hotel</h3>
          <Form.Label><h6 class="text-center">Hotel Name:</h6></Form.Label>
          <Form.Control
            type="text"
            name="name"
            id="name"
            onChange={this.uploadChange}
            value={this.state.name}
          />
          <Form.Label><h6 class="text-center">Description:</h6></Form.Label>
          <Form.Control
            type="text"
            name="description"
            id="description"
            onChange={this.uploadChange}
            value={this.state.description}
          />
          <Form.Label><h6 class="text-center">Price:</h6></Form.Label>
          <Form.Control
            type="number"
            name="Price"
            id="price"
            onChange={this.uploadChange}
            value={this.state.price}
          />
          <Form.Label><h6 class="text-center">Pictures</h6></Form.Label>
          <Form.Control
            type="file"
            name="pictures"
            id="pictures"
            onChange={this.uploadFile}
            
          />
         

          <button class="standard-button" type="submit">Submit</button>
        </Form>
      </div>
    );
  }
}

export default AdminPage;



