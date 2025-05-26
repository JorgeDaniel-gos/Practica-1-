import { useState, FormEvent } from 'react';

export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      {enviado && (
        <p style={{ color: 'green' }}>
          Gracias, <strong>{nombre}</strong>. Te responderemos a <strong>{correo}</strong>.
        </p>
      )}
      <form onSubmit={manejarEnvio}>
        <input
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        /><br />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        /><br />
        <textarea
          placeholder="Mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        /><br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
