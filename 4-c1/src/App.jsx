import './App.css';
import React from 'react';

function App() {

  const [score,setScore] = React.useState(76);
  const [wicket,setWicket] = React.useState(2);
  const [ball,setBall] = React.useState(50);

  const handleChange = (item,val) => {
    if (score > 100) {
      return;
    }
    if (item === "score" && score+val <= 100) {
      setScore(score+val);
    } else if (item === "wicket" && wicket+val < 13) {
      setWicket(wicket+val);
    } else if (item === "ball") {
      setBall(ball+val);
    } else if (item === "score" && score+val > 100) {
      document.getElementsByClassName("status")[0].textContent = "India Won";
      setScore(score+val);
    }
  }

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              String(Math.floor(ball/6)) + "." + String(ball%6)
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button onClick={() => handleChange("score",1)} className="addScore1">Add 1</button>
        <button onClick={() => handleChange("score",4)} className="addScore4">Add 4</button>
        <button onClick={() => handleChange("score",6)} className="addScore6">Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={() => handleChange("wicket",1)} >Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={() => handleChange("ball",1)} >Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      <h1 className='status'></h1>
    </div>
  );
}

export default App;
