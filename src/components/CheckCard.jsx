import React from "react";

function CheckCard(props) {
  return (
    <div className="w-full h-[80px] rounded-md border border-lightGray flex flex-row items-center gap-3 p-4 justify-around">
      <input type="checkbox" />
      <div>
        <p className="text-marineBlue text-[0.9rem] font-[600]">
          {props.title}
        </p>
        <p className="text-coolGray text-[0.7rem]">
          {props.description}
        </p>
      </div>
      <div>
        <p className="text-purplishBlue text-[0.8rem]">
          {props.price}
        </p>
      </div>
    </div>
  );
}

export default CheckCard;
