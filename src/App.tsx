import "./App.css";
import { useState } from "react";

// I IMPORT THE DIFFERENT COMPONENTS I NEED FOR THE LAYOUR
import { TitleApp } from "./Components/TitleApp";

type stateChallengeType = {
  challenge: string;
  setChallenge: any;
};

const StateYourChallenge = ({
  challenge,
  setChallenge,
}: stateChallengeType) => {
  return (
    <>
      <h2>
        {challenge.length > 0 ? (
          <>
            Your challenge is <span style={{ color: "red" }}>{challenge} </span>
          </>
        ) : (
          <>State your challenge</>
        )}
      </h2>
      <input
        type="text"
        onChange={(event) => {
          setChallenge(event.target.value);
        }}
      />
    </>
  );
};

const ListAttributes = () => {
  return (
    <div
      style={{
        height: 200,
        marginTop: 30,
        border: "1px solid black",
        display: "flex",
        padding: 20,
        justifyContent: "center",
      }}
    >
      <textarea
        style={{ height: "50%", marginTop: 30, marginRight: 10 }}
      ></textarea>
      <textarea
        style={{ height: "50%", marginTop: 30, marginRight: 10 }}
      ></textarea>{" "}
      <textarea
        style={{ height: "50%", marginTop: 30, marginRight: 10 }}
      ></textarea>{" "}
      <textarea
        style={{ height: "50%", marginTop: 30, marginRight: 10 }}
      ></textarea>
    </div>
  );
};

const WhyThisWay = () => {
  return (
    <div
      style={{
        border: "1px solid black",
        height: 200,
        marginTop: 30,
        display: "flex",
        padding: 20,
        justifyContent: "center",
      }}
    >
      <textarea
        style={{ height: "50%", marginTop: 30, marginRight: 10 }}
      ></textarea>{" "}
      <textarea
        style={{ height: "50%", marginTop: 30, marginRight: 10 }}
      ></textarea>{" "}
      <textarea
        style={{ height: "50%", marginTop: 30, marginRight: 10 }}
      ></textarea>{" "}
      <textarea
        style={{ height: "50%", marginTop: 30, marginRight: 10 }}
      ></textarea>
    </div>
  );
};
function App() {
  const [challenge, setChallenge] = useState("");
  const [attributes, listAttributes] = useState({});
  return (
    <div className="App">
      <TitleApp />
      <StateYourChallenge challenge={challenge} setChallenge={setChallenge} />
      <h2>List attributes</h2>
      <ListAttributes />
      <h2>Why does this have to be this way?</h2>
      <WhyThisWay />
    </div>
  );
}

export default App;
