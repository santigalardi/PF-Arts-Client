import { NavLink } from 'react-router-dom';
import style from './A-Servicies.module.css'

const AdvisoryServices = () => {
  return (
    <div className={style['A-serviciesStyle']}>
      <div className={style['textContainer']}>
      <NavLink className ={style['BttBack']}to='/'> ←BACK </NavLink>
      <h2>Advisory Services</h2>
      <p>
        Arte&Pinturas, el lugar donde el arte cobra vida y las obras maestras encuentran un nuevo hogar. Sumérgete en un mundo de creatividad y descubre la belleza que se oculta en cada trazo y pincelada.
        En Arte&Pinturas, te ofrecemos la oportunidad de ser parte de la vibrante comunidad artística al permitirte vender tus propias obras de arte. Si eres un artista talentoso y buscas un espacio para mostrar tu creatividad al mundo, has llegado al lugar indicado. Con nuestra plataforma intuitiva y amigable, puedes crear tu perfil, exhibir tus obras y conectar directamente con posibles compradores.
        Pero Arte&Pinturas no solo es un lugar para los artistas, también es un destino para los amantes del arte. Sumérgete en nuestra galería virtual, donde encontrarás una amplia selección de pinturas que abarcan desde los maestros clásicos hasta los artistas contemporáneos más emocionantes. Explora la evolución del arte a lo largo de la historia y maravíllate con la diversidad de estilos y técnicas.
        Nuestra plataforma está diseñada para que puedas disfrutar de una experiencia de compra única. Explora las diferentes categorías, desde paisajes impresionistas hasta retratos realistas, y encuentra la obra que hable directamente a tu corazón. Cada pieza viene acompañada de una descripción detallada y fotografías de alta calidad, para que puedas apreciar cada detalle antes de tomar una decisión.
        Además, en Arte&Pinturas nos enorgullece ofrecer un proceso de compra seguro y confiable. Trabajamos estrechamente con los artistas para asegurarnos de que cada transacción se lleve a cabo de manera transparente y sin contratiempos. Así, puedes tener la tranquilidad de que estás adquiriendo una obra auténtica y de calidad.
        Explora nuestra sección de eventos y exposiciones para mantenerte al tanto de las últimas novedades en el mundo del arte. Desde exhibiciones de renombrados artistas hasta ferias de arte locales, te mantendremos informado sobre las oportunidades para sumergirte aún más en el fascinante mundo del arte.
        En Arte&Pinturas, creemos que el arte tiene el poder de transformar nuestras vidas. Ya sea que estés buscando una pieza para tu hogar, una inversión artística o simplemente quieras deleitarte con la belleza visual, estamos aquí para guiarte en tu viaje artístico. Explora, admira y encuentra tu propia obra maestra en Arte&Pinturas.
      </p>
      <p>
        Nuestro departamento de Servicios de Asesoramiento. Ofrecemos una amplia gama de servicios para ayudarte en tus necesidades empresariales. Nuestro equipo de expertos está listo para brindarte el asesoramiento estratégico y la orientación necesaria para alcanzar tus objetivos. Explora nuestros servicios a continuación y contáctanos para obtener más información.
      </p>
      {/* { servicios de asesoramiento */}
      </div>
      <img className={style['imgS']} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC1loMMxJ9DTEL8PaCxuMcdjr0ROz9jG8B0Q&usqp=CAU'/>
    </div>
  );
};

export default AdvisoryServices;
