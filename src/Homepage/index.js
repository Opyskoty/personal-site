import React from "react";
import Reward from "react-rewards";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import "./Homepage.css";

function Homepage() {
  let history = useHistory();
  let reward;
  function handleClick() {
    reward.rewardMe();
    setTimeout(function () {
      history.push("/about");
    }, 2500);
  }
  return (
    <div className="Homepage">
      <div>Hi! I'm Olivia</div>
      <div>Operations specialist turned software engineer</div>
      <Reward
        ref={(ref) => {
          reward = ref;
        }}
        type="memphis"
      >
        <Button color="link" onClick={() => handleClick()}>
          get to know me
        </Button>
      </Reward>
    </div>
  );
}

export default Homepage;
