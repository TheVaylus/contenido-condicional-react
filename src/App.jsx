import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [estado, setEstado] = useState(false);
  const mensaje = estado ? 'Encendido' : 'Apagado';

  return (
    <div className="container">
      <button onClick={() => setEstado(!estado)}>Cambiar Estado</button>
      <p>El estado actual es: {mensaje}</p>
    </div>
  );
};

export default App;
