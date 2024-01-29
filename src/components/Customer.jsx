import Ava from '../assets/ava.svg';


const Customer = () => {
  return (
    <section className=" mx-0 my-[150px]">
      <div className=" w-[1200px] mx-auto">

        <h2 className=" text-[#1B2559] text-center text-4xl font-extrabold leading-[44px] mb-5">
          Customer Testimonials
        </h2>
        <h3 className="text-[#68769F] text-center text-base font-medium leading-[30px] mb-[80px]">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat <br /> commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
        </h3>

        <div className="flex gap-8">
          <div className="flex justify-between items-center gap-20 bg-[#F6F8FD] rounded-2xl py-6 px-10">

            <div className="flex flex-col gap-10  text-center">
              <div className="text-[#1B2559] text-center text-xl font-bold leading-[30px] mb-7">
                “A must needed kit for every single software arhitect. It makes your coding life easier and your final product will be blooming.”
              </div>

              <div className="flex flex-col  justify-center items-center">
                <img src={Ava} alt="ava" className="mb-4" />
                <p className=' text-[#1B2559] text-lg font-extrabold leading-7'>Tiana Schleifer</p>
                <p className=' text-[#68769F] text-xs font-semibold leading-[18px]'>CEO & Founder</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center gap-20 bg-[#F6F8FD] rounded-2xl py-6 px-10">
            <div className="flex flex-col gap-10  text-center">
              <div className="text-[#1B2559] text-center text-xl font-bold leading-[30px] mb-7">
                “A must needed kit for every single software arhitect. It makes your coding life easier and your final product will be blooming.”
              </div>

              <div className="flex flex-col  justify-center items-center">
                <img src={Ava} alt="ava" className="mb-4" />
                <p className=' text-[#1B2559] text-lg font-extrabold leading-7'>Tiana Schleifer</p>
                <p className=' text-[#68769F] text-xs font-semibold leading-[18px]'>CEO & Founder</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Customer;
