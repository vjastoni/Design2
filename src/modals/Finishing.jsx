import React from "react";

function Finishing() {
  return (
    <div className="w-[350px] h-[360px] bg-white rounded-md border-white border p-8 flex flex-col justify-between">
      <h1 className="text-marineBlue text-[1.6rem] font-[700]">
        Finishing up
      </h1>
      <p className="text-coolGray">
        Double-check everything looks OK <br />
        before confirming.
      </p>
      <div className=" flex flex-col gap-4 mt-2">
        <div className="bg-pastelBlue w-full h-[140px] rounded-md gap-2 p-3">
          <p className="text-marineBlue text-[1rem] font-[600]">
            Arcade (Monthly)
          </p>
          <div className="flex flex-row justify-between">
            <p className="underline text-coolGray text-[0.9rem]">
              Change
            </p>
            <p className="text-marineBlue text-[0.9rem]">$90/yr</p>
          </div>
          <hr />
          <div className="flex flex-row justify-between">
            <p className=" text-coolGray text-[0.9rem]">
              Online Service
            </p>
            <p className="text-marineBlue text-[0.9rem]">$10/yr</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className=" text-coolGray text-[0.9rem]">
              Larger Storage
            </p>
            <p className="text-marineBlue text-[0.9rem]">$20/yr</p>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <p className=" text-coolGray text-[0.9rem]">
            Total (per year)
          </p>
          <p className="text-purplishBlue font-[700]">$120/yr</p>
        </div>
      </div>
    </div>
  );
}

export default Finishing;
