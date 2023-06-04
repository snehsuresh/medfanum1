import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom'
import Logo from './transparent-png.png'
function Topbar() {
	const navigate = useNavigate();
	return (
		<Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand>
					<img className='logo' src={Logo} href="#" onClick={() => navigate('/')} style={{ cursor: 'pointer', height: "135px", position: "fixed", top: "-40px", left: "0" }} />
				</Navbar.Brand>
				{/* <Navbar.Brand >Medfanum</Navbar.Brand> */}
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
					<Nav className="ml-auto">
						<Nav.Link onClick={() => navigate('/aboutus')} >About Us</Nav.Link>
						<Nav.Link onClick={() => navigate('/products')} >Our Products</Nav.Link>
						<Nav.Link onClick={() => navigate('/apply')} >Apply</Nav.Link>
						<NavDropdown title="Divisions" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Mumbai</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Alappuzha
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Future
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Topbar;