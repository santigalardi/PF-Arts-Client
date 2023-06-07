import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import googleLogo from '../../assets/img/google.png';
import styles from './Login.modules.css';

const Login = () => {
  return (
    <div className={styles.landing}>
      <Container className='w-100 bg-primary mt-5 rounded shadow'>
        {/* Background */}
        <Row className='bg-box align-items-stretch'>
          <Col className='d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded'></Col>
          {/*  */}

          <Col className='bg-white p-5 rounded-end'>
            <div className='logo-box text-center'>
              <Image src='./img/logo.jpg' id='logo' width='100' alt='' />
            </div>
            <h2 className='fw-bold text-center py-5'>Inicio de Sesión</h2>
            <div className='login'>
              <Form id='login'>
                <Form.Group className='mb-4'>
                  <Form.Label htmlFor='user'>Usuario</Form.Label>
                  <Form.Control type='text' id='user' />
                </Form.Group>
                <Form.Group className='mb-4'>
                  <Form.Label htmlFor='pass'>Contraseña</Form.Label>
                  <Form.Control type='password' id='pass' />
                </Form.Group>
                <div className='d-grid'>
                  <Button variant='primary' type='submit' id='ingresar'>
                    Ingresar
                  </Button>
                </div>
                <div className='mb-4'>
                  <p className='text-danger mt-2' id='mensaje'></p>
                  {/* ERRORS */}
                  <span className='mensaje'>¿No tienes cuenta?</span>{' '}
                  <a href='./html/register.html' className='link'>
                    Regístrate
                  </a>
                </div>
              </Form>

              {/* LOGIN REDES SOCIALES */}

              <Container className='w-100 my-5'>
                <Row className='text-center'>
                  <Col>Iniciar sesión con</Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant='outline-danger' className='w-100 my-1'>
                      <Row className='align-items-center'>
                        <Col xs={2} className='d-none d-md-block'>
                          <Image src={googleLogo} width='34' alt='' />
                        </Col>
                        <Col xs={12} md={10} className='text-center'>
                          Google
                        </Col>
                      </Row>
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
