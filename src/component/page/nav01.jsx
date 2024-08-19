import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import {Link} from 'react-router-dom';
import Logo from "../../Assets/logo-DRTkl0cC.png"
import Burger from "../../Assets/img/burger-bar.png" 

function Nav01(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
    
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
    return (
        <div className={"w-full h-28 bg-white flex  justify-content items-center  gap-36 sm:gap-0 sm:justify-between sm:px-1 sm:mb-[180px]"}>
            <div className={"w-[100px] h-[100px] ml-52 sm:ml-0 "}>
                <img src={Logo} alt="" />

            </div>
            <div className='hidden sm:block sm:ml-32'>
      <Button type="" onClick={showModal}>
            <img src={Burger} alt="" />
      </Button>
      <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{width: "100%", height: "100%"}}>
                <div className='w-full flex flex-col'>
                <Link to="/" className='text-[22px]'>Bosh menu</Link>
                <Link to="/biz" className='text-[22px]'>Biz Haqimizda</Link>
                <Link to="/dars" className='text-[22px]'>Kurslar</Link>
                <Link to="/dars" className='text-[22px]'>Rasmlar</Link>
                <button className={"w-[130px] h-[35px] mt-4 bg-emerald-700 text-white rounded-lg"}>Murojat uchun</button>
                </div>
      </Modal>
    </div>
            <div className={"flex gap-8 pt-4 ml-80 text-[18px] sm:ml-0 sm:hidden"}>
                <Link to="/">Bosh menu</Link>
                <Link to="/biz">Biz Haqimizda</Link>
                <Link to="/dars">Kurslar</Link>
                <Link to="/dars">Rasmlar</Link>
            </div>
            <div>
                <button className={"w-[130px] h-[35px] mt-4 bg-emerald-700 text-white rounded-lg ml-[-30px] sm:hidden"}>Murojat uchun</button>
            </div>
        </div>
    );
}

export default Nav01;