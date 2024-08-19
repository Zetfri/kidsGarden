import React from 'react';

function Footer6(props) {
    return (
        <div>
            <div className='w-full h-[600px] flex  bg-black sm:flex-col sm:h-auto'>
                <div className='w-[50%]  pt-20 px-20 sm:w-full sm:px-10'>
                <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11444.916536747229!2d70.0707216!3d41.0215403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38afe9f27abd0e5d%3A0x5939ad18fc2dd1fd!2s%22JAJJI%20BILIMDON%22%20bog&#39;chasi!5e1!3m2!1sen!2s!4v1723736636554!5m2!1sen!2s"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className='rounded-[15px] sm:w-[300px]'
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
                </div>
                <div className="w-[50%] flex  items-start justify-start   pt-20 sm:w-full sm:flex-col sm:px-10 sm:py-10 sm:gap-5">
                    <div className='flex flex-col w-[50%] gap-5 sm:w-full '>
                    <span className='w-full h-auto flex flex-col gap-2 text-white justify-start items-start'>
                        <p className='text-[24px] '>Bizning manzilimiz</p>
                        <p className='text-[20px] mt-1'>Toshkent Viloyati</p>
                        <p className='text-[20px] '>Angren shahar</p>
                        <p className='text-[20px] '>Chotqol MFY</p>
                        <p className='text-[20px] '>Sabzazor kochasi 17 uy.</p>
                    </span>
                    <span className='w-full h-auto flex flex-col gap-2 text-white justify-start items-start'>
                        <p className='text-[24px] '>Ish kunlari :</p>
                        <p className='text-[20px] mt-1'>Dushanba - Juma: 7:30 - 18:00</p>
                        <p className='text-[20px] '>Shanba: 8:00 - 16:00</p>
                        <p className='text-[20px] '>Yakshanba: 8:00 - 16:00</p>
                    </span>
                    </div>
                    <div className='flex flex-col w-[50%] sm:w-full'>
                    <span className='w-full h-auto flex flex-col  text-white justify-start items-start'>
                        <p className='text-[24px] '>Biz bilan bog`lanish</p>
                        <a className='text-[20px] mt-3' href=''>Telofon +998901133266</a>
                        <a className='text-[20px] ' href=''>Telofon +998931883266</a>
                        <a className='text-[20px] ' href=''>Telofon +998930816378</a>
                        <a className='text-[20px] ' href=''>Mushin_Xidoyatullaev_10.06.2024</a>
                    </span>
                   
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default Footer6;