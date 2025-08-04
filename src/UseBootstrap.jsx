import { Alert, Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap"


function UseBootstrap() {
    return (
        <>
            <h1>Use in Navbar</h1>

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <h1>Use in Bootstrap and install</h1>
            <Button onClick={() => alert("This is login button")}>Login</Button>
            <Button variant="danger">SignUp</Button>
            <Button variant="success">LogOut</Button>
            <Button onClick={() => alert("this is alert button")}>Alert-Button</Button>
        </>
    )
}

export default UseBootstrap;