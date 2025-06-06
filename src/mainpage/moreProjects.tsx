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


const projects = [
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
                <img src={backarrow} alt=""></img>
                <div>
                    Back to Home
                </div>
                
            </Link>
            {/* Projects */}
         <Card className="md:col-span-8">
        <CardContent className="space-y-4 ">
            <div className='flex gap-2'>
              <img src={projectss} alt=""></img>
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