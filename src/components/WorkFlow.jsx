import Thunder from '../assets/thunder.png'


const WorkFLow = () => {
  return (
    <section className=" mx-0 my-[150px]">
      <div className="container w-[1200px] mx-auto flex gap-20 items-center justify-between">
        <div className="w-[515px]">
          <h2 className="text-[#1B2559] text-3xl font-extrabold leading-[38px] mb-2">
            Boost your workflow with Horizon
          </h2>
          <h3 className="text-[#68769F] text-base font-medium leading-[30px] mb-10">
            Urna duis convallis convallis tellus interdum velit laoreet pentesque aliquam tortor consequat porta.
          </h3>

          <div className="grid grid-cols-2 gap-[30px_35px] ">

            <div className="w-[237px]">
              <h2 className="text-[#1B2559] text-4xl font-extrabold leading-[44px]">
                340+
              </h2>
              <h3 className=" text-[#1B2559] text-base font-bold leading-[30px] mb-1">
                Successful Projects
              </h3>
              <p className="text-[#68769F] text-base font-medium leading-[30px]">
                Urna duis convallis convallis tellus interdum velit laoreet.
              </p>
            </div>

            <div className="item">
              <h2 className="text-[#1B2559] text-4xl font-extrabold leading-[44px]">
                $10m
              </h2>
              <h3 className=" text-[#1B2559] text-base font-bold leading-[30px] mb-1">
                Annual Percentage Rate
              </h3>
              <p className="text-[#68769F] text-base font-medium leading-[30px]">
                Urna duis convallis convallis tellus interdum velit laoreet.
              </p>
            </div>

            <div className="item">
              <h2 className="text-[#1B2559] text-4xl font-extrabold leading-[44px]">
                2.8k+
              </h2>
              <h3 className=" text-[#1B2559] text-base font-bold leading-[30px] mb-1">
                Clients Worldwide
              </h3>
              <p className="text-[#68769F] text-base font-medium leading-[30px]">
                Urna duis convallis convallis tellus interdum velit laoreet.
              </p>
            </div>

            <div className="item">
              <h2 className="text-[#1B2559] text-4xl font-extrabold leading-[44px]">
                7000+
              </h2>
              <h3 className=" text-[#1B2559] text-base font-bold leading-[30px] mb-1">
                Daily Visits
              </h3>
              <p className="text-[#68769F] text-base font-medium leading-[30px]">
                Urna duis convallis convallis tellus interdum velit laoreet.
              </p>
            </div>

          </div>
        </div>
        <div>
          <img src={Thunder} alt="thunder" />
        </div>
      </div>
    </section>
  );
};

export default WorkFLow;
