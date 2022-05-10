import PropTypes from 'prop-types';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './style.scss';

function Layout({ children }) {
  return (
    <div>
      <Navbar bh="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">CurrencyBird</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/sharing">Compartir</Nav.Link>
              <Nav.Link href="/manage">Administrar</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row className="justify-content-center layout">
        <Col md="7" lg="6" xl="5" xxl="4">
          {children}
        </Col>
      </Row>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.object
};

export default Layout;
