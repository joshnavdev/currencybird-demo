import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import backendApi from '../../apis/backend.api';
import useAPIError from '../../commons/hooks/useAPIError';
import LinearLoader from '../../components/LinearLoader/LinearLoader';
import './sharing.css';

function Sharing() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);
  const { addError } = useAPIError();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLink('');
    const form = event.currentTarget;

    if (form.checkValidity() === true) {
      try {
        setLoading(true);
        const { data } = await backendApi.createInvitation(email, name);
        setLink(generateLink(data.code));
        addError('Se generó el enlace correctamente, compartelo!!', 200, 'success');
        resetStates();
      } catch (err) {
        setLoading(false);
        addError('Algo salio mal', err.response.status);
        console.error(err);
      }
      return;
    }

    setValidated(true);
  };

  const resetStates = () => {
    setEmail('');
    setName('');
    setValidated(false);
    setLoading(false);
  };

  const generateLink = (code) => {
    return `/register/invite/${code}`;
  };

  return (
    <Container className="mt-3">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <Form.Group as={Col}>
            <Form.Control
              required
              type="email"
              placeholder="Ingresar tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingrese su email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Control
              required
              type="text"
              placeholder="Nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Form.Control.Feedback type="invalid">
              Por favor ingrese su nombre.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        {loading ? <LinearLoader /> : <hr className="line" />}
        <Row className="justify-content-center">
          <Col xs="6" lg="5" className="d-grid">
            <Button disabled={loading} type="submit">
              COMPARTIR
            </Button>
          </Col>
        </Row>
      </Form>
      {link && (
        <Row className="mt-3 text-center">
          <Link to={link}>{`${window.location.origin}${link}`}</Link>
        </Row>
      )}
    </Container>
  );
}

export default Sharing;
