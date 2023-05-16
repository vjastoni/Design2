import React from "react";

function Thankyou() {
  return (
    <div className="w-[350px] h-[360px] gap-1 bg-white rounded-md border-white border p-8 flex flex-col justify-center items-center">
      <img
        className="w-14 h-14"
        src="./assets/icon-thank-you.svg"
        alt="thank you"
      />
      <h1 className="text-marineBlue text-[1.5rem] font-[800]">
        Thank you!
      </h1>
      <p className="text-coolGray text-center text-[0.94rem] w-[100%] leading-7">
        Thanks for confirming your subscription! We hope you have fun
        using our platform. If you ever need support, please feel free
        to email us at support@loremgaming.com.
      </p>
    </div>
  );
}

export default Thankyou;
