import React, { useState, useEffect } from "react";
import "./BookingForm.css";
import axios from "axios";

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    CustomerName: "",
    CustomerEmail: "",
    CustomerPhone: "",
    NumberOfEaters: 1,
    Date: "",
    RestaurantId: "",
  });

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:8080/teruzushiapi/restaurant");
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
            <label htmlFor="CustomerEmail">Email</label>
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
            <label htmlFor="CustomerPhone">Phone</label>
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
            <label htmlFor="Date">Date</label>
            <input
              type="date"
              id="Date"
              name="Date"
              value={formData.Date}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form">
            <label htmlFor="RestaurantId">Select Restaurant</label>
            <select
              id="RestaurantId"
              name="RestaurantId"
              value={formData.RestaurantId}
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
        <img src="../../public/restaurant_photo.svg" id="imageForm" alt="Restaurant" />
      </section>
    </section>
  );
};

export default BookingForm;