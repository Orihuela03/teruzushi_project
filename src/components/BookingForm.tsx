import React, { useState, useEffect } from "react";
import "./BookingForm.css";
import axios from "axios";

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    numberOfEaters: 1,
    date: "",
    restaurantId: "",
  });

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/restaurants");
        setRestaurants(response.data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "numberOfEaters" ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const bookingData = {
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        customerPhone: formData.customerPhone,
        numberOfEaters: formData.numberOfEaters,
        date: formData.date,
        restaurant: { id: formData.restaurantId },
      };

      const response = await axios.post(
        "http://localhost:8080/api/bookings",
        bookingData,
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
            <label htmlFor="customerName">Name</label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form">
            <label htmlFor="customerEmail">Email</label>
            <input
              type="email"
              id="customerEmail"
              name="customerEmail"
              value={formData.customerEmail}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form">
            <label htmlFor="customerPhone">Phone</label>
            <input
              type="tel"
              id="customerPhone"
              name="customerPhone"
              value={formData.customerPhone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form">
            <label htmlFor="numberOfEaters">Number of Eaters</label>
            <input
              type="number"
              id="numberOfEaters"
              name="numberOfEaters"
              value={formData.numberOfEaters}
              onChange={handleInputChange}
              min={1}
              max={8}
              required
            />
          </div>
          <div className="form">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form">
            <label htmlFor="restaurantId">Select Restaurant</label>
            <select
              id="restaurantId"
              name="restaurantId"
              value={formData.restaurantId}
              onChange={handleInputChange}
              required
            >
              <option value="">Choose a restaurant</option>
              {restaurants.map((restaurant: any) => (
                <option key={restaurant.id} value={restaurant.id}>
                  {restaurant.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" id="buttonForm">
            Send Reserve
          </button>
        </form>
      </section>
      <section id="imageFormContainer">
        <img src="../../public/restaurant_photo.svg" id="imageForm" alt="Restaurant image" />
      </section>
    </section>
  );
};

export default BookingForm;