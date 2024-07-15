/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LiaKeyboard } from "react-icons/lia";
import { IoLinkOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { SlCalender } from "react-icons/sl";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

function Content() {
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);

  return (
    <div>
    <div className='grid grid-cols-2 gap-4 '>
      <div className='col-span-1 ml-20 mt-20 '>
        <div className=' text-4xl mt-20 ml-15 '><h>Premium video meetings.</h> 
        <br></br>
        <h >Now free for everyone.</h>
        </div>
        <p className='text-xl mt-10 text-gray-500 ml-15'> We re-engineered the service we built for secure business meetings, Google Meet, to make it free and available for all.</p>
        <div className=" pt-10   ">
          <button  
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-15  "
            onClick={() => setShowAdditionalButtons(!showAdditionalButtons)}
          >
            New Meeting
          </button>
          
          {showAdditionalButtons && (
            <span className=" flex items-start flex-col mt-2  ">
   
              <button className=" flex items-center  hover:bg-gray-200  text-black py-2 px-4  rounded">
              <IoLinkOutline /><span className='ml-6'>Create a Meeting</span>
              </button>
              <button className=" flex items-center hover:bg-gray-200 text-black  py-2 px-4 rounded">
              <GoPlus /> <span className='ml-6'>Start a Meeting</span>
              </button>
              <button className=" flex items-center hover:bg-gray-200 text-black  py-2 px-4 rounded">
              <SlCalender /> <span className='ml-6'>Schedule a Meeting</span>
              </button>
              
            </span>

          )}
        <button className=" flex items-center  bg-gray-200 ml-48    ">
                <label className="flex items-center0   border border-slate-500  p-2 ">
                  <span>
                    <LiaKeyboard />
                  </span>
                  <input
                    type="text"
                    placeholder="Enter link or code "
                    className="ml-2 outline-none"
                  />
                </label>
                <span className="ml-3 text-slate-300">Join</span>
            
              </button>
        </div>  
        
              <p className="ml-5 mt-10 cursor-pointer"><span className="text-blue-800 hover:underline">Learn more</span> about Google meet</p>
       
      </div>

      <div className="col-span-1 mx-10 my-40">
  <div>
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="pl-20 pt-10">
          <img
            src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg"
            className="rounded-full h-44 w-44 mx-auto block"
            alt="Get a link"
          />
        </div>
        <div className="mt-8 text-center">
          <p className="text-xl tracking-tighter">Get a link you can share</p>
          <p className="text-sm">
            Click <span className="font-semibold">New meeting</span> to get a link
            you can send to people
          </p>
          <p className="text-sm">you want to meet with</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="pl-20 pt-10">
          <img
            src="https://www.gstatic.com/meet/user_edu_scheduling_light_b352efa017e4f8f1ffda43e847820322.svg"
            className="rounded-full h-44 w-44 mx-auto block"
            alt="Plan ahead"
          />
        </div>
        <div className="mt-8 text-center">
          <p className="text-xl tracking-tighter">Plan ahead</p>
          <p className="text-sm">
            Click <span className="font-semibold">New meeting</span> to schedule
            meetings in Google Calendar and send invites to participants
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="pl-20 pt-10">
          <img
            src="https://www.gstatic.com/meet/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg"
            className="rounded-full h-44 w-44 mx-auto block"
            alt="Your meeting is safe"
          />
        </div>
        <div className="mt-8 text-center">
          <p className="text-xl tracking-tighter">Your meeting is safe</p>
          <p className="text-sm">
            No one can join a meeting unless invited or admitted by the host
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</div>

    </div>
    </div>
  );
}

export default Content;
