import { Link } from 'react-router-dom';
import { motion } from "motion/react"
import { Card, CardContent } from '../components/ui/card';
import firstproject from "../assets/projectsImages/mcbook.png"
import secondproject from "../assets/projectsImages/mcbook2.png"
import thirdproject from "../assets/projectsImages/embedded.svg"
import fourthproject from "../assets/projectsImages/monitor.png"
import fifthproject from "../assets/files/projprofile.jpg"
import githubb from "../assets/logo/githubT.svg"

function MoreProjects() {
    
const techColors: Record<string, string> = {
  '#MongoDB': '#46AEF0',
  '#DynamoDB': '#4053D6',
  'Express.Js': '#29CD83',
  '#React': '#D53B6A',
  '#Node.Js': '#7031ef',
};

const subprojects = [
  {
    image: secondproject,
    title: "BAGA.NET",
    description:  "I designed and developed here our system for thesis, a lung classification disease through federated machine leanring.",
    tech:['#MongoDB','Express.Js','#React','#Node.Js'],
      linkvercel:"https://baga-net.vercel.app",
    link:"https://github.com/rasberriali/BAGA.Net"
  },
  {
    image: fifthproject,
    title: "Portfolio",
    description:  "My current portfolio website, deployed using an AWS S3 bucket for static hosting and set up with AWS CodePipeline.",
    tech:['#TypeScript','#TailwindCss + Vite','#ShadCN + DaisyUI','#React'],
    linkvercel:"http://alysaemilio.s3-website-ap-southeast-1.amazonaws.com",
    link:"https://github.com/rasberriali/alysaemilio.com?tab=readme-ov-file"
  },
   {
    image: thirdproject,
    title: "Embedded Silicon",
    description:  "Lead the complete revamp of Embedded Silicons website, integrating CMS on job listing and success stories",
     tech:['#MongoDB','Express.Js','#React','#Node.Js'],
       link:"https://github.com/rasberriali/embedded-silicon",
     linkvercel:"https://embedded-silicon.vercel.app"
  },
   {
    image: firstproject,
    title: "Airizz",
    description:  "I designed here the UI/UX for air quality monitoring and contributed to the backend using DynamoDB, APIs, and Lambda.",
    tech:['#DynamoDB','Express.Js','#React','#Node.Js'],
       link:"https://github.com/rasberriali/AirQualityMonitoring",
     linkvercel:"https://air-quality-monitoring-mocha.vercel.app"
  },
  {
    image: fourthproject,
    title: "DotGenerate",
    description:  "This is a simple personal project, created to enhance my MERN stack skills and perform CRUD functionalities. It generates project ideas to inspire developers.",
    tech:['#DynamoDB','Express.Js','#React','#Node.Js'],
       link:"https://github.com/rasberriali/dotGenerate",
     linkvercel:"https://dot-generate.vercel.app"
  },
]
    return(
         <div className="max-w-screen-lg mx-auto p-4 mt-4 space-y-10">
            <Link to="/" className='flex flex-row gap-2 items-center group transition-all duration-300 ease-in-out'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='transform transition-transform duration-300 ease-in-out group-hover:-translate-x-1.5 group-hover:opacity-80'>
                <path d="M19 12H5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <div className='text-sm underline-offset-2 transform transition-transform duration-300 ease-in-out group-hover:-translate-x-1.5 group-hover:opacity-80">'>
                    Back to Home
                </div>
                
            </Link>
            {/* Projects */}
         <Card className="md:col-span-8 dark:bg-neutral-800/40">
        <CardContent className="space-y-4 ">
            <div className='flex gap-2'>
               <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1382_51)">
              <path d="M18 8.5H19C20.0609 8.5 21.0783 8.92143 21.8284 9.67157C22.5786 10.4217 23 11.4391 23 12.5C23 13.5609 22.5786 14.5783 21.8284 15.3284C21.0783 16.0786 20.0609 16.5 19 16.5H18" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 8.5H18V17.5C18 18.5609 17.5786 19.5783 16.8284 20.3284C16.0783 21.0786 15.0609 21.5 14 21.5H6C4.93913 21.5 3.92172 21.0786 3.17157 20.3284C2.42143 19.5783 2 18.5609 2 17.5V8.5Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6 1.5V4.5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10 1.5V4.5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 1.5V4.5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_1382_51">
              <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
              </clipPath>
              </defs>
              </svg>
              <h2 className="text-xl font-bold">Projects</h2>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {subprojects.map((projects,index) => (
                <motion.a
    key={index}
    href={projects.linkvercel}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    viewport={{ once: true, amount: 0.3 }}
    className="block"
  >
    <Card className="transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer">
      <CardContent className="flex flex-col space-y-2">
        <img src={projects.image} alt="Project Thumbnail" className="rounded mb-2 relative" />
        <a
          href={projects.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute p-2 m-2 bg-blue-200 rounded-full cursor-pointer hover:animate-spin hover:bg-sky-300"
        >
          <img src={githubb} alt="" className="w-6" />
        </a>
        <h3 className="font-semibold">{projects.title}</h3>
        <p className="text-sm text-gray-500">{projects.description}</p>
        <div className="tech-stack">
          {projects.tech.map((techItem, i) => (
      <span
          key={i}
          className="inline-flex items-center justify-center px-3 py-1 rounded-md mr-2 mt-2 text-xs font-medium ring-1 bg-neutral-100 dark:bg-neutral-800 ring-gray-300/60 dark:ring-gray-300/10"
          style={{
            color: techColors[techItem] || "#444",
           
          }}
        >
          {techItem}
        </span>



                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.a>

      ))}
     
          
          </div>
        </CardContent>
      </Card>
        </div>
    )
} 
export default MoreProjects