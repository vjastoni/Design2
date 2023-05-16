import React from "react";
import CheckCard from "../components/CheckCard";

function Addons() {
  return (
    <div className="w-[350px] h-[450px] bg-white rounded-md border-white border p-8 flex flex-col justify-between">
      <h1 className="text-marineBlue text-[1.6rem] font-[700]">
        Select your Plan
      </h1>
      <p className="text-coolGray">
        You have the option of monthly or <br />
        yearly billing.
      </p>

      <div className=" flex flex-col gap-4 mt-2">
        <CheckCard
          title="Online Service"
          description="Access to multiplayer games"
          price="+$1/mo"
        />
        <CheckCard
          title="Larger Storage"
          description="Extra 1TB of cloud save"
          price="+$2/mo"
        />
        <CheckCard
          title="Customizable Profile"
          description="Custom theme on your profile"
          price="+$2/mo"
        />
      </div>
    </div>
  );
}

export default Addons;
