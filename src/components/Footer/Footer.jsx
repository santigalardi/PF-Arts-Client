import './Footer.style.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='Footer-container'>
      <div className='Footer-ref'>
        <ul>
          <div>
            <li>Para compradores</li>
            <li><NavLink to='/asesoramiento'activeClassName='active'>Servicio de Asesoramiento</NavLink></li>
            <li><NavLink to='/preguntas-frecuentes'>Preguntas frecuentes del comprador</NavLink></li>
          </div>
          <div>
            <li>Para artistas</li>
            <li><NavLink to='/por-que-vender'>Por qué vender</NavLink></li>
            <li><NavLink to='/manual-artista'>Manual del Artista</NavLink></li>
          </div>
          <div>
            <li>Sobre Nosotros</li>
            <li><NavLink to='/acerca-de'>Acerca de</NavLink></li>
            <li><NavLink to='/contactenos'>Contactenos</NavLink></li>
            <li><NavLink to='/historias'>Historias de Art & Culture</NavLink></li>
          </div>
          <div>
            <li>Art & Culture</li>
            <li><NavLink to='/terminos-servicio'>Terminos de servicio</NavLink></li>
            <li><NavLink to='/aviso-privacidad'>Aviso de privacidad</NavLink></li>
            <li><NavLink to='/aviso-cookies'>Aviso de cookies</NavLink></li>
            <li><NavLink to='/terminos-condiciones'>Terminos y condiciones</NavLink></li>
            <li><NavLink to='/politica-derechos'>Politica de derechos del Autor</NavLink></li>
          </div>
          <div>
            <li>Categorias Principales</li>
            <li><NavLink to='/pinturas'>Pinturas</NavLink></li>
            <li><NavLink to='/fotografia'>Fotografia</NavLink></li>
            <li><NavLink to='/escultura'>Escultura</NavLink></li>
            <li><NavLink to='/dibujo'>Dibujo</NavLink></li>
            <li><NavLink to='/collage'>Collage</NavLink></li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
