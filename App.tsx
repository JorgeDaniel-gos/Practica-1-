import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Titulo from './components/Titulo';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import AcercaDe from './pages/AcercaDe';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/acerca">Acerca de</Link>
      </nav>
      <div className="container">
        <Titulo texto="Bienvenido a mi SPA" />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/acerca" element={<AcercaDe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
