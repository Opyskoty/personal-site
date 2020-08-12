import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./About.css";
import {
  Container,
  Row,
  Col,
  Popover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import linkedImage from "./LinkedIn.jpg";
import microblog from "./Microblog.png";
import warbler from "./warbler.png";
import Reward from "react-rewards";

function About() {
  let reward;
  let history = useHistory();
  const [popover1Open, setPopover1Open] = useState(false);
  const [popover2Open, setPopover2Open] = useState(false);

  const toggle = (target) => {
    if (target === "Popover1") {
      setPopover1Open(!popover1Open);
    } else if (target === "Popover2") {
      setPopover2Open(!popover2Open);
    }
  };

  function handleClick(url) {
    reward.rewardMe();
    setTimeout(function () {
      history.push(url);
    }, 1200);
  }

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
          <div>
            <img
              src={microblog}
              alt="microblog"
              className="microblog"
              type="button"
              id="Popover1"
            ></img>
            <Popover
              placement="top"
              isOpen={popover1Open}
              target="Popover1"
              toggle={() => toggle("Popover1")}
            >
              <PopoverHeader>MicroBlog</PopoverHeader>
              <PopoverBody>
                a blogging site where users can create, delete, and edit posts,
                as well as vote and comment on posts. Built using React, Redux,
                and PostgreSQL{" "}
                <a href="https://microblog-op.me/" target="blank">
                  Demo
                </a>{" "}
                |{" "}
                <a href="https://github.com/Opyskoty/microblog" target="blank">
                  GitHub
                </a>
              </PopoverBody>
            </Popover>
            <img
              src={warbler}
              alt="warbler"
              className="warbler"
              type="button"
              id="Popover2"
            ></img>
            <Popover
              placement="top"
              isOpen={popover2Open}
              target="Popover2"
              toggle={() => toggle("Popover2")}
            >
              <PopoverHeader>Warbler</PopoverHeader>
              <PopoverBody>
                a Twitter clone built using Python, Flask, and PostgreSQL
                <a href="https://github.com/Opyskoty/warbler" target="blank">
                  {" "}
                  GitHub
                </a>
              </PopoverBody>
            </Popover>
            <img
              src={microblog}
              alt="microblog"
              className="microblog"
              type="button"
              id="Popover1"
            ></img>
            <Popover
              placement="top"
              isOpen={popover1Open}
              target="Popover1"
              toggle={() => toggle("Popover1")}
            >
              <PopoverHeader>MicroBlog</PopoverHeader>
              <PopoverBody>
                a blogging site where users can create, delete, and edit posts,
                as well as vote and comment on posts. Built using React, Redux,
                and PostgreSQL{" "}
                <a href="https://microblog-op.me/" target="blank">
                  Demo
                </a>{" "}
                |{" "}
                <a href="https://github.com/Opyskoty/microblog" target="blank">
                  GitHub
                </a>
              </PopoverBody>
            </Popover>
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
