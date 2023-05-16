import React from "react";

function CardView(props) {
  return (
    <div className="w-full h-[84px] rounded-md border border-lightGray flex flex-row items-center gap-3 p-4">
      <div>
        <img src={props.image} alt="arcade" />
      </div>
      <div className="flex flex-col">
        <p className="text-marineBlue text-[1.2rem] font-[600]">
          {props.title}
        </p>
        <p className="text-lightGray text-[1rem]">{props.price}</p>
        <p className="text-marineBlue text-[0.8rem]">
          {props.duration}
        </p>
      </div>
    </div>
  );
}

export default CardView;
