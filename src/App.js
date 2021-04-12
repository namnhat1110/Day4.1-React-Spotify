import { Nav, Navbar, Button, Image } from 'react-bootstrap';
import './App.css';

// 1. Define new component

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <img
        src="https://image.flaticon.com/icons/png/512/49/49646.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Premium</Nav.Link>
          <Nav.Link href="#">Help</Nav.Link>
          <Nav.Link href="#">Download</Nav.Link>
          <Nav.Link href="#">Sign up</Nav.Link>
          <Nav.Link href="#">Log in</Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  )
}
// Render it


function MainContent() {
  return (
    <div class="main">
      <h1>Music for everyone</h1>
      <p>Millions of songs. No Credit Card Needed</p>
      <Button>Get Spotify Free</Button>
    </div>
  )
}

function SubContent() {
  return (
    <div class="sub">
      <div class="row">
        <div class="col-3">
          <Image src="https://i.pinimg.com/originals/f0/5c/bc/f05cbc8c0f8b075d2b4f1f68fee49649.jpg" style={{ height: 100 }} rounded />
          <h2>Spotify</h2>
        </div>
        <div class="col-2">
          <h5>Company</h5>
          <p>About</p>
          <p>Jobs</p>
          <p>For the Record</p>
        </div>
        <div class="col-2">
          <h5>Communities</h5>
          <p>For Artists</p>
          <p>Developers</p>
          <p>Brands</p>
          <p>Investors</p>
          <p>Vendors</p>
        </div>
        <div class="col-2">
          <h5>Useful Links</h5>
          <p>Help</p>
          <p>Web Player</p>
          <p>Free Mobile App</p>
        </div>
        <div class="col-3">5</div>
      </div>
    </div>
  )
}

function FooterContent() {
  return (
    <div class="footer">
      <div class="row">
        <div class="col-3">Legal</div>
        <div class="col-1">Privacy Center</div>
        <div class="col-1">Privacy Policy</div>
        <div class="col-1">Cookies</div>
        <div class="col-1">About Ads</div>
        <div class="col-5 right-footer">Vietnam</div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <MainContent />
      <SubContent />
      <FooterContent />
    </div>
  );
}

export default App;
