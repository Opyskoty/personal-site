import React, { useState } from "react";
import "./Georgie.css";
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import georgie1 from "./georgie1.jpg";
import georgie2 from "./georgie2.png";
import georgie3 from "./georgie3.JPG";
import georgie4 from "./georgie4.JPG";
import georgie5 from "./georgie5.jpg";
import georgie6 from "./georgie6.jpg";
import georgie7 from "./georgie7.JPG";

const items = [
  {
    src: georgie1,
    altText: "Georgie 1",
  },
  {
    src: georgie2,
    altText: "Georgie 2",
  },
  {
    src: georgie3,
    altText: "Georgie 3",
  },
  {
    src: georgie4,
    altText: "Georgie 4",
  },
  {
    src: georgie5,
    altText: "Georgie 5",
  },
  {
    src: georgie6,
    altText: "Georgie 6",
  },
  {
    src: georgie7,
    altText: "Georgie 7",
  },
];

function Georgie() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="carouselImg"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <Container className="Georgie">
      <Row>
        <Col>
          <h3>Bonus Dog Content:</h3>
          <p>
            Although not a software developer, my dog Georgie is incredibly
            adorable and I thought that warranted having an entire page of my
            website dedicated to her. Enjoy some of her cutest moments:
          </p>
        </Col>
      </Row>
      <Row>
        <Col
          className="flexBox"
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
          }}
        >
          <Carousel
            className="carousel"
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Georgie;
