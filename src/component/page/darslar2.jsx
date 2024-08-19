import React from 'react';
import Book from "../../Assets/image 17.png"
import Book1 from "../../Assets/image 18.png"
import Book2 from "../../Assets/image 5.png"
import Aql1 from "../../Assets/KID 02-01.png"
import Aql from "../page/aql3.jsx"
function Darslar2(props) {
    return (
        <div>
            <div className={"w-full h-[100vh] flex items-start flex-col gap-20 mt-20 px-5 "}>
                <div className={"w-full h-auto"}>
                    <p className={"text-[#2CC84D] text-[42px] w-[56%] ml-96 font-bold sm:ml-0 sm:text-[24px] sm:mb-20 sm:w-full sm:px-8"}>Darslarni tez va mukammal
                        o’rganish Eng yaxshi tarbiyachi Hammasi bizda</p>
                </div>
                <div className={"w-full h-auto flex justify-center items-center gap-14 sm:flex-col sm:px-5"}>
                    <div
                        className={"w-[23.5%] h-[380px] bg-[#FCE4EC] rounded-[30px] px-4 py-6 flex justify-center items-center gap-4 flex-col sm:w-full"}>
                        <div className={" w-full flex"}>
                            <img src={Book} alt="" className={"mt-2"}/>
                            <p className={"text-[15px] font-bold mt-4"}>
                                Professional dasturlar bilan bolalarning ta’lim olishiga ko’maklashish
                            </p>
                        </div>
                        <p className={"text-[16px] font-bold w-[90%]"}>ixtisoslashgan darslar 4-yoshdan 6 yoshgacha</p>
                        <p className={"text-[16px] font-bold w-[90%]"}>bolalar zerikmasligi va tez organishi uchun ,
                            ularning qiziqishlariga qarab yo’naltirish</p>
                        <p className={"text-[16px] font-bold w-[90%]"}>
                            har bir o’rganuvchi uchun maxsus ta’lim asboblari
                        </p>
                    </div>
                    <div
                        className={"w-[23.5%] h-[380px] bg-[#FFF0CB] rounded-[30px] px-4 py-6 flex justify-center items-center gap-4 flex-col sm:w-full"}>
                        <div className={" w-full flex"}>
                            <img src={Book1} alt="" className={"mt-2"}/>
                            <p className={"text-[16px] font-bold mt-8"}>
                                1-yoshdan 4 -yoshgacha shaxsiy rivojlanish
                            </p>
                        </div>
                        <p className={"text-[16px] font-bold w-[90%]"}>bolalar xotirasini kuchaytirish uchun maxsus
                            o’yinchoqlar</p>
                        <p className={"text-[16px] font-bold w-[90%]"}>kundalik o’rgangan narsalarini so’rash , ularga
                            qiziqish bildirish</p>
                        <p className={"text-[16px] font-bold w-[90%]"}>
                            bolalarga mativatsiya berish uchun sayoxatlar
                        </p>
                    </div>
                    <div
                        className={"w-[23.5%] h-[380px] bg-[#EAF1FE] rounded-[30px] px-4 py-6 flex justify-center items-center gap-4 flex-col sm:w-full"}>
                        <div className={" w-full flex"}>
                            <img src={Book2} alt="" className={"mt-2"}/>
                            <p className={"text-[16px] font-bold mt-8"}>
                                Maxsus Mental Arifmetika darsligi
                            </p>
                        </div>
                        <p className={"text-[16px] font-bold w-[90%]"}>maktab talimidan oldin ularni varoqda emas
                            miyyalarida</p>
                        <p className={"text-[16px] font-bold w-[90%]"}>murakkab sonlarni yechishga tayyorlash</p>
                        <p className={"text-[16px] font-bold w-[90%]"}>
                            bolalar aqliy o’sishi uchun ular bilan aloxida o’tkiziladigan darslar </p>
                    </div>
                    <img src={Aql1} alt="" className={"w-[350px]"}/>
                </div>
            </div>
            <Aql/>
        </div>
    );
}

export default Darslar2;