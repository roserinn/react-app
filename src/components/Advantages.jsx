import messages from '../assets/messages.svg';
import chart from '../assets/chart.svg';
import users from '../assets/users.svg';

const Advantages = () => {
  return (
    <section className=" mx-0 my-[200px]">
      <div className="container w-[1200px] mx-auto">
        <div className="flex justify-between items-center"> 
          <div className="flex flex-col justify-center items-center gap-5 w-[374px] h-[262px] p-[30px] text-center">
            <div className="w-12 h-12 bg-[#4318FF] rounded-2xl flex justify-center items-center">
              <img src={messages} alt="message" />
            </div>

            <div>
              <h2 className="text-[#1B2559] text-2xl font-extrabold leading-8">
                Share team inboxes
              </h2>
              <p className="text-[#68769F)] text-base font-medium leading-[30px]">
                Whether you have a team of 2 or 200, our shared team inboxes keep <br/> everyone
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-5 w-[374px] h-[262px] p-[30px] text-center shadow-[0px_32px_64px_-12px_rgba(85,105,135,0.13)] rounded-2xl">
            <div className="w-12 h-12 bg-[#4318FF] rounded-2xl flex justify-center items-center">
              <img src={chart} alt="message" />
            </div>
            <div>
              <h2 className="text-[#1B2559] text-2xl font-extrabold leading-8">
                Analytics dashboard
              </h2>
              <p className="text-[#68769F)] text-base font-medium leading-[30px]">
                Whether you have a team of 2 or 200, our shared team inboxes keep  <br/> everyone
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-5 w-[374px] h-[262px] p-[30px] text-center">
            <div className="w-12 h-12 bg-[#4318FF] rounded-2xl flex justify-center items-center">
              <img src={users} alt="message" />
            </div>
            <div>
              <h2 className="text-[#1B2559] text-2xl font-extrabold leading-8">
                Deliver instant answer
              </h2>
              <p className="text-[#68769F)] text-base font-medium leading-[30px]">
                Whether you have a team of 2 or 200, our shared team inboxes keep <br/> everyone
              </p> 
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
