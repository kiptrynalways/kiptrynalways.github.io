import { useState } from "react";
import ticketpix from '../../assests/mobileticket.jpg';
import './ticket.css';

function Ticket() {
  const [passengerName, setPassengerName] = useState("");
  const [passengerEmail, setPassengerEmail] = useState("");
  const [seatNumber, setSeatNumber] = useState("");
  const [fare, setFare] = useState("");
  const [travelLocationFrom, setTravelLocationFrom] = useState("");
  const [travelLocationTo, setTravelLocationTo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Passenger name:", passengerName);
    console.log("Passenger email:", passengerEmail);
    console.log("Seat number:", seatNumber);
    console.log("Fare:", fare);
    console.log("Travel location from:", travelLocationFrom);
    console.log("Travel location to:", travelLocationTo);
    setPassengerName("");
    setPassengerEmail("");
    setSeatNumber("");
    setFare("");
    setTravelLocationFrom("");
    setTravelLocationTo("");
  };

  return (
    <div className="trave__ticket" id="ticket">
      <div className="mobile_picture">
        <img src={ticketpix} alt="ticket pix" />
      </div>
      <div className="ticket__form">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="ticket-form">
              <h1>Bus Ticket</h1>
              <label>
                <input
                  type="text"
                  placeholder="Passenger Name"
                  name="passengerName"
                  value={passengerName}
                  onChange={(e) => setPassengerName(e.target.value)}
                />
              </label>
              <label>
                <input
                  type="text"
                  placeholder="Passenger Email"
                  name="passengerEmail"
                  value={passengerEmail}
                  onChange={(e) => setPassengerEmail(e.target.value)}
                />
              </label>
              <label>
                <input
                  name="seatNumber"
                  type="text"
                  placeholder="Seat Number"
                  value={seatNumber}
                  onChange={(e) => setSeatNumber(e.target.value)}
                />
              </label>
              <label>
                <input
                  name="fare"
                  type="number"
                  placeholder="Fare"
                  value={fare}
                  onChange={(e) => setFare(e.target.value)}
                />
              </label>
              <label>
                <input
                  name="traveLocationFrom"
                  type="text"
                  placeholder="Travel Location From"
                  value={travelLocationFrom}
                  onChange={(e) => setTravelLocationFrom(e.target.value)}
                />
              </label>
              <label>
                <input
                  name="traveLocationTo"
                  type="text"
                  placeholder="Travel Location To"
                  value={travelLocationTo}
                  onChange={(e) => setTravelLocationTo(e.target.value)}
                />
              </label>
            </div>
          </fieldset>
          <button onClick={handleSubmit}>Book Ticket</button>
        </form>
      </div>
    </div>
  );
}

export default Ticket;