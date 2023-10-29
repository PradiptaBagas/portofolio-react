    import { Container, Row, Col } from "react-bootstrap";
    import logo from "../assets/img/logo.png";
    import instagram1 from '../assets/img/instagram.png';
    import github2 from '../assets/img/github.png';

    export const Footer = () => {
    return (
        <footer className="footer" id="footer">
        <Container>
            <Row className="align-items-center">
            <Col size={12} sm={6}>
                <img src={logo} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
                <div className="social-icon">
                <a href="#"><img src={instagram1} alt="Icon" /></a>
                <a href="#"><img src={github2} alt="Icon" /></a>
                </div>
                <p>Copyright 2023. All Rights Reserved</p>
            </Col>
            </Row>
        </Container>
        </footer>
    )
    }
