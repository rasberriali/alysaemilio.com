import { useState} from "react";
import profile from "../assets/files/profile.jpg"
import email from "../assets/icons/email.svg"
import Logos from "../mainpage/logos"
import Bentogrids from "./bentogrids"
import resume from "../assets/files/Resume.png"
import resumepdf from "../assets/files/AlysaEmilio - Software Engineer.pdf"


interface MainProps {
  theme: string;
  setTheme: (theme: string) => void;
}

function Main({ theme, setTheme }: MainProps) {

  const [isResumeOpenn, setIsResumeOpen] = useState(false);


  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8 transition-all duration-500 ease-in-out">
      <div className="flex flex-row  xl:gap-3 gap-4  items-center 0">
        <div className="md:w-1/5 w-1/3">
          <img
            src={profile}
            alt="Profile"
            className=" h-auto object-contain rounded-[10px]"
          />
        </div>

        <div className="flex-1 flex-row justify-between items-start  dark:text-neutral-200 ">
          <div className="flex flex-col justify-center xl:space-y-3 space-y-2">
            <div className="flex flex-row justify-between items-center">
            <h1 className="md:text-2xl text-[18px] font-bold tracking-wide">
              Alysa Emilio
            </h1>

           <label className="toggle text-base-content">
            <input type="checkbox"  
                      onChange={(e) =>
                      setTheme(e.target.checked ? "halloween" : "winter")
                  }
                  checked={theme === "halloween"}
                />
            <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

            <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

          </label>
           
          </div>

            <div className="flex items-center gap-1 -mt-2 ">
             
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              <h2 className="xl:text-sm text-[10px] ">Calamba City, Laguna</h2>
            </div>
            <h3 className="xl:text-base text-[14px] font-normal">
              Bs Computer Engineer and an Entry-level Software Engineer
            </h3>

            <div className="grid grid-cols-2 grid-rows-1 gap-3 md:w-2/5 mt-2 ">
            <a
              href="mailto:alysaemilio@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Send an email to alysaemilio@gmail.com"
              aria-label="Send an email to alysaemilio@gmail.com"
              className="flex flex-row xl:py-2 py-1 gap-2 px-2 bg-sky-500 text-center  justify-center items-center rounded-[5px] hover:bg-sky-700 transform transition-transform duration-300 ease-in-out hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-300  "
            >
              <img src={email} alt="" className="w-4" />
              <div className="xl:text-sm text-[10px] xl:font-medium text-white">
                Send Email
              </div>
            </a>

                
                <div
                  className="flex flex-row cursor-pointer xl:py-2 py-1 px-2 gap-2 border transform transition-transform duration-300 ease-in-out hover:-translate-y-0.5
                dark:border-blue-100/20 border-blue-100 text-center justify-center items-center rounded-[5px]"
                  onClick={() => setIsResumeOpen(true)} 
                >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 15V3" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <div className="xl:text-sm text-[10px] xl:font-medium ">
                    Resume
                </div>
              </div>

                {isResumeOpenn && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
    <div className="bg-neutral-200 dark:bg-neutral-900 rounded-lg p-6 max-h-[90vh] max-w-[90vw] w-full relative flex flex-col">
      {/* Modal Header */}
      <div className="flex items-center justify-between p-2 sticky top-0 bg-neutral-200 dark:bg-neutral-900 z-50 border-b border-gray-300 dark:border-gray-700">
        <div className="flex gap-2 items-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-current"
          >
            <path
              d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 10L12 15L17 10"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 15V3"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className="text-lg font-medium select-none">Resume</h2>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={resumepdf}
            download="Alysa_Resume.pdf"
            className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            aria-label="Download Resume PDF"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
              />
            </svg>
            Download
          </a>
          <button
            onClick={() => setIsResumeOpen(false)}
            className="text-sm cursor-pointer px-3 py-1 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            aria-label="Close modal"
          >
            Close
          </button>
        </div>
      </div>

      <div className="flex-grow overflow-auto mt-4 px-4">
        <div className="relative w-full xl:min-h-[80vh] min-h-[20vh] max-w-[900px] mx-auto rounded-xl ring-1 ring-gray-300 dark:ring-gray-600 shadow-md overflow-auto scroll-smooth">
          <img
            src={resume}
            alt="Resume Preview"
            className="w-[100%] h-auto object-contain select-none "
            title="Resume Preview"
            style={{ userSelect: 'none' }}
          />
        </div>
      </div>
    </div>
  </div>
)}


            </div>
          </div>

         
        </div>
      </div>

      <Logos/>
      <Bentogrids/>

      <div className="mt-50 mb-10">
        <h1 className="border border-gray-400/40"></h1>
        <div className="flex flex-row mt-8">
          <h2 className="text-sm font-medium">&#169;2025 Alysa Emilio. All rights reserved.</h2>

        </div>
      </div>

    </div>
  );
}

export default Main;
