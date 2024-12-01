import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  nombre: string;
  telefono: string;
  email: string;
  comensales: number;
  restaurante: string;
  fecha: string;
  hora: string;
}

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    telefono: "",
    email: "",
    comensales: 1,
    restaurante: "Teruzushi",
    fecha: "",
    hora: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/teruzushi/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Reserva realizada con éxito!");
        setFormData({
          nombre: "",
          telefono: "",
          email: "",
          comensales: 1,
          restaurante: "Teruzushi",
          fecha: "",
          hora: "",
        });
      } else {
        alert("Hubo un problema al realizar la reserva.");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Error al enviar la solicitud. Intenta nuevamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Name:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="telefono">Phone Number:</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="comensales">Numbers of Eaters:</label>
        <input
          type="number"
          id="comensales"
          name="comensales"
          value={formData.comensales}
          onChange={handleChange}
          min="1"
          required
        />
      </div>

      <div>
        <label htmlFor="restaurante">Restaurant:</label>
        <select
          id="restaurante"
          name="restaurante"
          value={formData.restaurante}
          onChange={handleChange}
          required
        >
          <option value="Teruzushi">Teruzushi</option>
          <option value="TeruzushiJP">TeruzushiJP</option>
          <option value="Teruzushi Riyadh">Teruzushi Riyadh</option>
        </select>
      </div>

      <div>
        <label htmlFor="fecha">Date:</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          value={formData.fecha}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="hora">Hour:</label>
        <input
          type="time"
          id="hora"
          name="hora"
          value={formData.hora}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submmit</button>
    </form>
  );
};

export default BookingForm;