import HorizonUIAvatar from '../assets/HorizonUIAvatar.svg'
import HorizonUI from '../assets/HorizonUI.svg'
import Facebook from '../assets/Facebook.svg';
import Twitter from '../assets/Twitter.svg';
import Instagram from '../assets/Instagram.svg';
import Linkedin from '../assets/LinkedIn.svg';
import Github from '../assets/Github.svg';



const Footer = () => {

  return (
    <footer className=" mx-0 my-[100px]">
      <div className="container w-[1200px] mx-auto flex flex-col justify-center items-center gap-8">
        <div className="flex gap-3">
          <img src={HorizonUIAvatar} alt="icon" />
          <img src={HorizonUI} alt="icon" />
        </div>

        <div>
          <ul className="flex gap-16 items-center text-[#68769F] text-sm font-medium leading-6">
            <li><a href="#abot">About</a></li>
            <li><a href="#abot">Features</a></li>
            <li><a href="#abot">Blog</a></li>
            <li><a href="#abot">Resources</a></li>
            <li><a href="#abot">Partners</a></li>
            <li><a href="#abot">Help</a></li>
            <li><a href="#abot">Terms</a></li>
          </ul>
        </div>

        <div className="flex gap-5 items-center">
          <img src={Facebook} alt="Facebook" />
          <img src={Twitter} alt="Twitter" />
          <img src={Instagram} alt="Instagram" />
          <img src={Linkedin} alt="Linkedin" />
          <img src={Github} alt="github" />
        </div>

        <small className='text-[#68769F] text-xs font-medium leading-6'>
          © 2023, Horizon UI Library. All rights reserved.
        </small>


      </div>
    </footer>
  );
};

export default Footer;
