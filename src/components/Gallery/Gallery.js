import "./Gallery.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import img1 from "../../images/img1.gif";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";
import img6 from "../../images/img6.jpg";
import img7 from "../../images/img7.jpg";
import img8 from "../../images/img8.jpg";

function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery__carousel">
        <Carousel>
          <Carousel.Item>
            <img
              style={{ height: 500, width: 500, objectFit: "contain" }}
              className="d-block w-100 gallery__img1"
              src={img1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: 500, width: 500, objectFit: "contain" }}
              className="d-block w-100 gallery__img2"
              src={img2}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: 500, width: 500, objectFit: "contain" }}
              className="d-block w-100"
              src={img3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: 500, width: 500, objectFit: "contain" }}
              className="d-block w-100"
              src={img4}
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: 500, width: 500, objectFit: "contain" }}
              className="d-block w-100 gallery__img1"
              src={img5}
              alt="Fifth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: 500, width: 500, objectFit: "contain" }}
              className="d-block w-100 gallery__img2"
              src={img6}
              alt="Sixth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: 500, width: 500, objectFit: "contain" }}
              className="d-block w-100"
              src={img7}
              alt="Seventh slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: 500, width: 500, objectFit: "contain" }}
              className="d-block w-100"
              src={img8}
              alt="Eighth slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="gallery__videoContainer">
        {/* eslint-disable-next-line */}
        <iframe
          className="gallery__video"
          width="75%" // 727
          height="409" // 409
          src="https://www.youtube.com/embed/49HTIoCccDY"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
        ></iframe>
      </div>
    </div>
  );
}

export default Gallery;
