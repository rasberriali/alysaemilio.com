import profile from "../assets/logo/profile.png"
import location from "../assets/icons/location.svg"
import email from "../assets/icons/email.svg"
import download from "../assets/icons/download.svg"
import toggle from "../assets/icons/toggle.svg"
import Logos from "../mainpage/logos"
import Bentogrids from "./bentogrids"

function Main() {
  return (
    <div className="max-w-screen-lg mx-auto p-4 mt-4">
      <div className="flex flex-row  xl:gap-3 gap-4  items-center">
        <div className="xl:w-1/5 w-2/5">
          <img
            src={profile}
            alt="Profile"
            className=" h-auto object-contain"
          />
        </div>

        <div className="flex-1 flex-row justify-between items-start ">
          <div className="flex flex-col justify-center xl:space-y-3 space-y-2">
            <div className="flex flex-row justify-between items-center">
            <h1 className="xl:text-2xl text-[14px]  font-bold tracking-wide">
              Alysa Emilio
            </h1>
           
            <img src={toggle} alt="Toggle" className="w-8" />
           
          </div>

            <div className="flex items-center gap-2 -mt-2">
              <img src={location} alt="" className="xl:w-4 w-3" />
              <h2 className="xl:text-sm text-xs">Calamba City, Laguna</h2>
            </div>
            <h3 className="xl:text-base text-[14px] font-normal">
              Bs Computer Engineer and an aspiring Fullstack Developer
            </h3>

            <div className="grid grid-cols-2 grid-rows-1 gap-3 xl:w-2/5 mt-2 ">
            <div className="flex flex-row xl:py- py-1 gap-2 px-2 bg-blue-400 text-center justify-center items-center rounded-[5px]">
                <img src={email} alt="" className="w-4"></img>

                <div className="xl:text-sm text-[10px] xl:font-medium text-white">
                    Send Email
                </div>
            </div>
                
                 <div className="flex flex-row xl:py-2 py-1 px-2 gap-2 ring ring-blue-100 text-center justify-center items-center rounded-[5px]">
                <img src={download} alt="" className="w-4"></img>

                <div className="xl:text-sm text-[10px] xl:font-medium">
                    Resume
                </div>
            </div>

            </div>
          </div>

         
        </div>
      </div>

      <Logos/>
      <Bentogrids/>
    </div>
  );
}

export default Main;
