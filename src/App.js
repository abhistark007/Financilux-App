import "./App.css";
import ButtonOne from "./Components/ButtonOne";
import CardOne from "./Components/CardOne";
import NavBar from "./Components/NavBar";


import YourSvg from "./assets/arrow.svg";
import YourSvg2 from "./assets/play-button-svgrepo-com.svg";

function App() {
  return (
    <div className="bg-[#DCD6D3] w-screen min-h-screen flex flex-col flex-wrap font-poppins">
      <NavBar />
      <hr className="bg-black w-full h-1" />

      <div className="flex mx-20 gap-20 mt-5 lg:flex lg:flex-row flex-col ">
        {/* Left Part */}
        <div className="flex flex-col flex-wrap max-lg:items-center">
          <p className="text-9xl">Financial</p>
          <p className="text-9xl font-bold">Tracking</p>
          <p className="text-9xl font-bold">Platform</p>

          <div className="flex items-center mt-10 justify-between max-lg:gap-20">
            <ButtonOne txt={"Try for free"} />
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-white flex justify-center items-center">
                <img src={YourSvg2} className="w-6 h-6" />
              </div>
              <p className="font-bold underline cursor-pointer pr-10">See demo</p>
            </div>
          </div>

          <div className="relative flex w-96 mt-10 mx-auto">
            <div className="bg-[#A59892] rounded-2xl w-96 pl-10 py-5 z-20">
              <p className="font-bold text-3xl">1 million +</p>
              <p>Every month cashback for our client</p>


            </div>


          </div>
        </div>


        {/* Right Part */}
        <div className="flex flex-col">
          <div className="relative w-full h-full lg:block ">
            <div className="max-lg:text-3xl z-10 bg-[#A49B93] lg:w-[20%] lg:h-[30%] max-lg:py-6 max-lg:px-6 max-lg:text-center w-full max-lg:my-6 max-lg:mx-auto h-[30%] rounded-2xl flex flex-col justify-center px-10 lg:absolute top-10 left-10">
              <p>Take your expenses under control</p>
            </div>

            <div className="z-20 lg:w-[35%] lg:h-[35%] w-[50%] h-[70%] max-lg:mx-auto lg:block flex justify-center lg:absolute top-8 left-[20%] rounded-full">
              <img src={require('./assets/bussinessWomen.jpg')} className="rounded-xl" />
            </div>

            <div className="z-10 hidden lg:block w-[29%] h-[50%] bg-gradient-to-b from-[#A49B93] lg:absolute bottom-10 left-[40%] rounded-xl">

            </div>

            <div className="z-30 w-16 h-16 bg-orange-600 rounded-full hidden lg:absolute left-[15%] lg:flex justify-center items-center">
              {/* <img src={YourSvg} className="w-10 h-10" /> */}
            </div>

          </div>


          <div className="flex gap-20 lg:items-center lg:flex-row flex-col max-lg:text-center max-lg:my-5 max-lg:text-2xl ">
            <CardOne txt1={"Subscriptions"}
              txt2={"Make your money analysis faster and create your own way of saving on payments."}
            />
            <CardOne txt1={"Mobile Application"}
              txt2={"Shows income,expenses,credit score,saving goals,new worth,investments."}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
