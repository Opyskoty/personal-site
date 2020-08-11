import React from "react";
import { useHistory } from "react-router-dom";
import "./About.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Image from "./LinkedIn.jpg";
import Reward from "react-rewards";

function About() {
  let reward;
  let history = useHistory();

  function handleClick(url) {
    reward.rewardMe();
    setTimeout(function () {
      history.push(url);
    }, 1200);
  }

  return (
    <Container className="About">
      <Row>
        <Col xs="8" className="align-items-center">
          <h3>About Me</h3>
          <p>
            I am a full stack software engineer based in SF with a passion for
            React and minimalist designs. I have spent the past few years
            working as an Operations specialist in the tech world, but after
            writing a few sql queries I realized that coding is awesome! This
            led me to self-teach myself some Javascript and eventually complete
            Rithm School's full-stack web development program.
          </p>
          <p>
            When I'm not coding, you can find me hanging out with my
            <Reward
              ref={(ref) => {
                reward = ref;
              }}
              type="confetti"
              config={{ springAnimation: false }}
            >
              <Link to="#" onClick={() => handleClick("/georgie")}>
                dog
              </Link>
              , attempting to cook, or hiking/running around Northern
              California.
            </Reward>
          </p>

          <div className="projects">
            <h4>Things I've built:</h4>
          </div>
        </Col>
        <Col xs="4">
          <img src={Image} alt="Olivia" />
          <div>
            <span>javascript</span> <span>react</span> <span>node</span>{" "}
            <span>redux</span> <span>express</span> <span>python</span>{" "}
            <span>flask</span> <span>sql</span> <span>html5</span>{" "}
            <span>css</span> <span>postgresql</span> <span>jquery</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default About;
