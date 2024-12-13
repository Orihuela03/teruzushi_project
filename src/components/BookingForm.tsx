import React, { useState } from "react";
import "./BookingForm.css";
import axios from "axios";

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    CustomerName: "",
    CustomerEmail: "",
    CustomerPhone: "",
    NumberOfEaters: 1,
    ReservationDate: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "NumberOfEaters" ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/teruzushiapi/booking",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("Reserva enviada con éxito!");
      console.log(response.data);
    } catch (error) {
      console.error("Error al enviar la reserva:", error);
      alert("Hubo un error al enviar la reserva.");
    }
  };

  return (
    <section id="allContentContainer">
      <section id="formContainer">
        <form onSubmit={handleSubmit}>
          <div className="form">
            <label htmlFor="CustomerName">Name</label>
            <input
              type="text"
              id="CustomerName"
              name="CustomerName"
              value={formData.CustomerName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form">
            <label htmlFor="CustomerEmail">Contact Email</label>
            <input
              type="email"
              id="CustomerEmail"
              name="CustomerEmail"
              value={formData.CustomerEmail}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form">
            <label htmlFor="CustomerPhone">Contact Phone</label>
            <input
              type="tel"
              id="CustomerPhone"
              name="CustomerPhone"
              value={formData.CustomerPhone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form">
            <label htmlFor="NumberOfEaters">Number of Eaters</label>
            <input
              type="number"
              id="NumberOfEaters"
              name="NumberOfEaters"
              value={formData.NumberOfEaters}
              onChange={handleInputChange}
              min={1}
              max={8}
              required
            />
          </div>
          <div className="form">
            <label htmlFor="ReservationDate">Reserve Date</label>
            <input
              type="date"
              id="ReservationDate"
              name="ReservationDate"
              value={formData.ReservationDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" id="buttonForm">
            Send Reserve
          </button>
        </form>
      </section>
      <section id="imageFormContainer">
        <img src="../../public/restaurant_photo.svg"  id="imageForm"/>
      </section>
    </section>
  );
};

export default BookingForm;
