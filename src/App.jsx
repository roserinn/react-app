import Header from "./components/Header";
import MainSection from "./components/MainSection";
import HowWorks from "./components/HowWorks";
import Advantages from './components/Advantages';
import WorkFLow from './components/WorkFlow';
import Customer from './components/Customer';
import  SaveTime from './components/SaveTime';
import Footer from './components/Footer';
import LogIn from "./components/LogIn";
import {useState} from "react";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Header setOpen={setIsModalOpen}/>
      <MainSection/>
      <HowWorks/>
      <Advantages/>
      <WorkFLow/>
      <Customer/>
      <SaveTime/>
      <Footer/>
      <LogIn open={isModalOpen} setOpen={setIsModalOpen}/>
    </div>
  );
};

export default App;
