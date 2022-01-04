import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
	const handleLogout = () => {
		const token = localStorage.getItem("token");
		if (token) {
			localStorage.removeItem("token");
		}
	};

	return (
		<div>
			<Navbar
				fixed="top"
				scollapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark"
			>
				<Container>
					<Navbar.Brand as={Link} to="/home">
						Dev-News
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto"></Nav>
						<Nav>
							<Nav.Link as={Link} to="/home">
								Home
							</Nav.Link>
							<Nav.Link as={Link} to="/allnews">
								News
							</Nav.Link>
							<Nav.Link as={Link} to="/about">
								About
							</Nav.Link>
							<Nav.Link as={Link} to="/contact">
								Contact
							</Nav.Link>
							<Nav.Link as={Link} to="/dashboard">
								Dashboard
							</Nav.Link>
							<Nav.Link as={Link} to="/" onClick={handleLogout}>
								Logout
							</Nav.Link>
							<Link to="/login">
								<Button className="me-3">Login</Button>
							</Link>
							{/* <Link to='signup'><Button>SignUp</Button></Link> */}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
