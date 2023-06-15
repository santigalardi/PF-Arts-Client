import { NavLink } from 'react-router-dom';
import style from './About.module.css';

const AboutUs=()=> {
  return (
    <div className={style['about']}>
        <NavLink className ={style['BttBack']} to='/'> ←BACK </NavLink>
        <hr />
        <h1>¿Como te desarrollaste y a que publico  te diriges? ¿Que ofreces como sitio web?</h1>
        <p>
        Como un sitio web de venta de arte y pintura desarrollado con React, JavaScript y SQL, mi desarrollo se basó en la utilización de estas tecnologías para crear una plataforma interactiva y amigable para los usuarios interesados en adquirir obras de arte.
        Mi objetivo principal es brindar una experiencia atractiva y accesible para todo tipo de público, desde aficionados del arte hasta coleccionistas y amantes de la decoración. Mi enfoque es proporcionar una amplia variedad de obras de arte de diferentes estilos, artistas y técnicas, de manera que cada usuario pueda encontrar piezas que se adapten a sus gustos y preferencias.
        Como sitio web, ofrezco las siguientes características y servicios:
        Catálogo de arte: Presento una amplia colección de obras de arte de diversos géneros y estilos, incluyendo pinturas, esculturas y fotografías. Los usuarios pueden explorar y descubrir diferentes piezas, filtrar por categorías, artistas y precios, y obtener detalles e información relevante sobre cada obra.
        Compra y venta de arte: Permito a los usuarios comprar y vender obras de arte a través de la plataforma. Los artistas pueden crear perfiles y subir sus obras para ponerlas a la venta, mientras que los compradores pueden realizar transacciones seguras y convenientes. Ofrezco opciones de pago seguras y diversos métodos de envío para garantizar la satisfacción de los clientes.
        Perfiles de artistas: Los artistas tienen la posibilidad de crear perfiles donde pueden mostrar su trabajo, compartir su biografía y experiencia artística, y establecer contacto directo con los interesados en su obra. Esto fomenta la conexión entre los artistas y los compradores, brindando una experiencia personalizada.
        Recomendaciones y descubrimiento: Utilizo algoritmos y tecnologías de inteligencia artificial para ofrecer recomendaciones personalizadas a los usuarios, basadas en sus preferencias, búsquedas anteriores y comportamiento de navegación. Esto ayuda a los usuarios a descubrir nuevas obras y artistas que puedan interesarles.
        Asesoramiento y servicios adicionales: Proporciono servicios de asesoramiento para ayudar a los usuarios a elegir piezas de arte que se ajusten a su estilo, presupuesto y necesidades específicas. También ofrezco servicios de enmarcado personalizado, asistencia en la decoración de espacios y consejos para el cuidado y conservación de las obras adquiridas.
        En resumen, como un sitio web de venta de arte y pintura, mi objetivo es ofrecer una plataforma atractiva y fácil de usar, donde los usuarios pueden descubrir, comprar y vender obras de arte, conectar con artistas y disfrutar de una experiencia única en el mundo del arte.
        </p>
    </div>
    
  );
}

export default AboutUs;