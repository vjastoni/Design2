import "./App.css";
import CircleSelector from "./components/CircleSelector";
import MainButton from "./components/MainButton";
import React, { useState } from "react";
import Plan from "./modals/Plan";
import Addons from "./modals/Addons";
import Finishing from "./modals/Finishing";
import Thankyou from "./modals/Thankyou";
import Personal from "./modals/Personal";

function App() {
  const [showModal, setShowModal] = useState(1);
  let content;
  switch (showModal) {
    case 1:
      content = <Personal />;
      break;
    case 2:
      content = <Plan />;
      break;
    case 3:
      content = <Addons />;
      break;
    case 4:
      content = <Finishing />;
      break;
    case 5:
      content = <Thankyou />;
      break;
    default:
      setShowModal(1);
      break;
  }
  return (
    <div className="w-screen h-screen bg-pastelBlue flex flex-col justify-between overflow-hidden">
      <img
        className="w-screen relative"
        src="./assets/bgMobile.svg"
        alt="bg"
      />
      <div className="absolute top-9">
        <div className="flex flex-row gap-4 justify-center w-screen">
          <CircleSelector active={showModal === 1}>1</CircleSelector>
          <CircleSelector active={showModal === 2}>2</CircleSelector>
          <CircleSelector active={showModal === 3}>3</CircleSelector>
          <CircleSelector active={showModal === 4}>4</CircleSelector>
        </div>
      </div>

      {showModal && (
        <div className="w-screen h-[600px] flex absolute justify-center mt-[100px] overflow-hidden">
          {content}
        </div>
      )}
      <div className="w-screen h-20 bg-white flex justify-between flex-row pr-4 pl-4 items-center relative">
        {showModal > 1 && (
          <button onClick={() => setShowModal(showModal - 1)}>
            Go Back
          </button>
        )}

        <MainButton
          onClick={() => {
            setShowModal(showModal + 1);
          }}
        >
          Next Step
        </MainButton>
      </div>
    </div>
  );
}

export default App;
