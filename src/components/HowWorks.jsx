import {useState} from "react";

const HowWorks = () => {
  const [] = useState();


  return (
    <section className=" mx-0 my-[150px]">
      <div className="container w-[1200px] mx-auto">
        <h2 className="text-[#1B2559] text-center text-4xl font-extrabold leading-[44px] mb-3">
          How Horizon works?
        </h2>
        <h3 className="text-[#68769F] text-center text-base font-medium leading-[30px] mb-20">
          Tellus rutrum tellus pellentesque eu tincidunt tortor condimentum.
        </h3>

        <div className=" flex justify-between items-center">
          <div className=" flex gap-5">
            <div className="flex justify-center items-center bg-[#4318FF] text-[white] w-[48px] h-[48px] rounded-[100%]">
              <div>1</div>
            </div>
            <div className="w-[232px]">
              <h2 className=" text-[#1B2559] text-base font-bold mb-2">
                Create your Account
              </h2>
              <p className="  text-[#68769F] text-base font-medium leading-[30px]">
                Condimentum vit pellemsque habitant morbi at molestie.
              </p>
            </div>

          </div>
          <div className=" flex gap-5">
            <div className="flex justify-center items-center border text-[#4318FF] border-solid border-[#4318FF] w-[48px] h-[48px] rounded-[100%]">
              <div>2</div>
            </div>
            <div className="w-[232px]">
              <h2 className=" text-[#1B2559] text-base font-bold mb-2">
                Setup your Account
              </h2>
              <p className="  text-[#68769F] text-base font-medium leading-[30px]">
                Condimentum vit pellemsque habitant morbi at molestie.
              </p>
            </div>

          </div>
          <div className=" flex gap-5">
            <div className="flex justify-center items-center border text-[#4318FF] border-solid border-[#4318FF] w-[48px] h-[48px] rounded-[100%]">
              <div>3</div>
            </div>
            <div className="w-[232px]">
              <h2 className=" text-[#1B2559] text-base font-bold mb-2">
                Start creating with Horizon
              </h2>
              <p className="  text-[#68769F] text-base font-medium leading-[30px]">
                Condimentum vit pellemsque habitant morbi at molestie.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
