/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { auth, googleProvider } from '../../Firebase/config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import googleLogo from '../../assets/img/google.png';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
// import styles from './GoogleButton.module.css';

const GoogleButton = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      const data = await signInWithPopup(auth, googleProvider);
      const { photoURL } = data.user;
      const { email, firstName } = data._tokenResponse;

      console.log(data);

      const idToken = await auth.currentUser.getIdToken();

      /*       const response = await axios.post('http://localhost:3001/users/login', {
        username: email,
        password: idToken,
        isFirebaseToken: true,
      });

      const { token, success } = response.data; */

      if (idToken) {
        // Procesar el token de autenticación
        localStorage.setItem('token', idToken);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('profilePhotoUrl', photoURL); // Guardar la URL en el localStorage
        setValue(email);
        navigate('/');
      } else {
        setLoginError(true); // Mostrar mensaje de error
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginError(true); // Mostrar mensaje de error
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate('/');
      }
    });

    return unsubscribe;
  }, [navigate]);

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []);

  return (
    <div>
      <Container className='w-100 my-3'>
        <Row>
          <Col>
            <Button variant='outline-danger' className='w-100 my-1' onClick={handleGoogleSignIn}>
              <Row className='align-items-center'>
                <Col xs={1} className='d-block'>
                  <Image src={googleLogo} width='24' alt='' />
                </Col>
                <Col xs={10} md={10} className='text-center'>
                  Continue with Google
                </Col>
              </Row>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GoogleButton;
