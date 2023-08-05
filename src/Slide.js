import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'; // Make sure to import the CSS file with your styles

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2wbBAhZSlOv9an-vBMdaw_Q9Lur_5rGiOIw&usqp=CAU"
          alt="First slide"
          style={{ height: '60vh' }}
        />
        <Carousel.Caption>
          <h1>Empowering Society Through Science</h1>
          <h5>Food lab is one point solution for all food safety needs.</h5>
          <button className="carousel-button">Explore More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdpnJ1Osj7pL1dp56-9rkExWAb4WWBrmGiA&usqp=CAU"
          alt="Second slide"
          style={{ height: '60vh' }}
        />
        <Carousel.Caption>
          <h1>Empowering Society Through Science</h1>
          <h5>Food lab is one point solution for all food safety needs.</h5>
          <button className="carousel-button">Explore More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90yFCVjKom93NwXTh5V08ntjOq2X7OWNc1A&usqp=CAU"
          alt="Third slide"
          style={{ height: '60vh' }}
        />
        <Carousel.Caption>
          <h1>Empowering Society Through Science</h1>
          <h5>
          Food lab is one point solution for all food safety needs.
          </h5>
          <button className="carousel-button">Explore More</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
