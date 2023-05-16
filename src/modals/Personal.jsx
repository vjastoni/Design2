import React from "react";

function Personal() {
  return (
    <div className="w-[350px] h-[390px] bg-white rounded-md border-white border p-8">
      <h1 className="text-marineBlue text-[1.6rem] font-[700]">
        Personal Info
      </h1>
      <p className="text-coolGray mt-2">
        Please provide your name, email <br />
        address, and phone number
      </p>
      <form className="flex flex-col gap-2">
        <div className="mt-2">
          <label for="name" className="text-marineBlue text-xs ">
            Name
          </label>
          <input
            className="w-full h-[44px] border outline-none border-lightGray rounded-md p-2 focus:border-purplishBlue "
            type="text"
            name="name"
            placeholder="eg. Stephen King"
          />
        </div>
        <div>
          <label for="email" className="text-marineBlue text-xs">
            Email
          </label>
          <input
            className="w-full h-[44px] border outline-none border-lightGray rounded-md p-2 focus:border-purplishBlue"
            type="email"
            name="email"
            placeholder="eg. StephenKing@lorem.com"
          />
        </div>
        <div>
          <label
            for="number"
            className="text-marineBlue text-xs mt-4"
          >
            Phone Number
          </label>
          <input
            className="w-full h-[44px] border outline-none border-lightGray rounded-md p-2 focus:border-purplishBlue"
            type="number"
            name="number"
            placeholder="eg. +123 456 7890"
          />
        </div>
      </form>
    </div>
  );
}

export default Personal;
