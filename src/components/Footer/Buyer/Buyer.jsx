import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Buyer.module.css'
import {Accordion} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Buyer=()=>{
    return(
    <div className={style['BuyerStyle']}>
        <NavLink className ={style['BttBack']} to='/'> ←BACK </NavLink>
        <hr />
        <Accordion defaultActiveKey='0' flush>
        <Accordion.Item eventKey='0'>
            <Accordion.Header className ={style['BttAcc']}>¿Cómo puedo comenzar a comprar arte y pinturas?</Accordion.Header>
            <Accordion.Body>
            Viendo nuestra galeria 
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
            <Accordion.Header className ={style['BttAcc']}>¿Cuál es el valor de una obra de arte?</Accordion.Header>
            <Accordion.Body>
            El valor de las productos estan relacionados con los artistas. Sin embargo se puede llegar a un acuerdo si el artista lo aprueba.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
            <Accordion.Header className ={style['BttAcc']}>¿Cuáles son las mejores formas de conservar y cuidar una pintura?</Accordion.Header>
            <Accordion.Body>
            Recuerda que cada obra de arte es única y puede requerir cuidados específicos según el tipo de pintura, materiales utilizados y su estado de conservación. Siempre es mejor tomar precauciones y buscar orientación profesional cuando sea necesario para asegurarte de mantener la pintura en óptimas condiciones a largo plazo. 
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='3'>
            <Accordion.Header className ={style['BttAcc']}>¿Cuál es la mejor manera de colgar y exhibir una pintura en mi hogar?</Accordion.Header>
            <Accordion.Body>
            Selección del lugar: Elige un lugar adecuado para exhibir la pintura, considerando la iluminación, el tamaño de la pared y la decoración general de la habitación.<br/>
            Altura de la colocación: Cuelga la pintura a una altura visualmente agradable, generalmente a la altura de los ojos o ligeramente por encima del nivel de los ojos.<br/>
            Orientación y alineación: Asegúrate de colgar la pintura de manera nivelada y alineada con otros elementos de la habitación, como muebles o líneas arquitectónicas.<br/>
            Sujeción adecuada: Utiliza un sistema de sujeción adecuado según el peso y tamaño de la pintura. Puedes utilizar ganchos, clavos o sistemas de montaje específicos para cuadros.<br/>
            Protección contra daños: Evita colgar la pintura en áreas de alto tráfico o donde pueda sufrir daños accidentales. También asegúrate de que esté alejada de fuentes de calor, humedad o luz solar directa.<br/>
            Marco y montaje: Si decides enmarcar la pintura, elige un marco que complemente la obra y la proteja adecuadamente. Utiliza materiales de montaje que sean libres de ácido y no dañen la pintura.<br/>
            Distribución equilibrada: Si planeas exhibir varias pinturas en una misma pared, asegúrate de distribuirlas de manera equilibrada y armoniosa, teniendo en cuenta el espacio entre ellas.<br/>
            Rotación periódica: Para evitar la exposición excesiva a la luz y reducir el riesgo de daños, considera rotar las pinturas exhibidas periódicamente con otras obras de arte que tengas.<br/>
            Recuerda que estos consejos son generales y pueden variar dependiendo de la pintura en particular y tu preferencia personal. Si tienes dudas o inquietudes, siempre es recomendable buscar la opinión de un profesional en arte o diseño de interiores.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='4'>
            <Accordion.Header className ={style['BttAcc']}>¿Cómo puedo saber si una obra de arte tiene potencial de valorización en el futuro?</Accordion.Header>
            <Accordion.Body>
                <p>
                    Se valorara segun cuantas estrellas tenga. Se definira por la popularidad.
                </p>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='5'>
            <Accordion.Header className ={style['BttAcc']}>¿Es posible comprar arte en línea de forma segura?</Accordion.Header>
            <Accordion.Body>
                Claro que si. Sin embargo siempre hay que ser precavido.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='6'>
            <Accordion.Header className ={style['BttAcc']}>¿Puedo comprar arte directamente del artista?</Accordion.Header>
            <Accordion.Body>
                Claro que si pero no nos hacemos responsable de cualquier consecuencia.
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    </div>
    )
}
export default Buyer;