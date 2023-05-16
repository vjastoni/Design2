import React from "react";

function CircleSelector(props) {
  return (
    <>
      {props.active ? (
        <CircleActive>{props.children}</CircleActive>
      ) : (
        <Circle>{props.children}</Circle>
      )}
    </>
  );
}

function Circle(props) {
  return (
    <div className="w-10 h-10 rounded-full border-white text-white border flex justify-center items-center font-ubuntu">
      {props.children}
    </div>
  );
}

function CircleActive(props) {
  return (
    <div className="w-10 h-10 rounded-full bg-white border-white text-marineBlue border flex justify-center items-center font-ubuntu">
      {props.children}
    </div>
  );
}

export default CircleSelector;
