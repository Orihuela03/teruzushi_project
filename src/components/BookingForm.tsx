import React, { useState } from "react";
import axios from "axios";

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    CustomerName: "",
    CustomerEmail: "",
    CustomerPhone: "",
    NumberOfEaters: 1,
    ReservationDate: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "NumberOfEaters" ? parseInt(value, 10) : value, // Convertir a entero si es NumberOfEaters
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/teruzushiapi/booking", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Reserva enviada con éxito!");
      console.log(response.data);
    } catch (error) {
      console.error("Error al enviar la reserva:", error);
      alert("Hubo un error al enviar la reserva.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="CustomerName">Nombre:</label>
        <input
          type="text"
          id="CustomerName"
          name="CustomerName"
          value={formData.CustomerName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="CustomerEmail">Correo Electrónico:</label>
        <input
          type="email"
          id="CustomerEmail"
          name="CustomerEmail"
          value={formData.CustomerEmail}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="CustomerPhone">Teléfono:</label>
        <input
          type="tel"
          id="CustomerPhone"
          name="CustomerPhone"
          value={formData.CustomerPhone}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="NumberOfEaters">Número de comensales:</label>
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
      <div>
        <label htmlFor="ReservationDate">Fecha de la reserva:</label>
        <input
          type="date"
          id="ReservationDate"
          name="ReservationDate"
          value={formData.ReservationDate}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default BookingForm;