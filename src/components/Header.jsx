import HorizonUIAvatar from '../assets/HorizonUIAvatar.svg'
import HorizonUI from '../assets/HorizonUI.svg'

const Header = () => {
  return (
    <div className="header items-start justify-start w-screen pt-6 pb-6 pl-20 pr-20">
      <div className="header__wrapper flex flex-row items-center justify-between w-100">
        <div className="header__logo flex gap-2">
          <img src={HorizonUIAvatar} alt="logo" />
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
          <button>Log In</button>
          <button className="bg-violet-100 text-blue-600 pr-4 pl-4 pt-1 pb-1 font-bold">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
