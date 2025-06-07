import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import projectss from "../assets/icons/projects.svg"
import firstproject from "../assets/projectsImages/mcbook.png"
import secondproject from "../assets/projectsImages/mcbook2.png"
import thirdproject from "../assets/projectsImages/monitor.png"
import backarrow from "../assets/icons/back-arrow.svg"

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
    image: firstproject,
    title: "BAGA.NET",
    description:  "I design and develop the frontend for BAGA.NET, an ongoing thesis project.",
    tech:['#MongoDB','Express.Js','#React','#Node.Js'],
  },
   {
    image: secondproject,
    title: "Airizz",
    description:  "I designed here the UI/UX for air quality monitoring and contributed to the backend using DynamoDB, APIs, and Lambda.",
    tech:['#DynamoDB','Express.Js','#React','#Node.Js'],
  },
   {
    image: thirdproject,
    title: "dotGenerate",
    description:  "This is a simple personal project, created to enhance my MERN stack skills and perform CRUD functionalities. It generates project ideas to inspire developers.",
     tech:['#MongoDB','Express.Js','#React','#Node.Js'],
  },
]
    return(
         <div className="max-w-screen-lg mx-auto p-4 mt-4 space-y-10">
            <Link to="/" className='flex flex-row gap-2'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <div>
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
              <Card key={index}>
                <CardContent className='flex flex-col space-y-2'>
                  <img
                    src={projects.image}
                    alt="Project Thumbnail"
                    className="rounded mb-2"
                  />
                  <h3 className="font-semibold">{projects.title}</h3>
                  <p className="text-sm text-gray-500">
                   {projects.description}
                  </p>
                 <div className="tech-stack">
                    {projects.tech.map((techItem, i) => (
                      <span
                        key={i}
                        style={{
                          backgroundColor: techColors[techItem] || '#888',
                          color: 'white',
                          padding: '4px',
                          borderRadius: '6px',
                          marginRight: '6px',
                          marginTop:'4px',
                          display: 'inline-block',
                        }}
                      >
                       <h1 className='xl:text-sm text-xs font-semibold '>{techItem}</h1> 
                      </span>
                    ))}
                  </div>
                </CardContent>
           </Card>

      ))}
     
          
          </div>
        </CardContent>
      </Card>
        </div>
    )
} 
export default MoreProjects