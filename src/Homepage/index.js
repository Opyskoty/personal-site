import React from "react";
import Reward from "react-rewards";
import { useHistory } from "react-router-dom";

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
        <button onClick={() => handleClick()}>get to know me</button>
      </Reward>
    </div>
  );
}

export default Homepage;
