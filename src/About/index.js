import React from "react";
import { useHistory } from "react-router-dom";
import "./About.css";
import {
  Container,
  Row,
  Col,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import linkedImage from "./LinkedIn.jpg";
import microblog from "./Microblog.png";
import color from "./Color.png";
import warbler from "./warbler.png";
import Reward from "react-rewards";
import skills from "./skills";

function About() {
  let reward;
  let history = useHistory();

  const handleClick = (url) => {
    reward.rewardMe();
    setTimeout(function () {
      history.push(url);
    }, 1200);
  };

  return (
    <Container className="About">
      <Row>
        <Col
          md="8"
          className="flexBox"
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
          }}
        >
          <h3>About Me</h3>
          <p>
            I am a full stack software engineer based in SF with a passion for
            React and minimalist designs. I have spent the past few years
            working as an Operations specialist in the tech world, but after
            writing a few sql queries I realized that coding is awesome! This
            led me to self-teach myself some Javascript and eventually complete
            Rithm School's full-stack web development program.
          </p>
          <div>
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
          </div>
          <h4>Things I've Built:</h4>
          <div className="projects">
          <div className="font-italic click">
              click on the icons to find out more
            </div>
            <img
              src={microblog}
              alt="microblog"
              className="microblog"
              type="button"
              id="PopoverLegacy1"
            ></img>
            <UncontrolledPopover
            key="1"
              placement="top"
              trigger="legacy"
              target="PopoverLegacy1"
            >
              <PopoverHeader>MicroBlog</PopoverHeader>
              <PopoverBody>
                A blogging site where users can create, delete, and edit posts,
                as well as vote and comment on posts. Built using React, Redux,
                and PostgreSQL{" "}
                <a
                  href="https://microblog-op.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/Opyskoty/microblog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </PopoverBody>
            </UncontrolledPopover>
            <img
              src={warbler}
              alt="warbler"
              className="warbler"
              type="button"
              id="PopoverLegacy2"
            ></img>
            <UncontrolledPopover
              placement="top"
              trigger="legacy"
              target="PopoverLegacy2"
            >
              <PopoverHeader>Warbler</PopoverHeader>
              <PopoverBody>
                A Twitter clone built using Python, Flask, and PostgreSQL
                <a
                  href="https://github.com/Opyskoty/warbler"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  GitHub
                </a>
              </PopoverBody>
            </UncontrolledPopover>
            <img
              src={color}
              alt="color"
              className="color"
              type="button"
              id="PopoverLegacy3"
            ></img>
            <UncontrolledPopover
              placement="top"
              trigger="legacy"
              target="PopoverLegacy3"
            >
              <PopoverHeader>RGB Color Game</PopoverHeader>
              <PopoverBody>
                Mini game that generates a random RGB code. Objective of the
                game is to find the square with the background color that
                matches the code! Built using jQuery, Bootstrap, HTML and CSS
                <a
                  href="https://opyskoty.github.io/color-game/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Demo
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/Opyskoty/color-game"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </PopoverBody>
            </UncontrolledPopover>
          </div>
        </Col>
        <Col
          md="4"
          className="flexBox"
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
          }}
        >
          <img className="linkedIn" src={linkedImage} alt="Olivia" />
          <div>
            {skills.map((s) => (
              <React.Fragment key={s.id}>
                <span className="skills">{s.skill}</span>{" "}
              </React.Fragment>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default About;
