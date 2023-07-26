import React, { Component } from "react";
import ticketpix from '../../assests/mobileticket.jpg';
import './ticket.css';

class BusTicket extends Component {
  state = {
    passengerName: " ",
    passengerEmail: " ",
    seatNumber: " ",
    fare: 0,
    travelLocationFrom: " ",
    travelLocationTo: " ",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Passenger name:", this.state.passengerName);
    console.log("Passenger email:", this.state.passengerEmail);
    console.log("Seat number:", this.state.seatNumber);
    console.log("Fare:", this.state.fare);
    console.log("Travel location from:", this.state.travelLocationFrom);
    console.log("Travel location to:", this.state.travelLocationTo);
  };

  render() {
    return (
      <div className="trave__ticket" id="ticket">
        

        
      <div className="mobile_picture">
        <img src={ticketpix} alt="ticket pix" />
      </div>
        <div className="ticket__form">
      <h1>Bus Ticket</h1>
        <label>
          <input
            name="passengerName"
            type="text"
            placeholder="Passenger Name"
            value={this.state.passengerString}
            onChange={this.handleChange}
          />
        </label>

        <label>
          <input
            name="passengerEmail"
            type="email"
            placeholder="Passenger Email"
            value={this.state.passengerEmail}
            onChange={this.handleChange}
          />
        </label>

        <label>
          <input
            name="seatNumber"
            type="text"
            placeholder="Seat Number"
            value={this.state.seatString}
            onChange={this.handleChange}
          />
        </label>

        <label>
          <input
            name="fare"
            type="number"
            placeholder="Fare"
            value={this.state.fare}
            onChange={this.handleChange}
            disabled={true}
          />
        </label>

        <label>
          <input
            name="traveLocationFrom"
            type="text"
            placeholder="Travel Location From"
            value={this.state.travelLocationFromString}
            onChange={this.handleChange}
          />
        </label>



        <label>
          <input
            name="traveLocationTo"
            type="text"
            placeholder="Travel Location To"
            value={this.state.travelLocationToString}
            onChange={this.handleChange}
          />
        </label>

        <button onClick={this.handleSubmit}>Book Ticket</button>
      </div>
      </div>
    );
  }
}

export default BusTicket;
