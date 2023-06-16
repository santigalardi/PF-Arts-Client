import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import googleLogo from '../../assets/img/google.png';
import styles from './Register.module.css';

const Register = () => {
  return (
    <div className={styles['login-container']}>
      <Container className='w-100 bg-primary rounded shadow'>
        {/* Background */}
        <Row className={`${styles['bg-box']} align-items-stretch`}>
          <Col className='d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded'></Col>
          {/*  */}

          <Col className='bg-white p-3 p-md-5 rounded-end'>
            <div className='logo-box text-center'>{/* <Image src='./img/logo.jpg' id='logo' width='100' alt='' /> */}</div>
            <h2 className='fw-bold text-center py-3 py-md-5'>Register</h2>
            <div className='login'>
              <Form id='login'>
                <Form.Group className='mb-3'>
                  <Form.Label htmlFor='user'>User</Form.Label>
                  <Form.Control type='text' id='user' />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label htmlFor='pass'>Password</Form.Label>
                  <Form.Control type='password' id='pass' />
                </Form.Group>
                <div className='d-grid'>
                  <Button variant='primary' type='submit' id='ingresar' className='btn-sm'>
                    Log in
                  </Button>
                </div>
                <div className='mb-3'>
                  <p className='text-danger mt-2' id='mensaje'></p>
                  {/* ERRORS */}
                  <NavLink to='/login'>Log in</NavLink>
                </div>
              </Form>

              {/* LOGIN REDES SOCIALES */}

              <Container className='w-100 my-3'>
                <Row>
                  <Col>
                    <Button variant='outline-danger' className='w-100 my-1'>
                      <Row className='align-items-center'>
                        <Col xs={1} className='d-block'>
                          <Image src={googleLogo} width='24' alt='' />
                        </Col>
                        <Col xs={10} md={10} className='text-center'>
                          Log in with Google
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

export default Register;
