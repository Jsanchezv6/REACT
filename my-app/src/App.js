import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    gender: '',
    country: '',
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <div className="App">
      <h1>Formulario de Registro</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre Completo:<br />
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label><br />
        <label>
          Correo Electrónico:<br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label><br />
        <label>
          Contraseña:<br />
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label><br />
        <label>
          Confirmar Contraseña:<br />
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </label><br />
        <label>
          Fecha de Nacimiento:<br />
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
        </label><br />
        <label>
          Género:<br />
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Selecciona tu género</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </label><br />
        <label>
          País de Residencia:<br />
          <input type="text" name="country" value={formData.country} onChange={handleChange} required />
        </label><br />
        <label>
          <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} required />
          Acepto los Términos y Condiciones
        </label><br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
