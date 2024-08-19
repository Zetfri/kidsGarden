import React from 'react';
import Img from "../../Assets/KID-01.png"
import Darslar2 from "./darslar2.jsx";
function Home1(props) {
    return (
        <div>
            <div className={"w-full h-screen flex justify-center items-center mt-24 sm:flex-col sm:mt-[-80px]"}>
                <div className={"w-[50%] h-[100%] sm:w-full"}>
                    <div className={"w-[100%] h-[100%] flex justify-center items-center flex-col px-8 gap-4"}>
                        <p className={"text-[44px] w-[98%] text-[#F20E0E] font-bold sm:w-[90%]  sm:text-[20px] sm:ml-[-50px] "}>Qanday qilib bolalarni Ingliz tili Rus tili , Mental arifmetika va boshqa darslarga
                            qiziqtirish mumkun ?</p>
                        <p className={"font-bold text-[24px] ml-[-380px] sm:ml-[-50px]"}>o’z joyingizni band qiling</p>
                        <div className={"w-[80%] ml-[-110px] flex justify-start items-center flex-wrap gap-4 sm:ml-0 sm:w-[103%]"}>
                            <button className={"w-[100px] bg-gray-200 rounded-[5px] h-[30px] font-bold hover:shadow-lg"}>1-yosh</button>
                            <button className={"w-[100px] bg-gray-200 rounded-[5px] h-[30px] font-bold hover:shadow-lg"}>2-yosh</button>
                            <button className={"w-[100px] bg-gray-200 rounded-[5px] h-[30px] font-bold hover:shadow-lg"}>3-yosh</button>
                            <button className={"w-[100px] bg-gray-200 rounded-[5px] h-[30px] font-bold hover:shadow-lg"}>4-yosh</button>
                            <button className={"w-[100px] bg-gray-200 rounded-[5px] h-[30px] font-bold hover:shadow-lg"}>5-yosh</button>
                            <button className={"w-[100px] bg-gray-200 rounded-[5px] h-[30px] font-bold hover:shadow-lg"}>6-yosh</button>
                        </div>
                        <button className={"w-[60%] h-[50px] bg-[#FF7B3A] ml-[-244px] text-lg text-white font-bold rounded-[10px] hover:bg-orange-500 active:bg-orange-600 sm:ml-[-10px] sm:w-full sm:h-[60px]"}>bo’sh joylar soni chegaralangan, shoshiling</button>
                        <p className={"w-[70%] ml-[-170px] text-lg sm:ml-0 sm:w-full sm:text-[22px]"}>oylik narx 700.000 so’m , bolalar soniga qarab <span className={"text-[#2CC84D] font-bold"}>8% dan 10% gacha</span> chegirmalar</p>
                        <button className={"text-lg text-white font-bold bg-[#2CC84D] w-[180px] h-[30px] ml-[-480px] rounded-[8px] sm:ml-[-150px]"}>xoziroq qo’shilish</button>
                    </div>
                </div>
                <div className={"w-[50%] h-[100%] sm:w-[90%] sm:ml-[-20px]"}>
                    <img src={Img} alt=""/>
                </div>
            </div>
            <Darslar2/>
        </div>
    );
}

export default Home1;