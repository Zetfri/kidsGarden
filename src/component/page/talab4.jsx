import React from "react";
import Img from "../../Assets/MacBook Pro 14_ - 5 (1).png";
import Frame1 from "../../Assets/img/Frame 17 (1).png";
import Frame2 from "../../Assets/img/Frame 17 (2).png";
import Frame from "../../Assets/img/Frame 17.png";
import Angren5 from "./angren5";

function Talab4(props) {
  return (
    <div>
        <div>
      <div className={"w-full h-screen  relative mt-10 sm:mt-10 sm:mb-96"}>
        <img src={Img} alt="" className="absolute z-0 sm:w-full sm:h-[600px]" />
        <div className="absolute z-10 w-full  h-full flex flex-col  pl-[600px] pt-24 sm:pl-5">
          <h1 className="text-[32px] font-bold">O’z talabingizni yozing</h1>
          <p className="text-[24px] font-bold mt-10">
            1. Birinchi bo’lib , farzandingizning yoshi va guruhini tanlang
          </p>
          <p className="text-[20px] font-bold mt-4">
            Bu savol talab qilinadi. *
          </p>
          <div className="flex justify-start items-start gap-5 mt-6">
            <div className="card w-[23%] bg-white rounded-[10px] h-auto px-2 py-8 flex flex-col justify-center items-center">
              <img src={Frame} alt="" className="border-[2.3px] rounded-full"/>
              <h1 className="text-[30px] font-bold">Yosh</h1>
              <p className="text-[20px] font-bold">1-2</p>
            </div>
            <div className="card w-[23%] bg-white rounded-[10px] h-auto px-2 py-8 flex flex-col justify-center items-center">
              <img src={Frame1} alt="" className="border-[2.3px] rounded-full"/>
              <h1 className="text-[30px] font-bold">Yosh</h1>
              <p className="text-[20px] font-bold">3-4</p>
            </div>
            <div className="card w-[23%] bg-white rounded-[10px] h-auto px-2 py-8 flex flex-col justify-center items-center">
              <img src={Frame2} alt="" className="border-[4px] rounded-full"/>
              <h1 className="text-[30px] font-bold">Yosh</h1>
              <p className="text-[20px] font-bold">5-6</p>
            </div>
          </div>
        </div>
      </div>
      <Angren5/>
    </div>
    

    </div>
  );
}

export default Talab4;
