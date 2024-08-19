import React from "react";
import Img from "../../Assets/Frame 39297.png";
import Maths from "../../Assets/image 11.png";
import Maths1 from "../../Assets/image 12.png";
import Maths2 from "../../Assets/Group 7.png";
import Maths3 from "../../Assets/Group 7.png";
import Maths4 from "../../Assets/image 14.png";
import Talab4 from "./talab4.jsx";
function Aql3(props) {
  return (
    <div>
      <div className="w-full h-auto flex items-center justify-center flex-col gap-20 sm:mt-[1300px] sm:h-[218vh] sm:gap-0 sm:px-4 ">
        <div className="w-full flex items-center justify-center flex-col gap-2 sm:mt-[-650px] ">
          <p className={"font-bold text-[34px]"}>
            Aqliy fikrlash va har doim birinchilrdan bo’lish
          </p>
          <p className={" text-[22px]"}>
            4-6 yoshgacha bolgan bolalarning 1dan 100 gacha bolgan sonlar bilan
            tezda misollarni yechishni o’rganadilar
          </p>
        </div>
        <div className={"w-full flex items-center justify-center relative "}>
          <img src={Img} alt="" className=" sm:hidden" />
        </div>
        <div
          className={
            "absolute gap-8 z-10 flex flex-col w-[30%]  ml-[600px]  mt-[220px]  sm:ml-0 sm:mt-[700px] sm:w-full sm:px-2"
          }
        >
          <div className={"flex  gap-4 text-[16px] w-[93%]"}>
            <img
              src={Maths}
              alt=""
              className={"w-[50%] h-[40%] sm:h-[170px] sm:w-[40%]"}
            />
            <p className={"text-[14px] "}>
              <span className="font-bold">Hayoliy raqamlar bilan ishlash</span>{" "}
              <br />
              4-6 yoshgacha bolgan bolalarning 1dan 100 gacha bolgan sonlar
              bilan tezda misollarni yechishni o’rganadilar
            </p>
          </div>
          <div className={"flex  gap-4 text-[16px] w-[93%]"}>
            <img
              src={Maths1}
              alt=""
              className={"w-[50%] h-[40%] sm:h-[170px] sm:w-[40%]"}
            />
            <p className={"text-[14px] "}>
              <span className="font-bold">Rus tili</span> <br />
              rus alifbosini o’rganib o’qish va yozishni bundan tashqari rus
              tilida bemalol gaplasha olish imkoniyatini beradi
            </p>
          </div>
          <div className={"flex  gap-4 text-[16px] w-[93%]"}>
            <img
              src={Maths2}
              alt=""
              className={"w-[50%] h-[40%] sm:h-[170px] sm:w-[40%]"}
            />
            <p className={"text-[14px] "}>
              <span className="font-bold">
                {" "}
                <span className="font-bold">Ingliz tili</span> <br />
              </span>{" "}
             
              ingliz tilida sanash , ob havo, xol ahvol xar hil mavzularda
              shaxsiy fikr bildira oladigan darajada mukammal ta’lim berishF
            </p>
          </div>
          <div className={"flex  gap-4 text-[16px] w-[93%]"}>
            <img
              src={Maths4}
              alt=""
              className={"w-[120px] h-[120px] sm:h-[170px] sm:w-[40%]"}
            />
            <p className={"text-[14px]  "}>
              <span className="font-bold">Dekoratsiya</span> <br />
              bola miyyasining har tomonlama ishlashi uchun rassomchilik va (
              mehnat )darslari . siz bu darslar bilan farzandingiz yasagan
              narsalar , chizgan rasmlardan psixollogning maxsus tavsiyalarini
              olishingiz mumkun
            </p>
          </div>
        </div>
      </div>
      <Talab4 />
    </div>
  );
}

export default Aql3;
