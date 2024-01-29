import Retangle from '../assets/Rectangle.png'
import Icon from '../assets/icon.svg'
import Phone from '../assets/phone.svg'
import {useRef} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MainSection = () => {

  const container = useRef();

  useGSAP(() => {
    // gsap code here...
    gsap.to(".phone", {rotation: "-=360"});

  }, { scope: container });

  return (
    <section>
      <div ref={container} className="w-[1200px] flex justify-between items-center mx-auto">
        
        <div className=" w-[600px] ">
          <div className="flex gap-3 mb-6">
            <img src={Icon} alt="icon" />
            <h1 className='text-[#4318FF] font-bold leading-5 tracking-[3.08px]'>TRENDIEST TAILWIND TEMPLATES</h1>
          </div>

          <h2 className="text-[#1B2559] text-6xl font-extrabold leading-[72px] mb-6">
            Take your website to the next level with Horizon UI
          </h2>

          <p className=' text-[#68769F] text-base font-medium leading-[30px] w-[430px] mb-7'>
            Save hundreds of hours trying to create and develop a dashboard from scratch. The fastest, most responsive & trendiest dashboard is here. Seriously.
          </p>

          <div className='flex gap-10 items-center'>
            <button className='text-white font-bold leading-6 bg-[#4318FF] px-7 py-4 rounded-[10px]'>Get started now</button>
            <button className='flex gap-2'>
              <img src={Phone} className='phone' alt="phone" /><span>Book a free call</span>
            </button>
          </div>
        </div>

        <div className="Img">
          <img src={Retangle} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
