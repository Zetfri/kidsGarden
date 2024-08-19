import React from "react";
import Img from "../../Assets/img/trophy-ded1bd4586a5f33ae95da5d6efe68f97 1.png";
import Frame from "../../Assets/img/Frame 39286.png";
import Frame1 from "../../Assets/img/Frame 39289.png";
import Vector from "../../Assets/img/Vector.png";
import Group from "../../Assets/img/Group.png";
import Group1 from "../../Assets/img/Group (1).png";
import Group2 from "../../Assets/img/Group (2).png";
import Footer6 from "./footer6";


const Angren5 = () => {
  return (
    <div>
      <div className="w-full h-auto my-20 mt-52 sm:mt-[-400px] sm:h-screen sm:mb-[0px]">
        <div className="w-[88%] mx-auto  bg-[#FFF0CB] relative  pt-10 rounded-[20px] flex justify-center flex-col items-center  text-center gap-4 sm:w-full">
          <img src={Img} alt="" className="w-[100px] mb-[-10px]" />
          <p className="text-[25.07px] font-extrabold w-[300px] sm:w-full text-center text-[#FE9611] sm:absolute sm:z-20">
            Angren JAJJI_BILIMDON_BOG`CHASI
          </p>
          <div className="absolute z-10   right-10 flex flex-col sm:hidden">
            <img src={Group} alt="" className="w-[120px] ml-10" />
            <img src={Vector} alt="" className="mt-[-100px]" />
          </div>
        </div>
        <div className="w-[88%] h-[720px] mt-[-106px]  flex relative flex-col justify-start pt-40 items-center bg-[#FFF0CB] mx-auto sm:w-full">
          <div className="mt-10 flex w-full sm:flex-col sm:gap-5">
            <div className="w-[50%] flex justify-center items-center sm:w-[100%] sm:px-4">
              <img src={Frame1} alt="" />
            </div>
            <div className="w-[50%] flex justify-center items-center sm:w-[100%] sm:px-4">
              <img src={Frame} alt="" />
            </div>
            <div className="absolute z-10   bottom-2 left-5 flex sm:hidden">
              <img src={Group1} alt="" className=" w-[80px] h-[80px] mt-20" />
              <img src={Group2} alt="" className="mt-[140px] w-[12px] h-[42px] " />
            </div>
          </div>
        </div>
      </div>
      <Footer6/>
    </div>
  );
};

export default Angren5;
