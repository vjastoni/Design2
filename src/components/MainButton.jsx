import React from "react";

function MainButton(props) {
  return (
    <button
      onClick={props.onClick}
      className="w-[100px] absolute right-4 rounded-md h-10 text-white bg-marineBlue"
    >
      {props.children}
    </button>
  );
}

export default MainButton;
