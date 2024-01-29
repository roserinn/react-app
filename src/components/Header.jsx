import HorizonUIAvatar from '../assets/HorizonUIAvatar.svg'
import HorizonUI from '../assets/HorizonUI.svg'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = ({setOpen}) => {

  const { contextSafe } = useGSAP();

  const onEnter = contextSafe(({ currentTarget }) => {
    gsap.to(currentTarget, { rotation: "+=360" });
  });

  return (
    <header className="py-6 mb-10">
      <div className=" flex flex-row items-center justify-between w-[1200px] mx-auto">
        <div className="header__logo flex gap-2">
          <img onClick={onEnter} src={HorizonUIAvatar} alt="logo" />
          <img src={HorizonUI} alt="logo" />
        </div>

        <div className="header__menu">
          <ul className="flex items-center gap-10">
            <li><a href="#product">Product</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#company">Company</a></li>
          </ul>
        </div>

        <div className="header__autorisation flex items-center gap-5">
          <button onClick={() => setOpen(true)}>Log In</button>
          <button className="bg-violet-100 text-blue-600 pr-4 pl-4 pt-1 pb-1 font-bold rounded-lg">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
