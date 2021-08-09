
import React, { Component } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { withRouter } from "react-router-dom";
import "react-bootstrap-typeahead/css/Typeahead.css";

class HotelSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelArray: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch("https://shielded-beach-74825.herokuapp.com/hotels")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log("result", result);

        const searchOptions = result.map((s) => {
          return { id: s.id, label: s.name, };
        });

        this.setState({
          hotelArray: searchOptions,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  }

  handleChange = (selected) => {
    const id = selected[0].id;
    this.props.history.push(`/hotels/${id}`);
  };

  render() {
    return (
      <Typeahead
      
        className="Search" id="Searchbar"
        onChange={(selected) => {
          this.handleChange(selected);
        }}
        options={this.state.hotelArray}
        placeholder="Search for hotels"
      />
      
    );
  }
}

export default withRouter(HotelSearch);