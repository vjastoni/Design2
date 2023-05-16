import React from "react";
import CardView from "../components/CardView";

function Plan() {
  return (
    <div className="w-[350px] h-[520px] bg-white rounded-md border-white border p-8 flex flex-col justify-between">
      <h1 className="text-marineBlue text-[1.6rem] font-[700]">
        Select your Plan
      </h1>
      <p className="text-coolGray">
        You have the option of monthly or <br />
        yearly billing.
      </p>
      <div className=" flex flex-col gap-4">
        <CardView
          title="Arcade"
          image="./assets/icon-arcade.svg"
          price="$9/mo"
          duration="2 months free"
        />
        <CardView
          title="Advanced"
          image="./assets/icon-advanced.svg"
          price="$12/mo"
          duration="2 months free"
        />
        <CardView
          title="Pro"
          image="./assets/icon-pro.svg"
          price="$15/mo"
          duration="2 months free"
        />
      </div>
      <div className="w-full h-[48px] bg-pastelBlue rounded-md flex flex-row justify-center items-center gap-4">
        <p className="text-marineBlue font-[600]">Monthly</p>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
        <p className="text-coolGray font-[600]">Yearly</p>
      </div>
    </div>
  );
}

export default Plan;
