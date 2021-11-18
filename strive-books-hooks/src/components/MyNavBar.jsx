import { Navbar, NavDropdown, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const MyNavBar = () => {
  // use navigate() to programmatically change the route via code
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" expand="lg" className="mb-4 text-light">
      <Navbar.Brand href="#home" className=" text-light">
        Strive-Books
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">
            <div className="nav-link text-light">Home</div>
          </Link>
          {/* also this works, but use Link if possible in JSX */}
          {/* <div className="nav-link" onClick={() => navigate('/')}>Home</div> */}
          <Link to="/info">
            <div className="nav-link text-light">Details</div>
          </Link>
          <NavDropdown
            className="text-light"
            title="categories"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">horror</NavDropdown.Item>
            <Link to="/strive">
              <div className="dropdown-item">sci-fi</div>
            </Link>
            <NavDropdown.Item href="#action/3.3">fiction</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">non-fiction</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Button variant="outline-success" onClick={() => navigate("/register")}>
          Register
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavBar;
