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
            Depende de cuanta guita tienes
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
            <Accordion.Header className ={style['BttAcc']}>¿Cuáles son las mejores formas de conservar y cuidar una pintura?</Accordion.Header>
            <Accordion.Body>
            Soplando
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='3'>
            <Accordion.Header className ={style['BttAcc']}>¿Cuál es la mejor manera de colgar y exhibir una pintura en mi hogar?</Accordion.Header>
            <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='4'>
            <Accordion.Header className ={style['BttAcc']}>¿Cómo puedo saber si una obra de arte tiene potencial de valorización en el futuro?</Accordion.Header>
            <Accordion.Body>
                xd xd xd no lo creo
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='5'>
            <Accordion.Header className ={style['BttAcc']}>¿Es posible comprar arte en línea de forma segura?</Accordion.Header>
            <Accordion.Body>
                Claro que yes
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='6'>
            <Accordion.Header className ={style['BttAcc']}>¿Puedo comprar arte directamente del artista?</Accordion.Header>
            <Accordion.Body>
                RIP
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    </div>
    )
}
export default Buyer;