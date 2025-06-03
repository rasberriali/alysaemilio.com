
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input'
import about from "../assets/icons/about.svg"
import experience from "../assets/icons/experience.svg"
import firstproject from "../assets/projectsImages/mcbook.png"
import secondproject from "../assets/projectsImages/mcbook2.png"
import thirdproject from "../assets/projectsImages/monitor.png"
import linkedin from "../assets/logo/linkedin.png"
import github from "../assets/logo/github2.png"
import instagram from "../assets/logo/instagram.png"

export default function BentoPortfolio() {

const projects = [
  {
    image: firstproject,
    title: "BAGA.NET",
    description:  "I design and develop the frontend for BAGA.NET, an ongoing thesis project.",
  },
   {
    image: secondproject,
    title: "Airizz",
    description:  "I designed here the UI/UX for air quality monitoring and contributed to the backend using DynamoDB, APIs, and Lambda.",
  },
   {
    image: thirdproject,
    title: "dotGenerate",
    description:  "This is a simple personal project, created to enhance my MERN stack skills and perform CRUD functionalities. It generates project ideas to inspire developers.",
  },

]
  return (
    <div className=" grid grid-cols-1 md:grid-cols-6 grid-rows-5 gap-4 mt-10  ">
     {/* About */}
<Card className="md:col-span-4 row-span-4 flex flex-col justify-between">
  <div>
    <CardContent className="space-y-4 ">
      <div className='flex gap-2'>
        <img src={about} alt=""></img>
        <h2 className="text-xl font-bold">About</h2>
      </div>
      <p className='text-sm leading-6 '>
       I am a Computer Engineer with a strong interest in software development, 
       particularly in web technologies. I work with JavaScript, Python, and PHP,
        and I’m currently learning Laravel 11 to strengthen my skills in backend development.
      </p>
      <p className='text-sm leading-6'>
        Throughout college, I gravitated more toward software despite my program covering both
         hardware and software. I took the initiative to deepen my knowledge by watching tutorials,
          joining free online courses, and participating in mentorship programs centered around modern web development.
      </p>
      <p className='text-sm leading-6'>
        Beyond academics, I’ve worked as a freelancer on various projects, gaining practical experience with technologies like Java, Flask, Django, and PHP. These experiences allowed me to handle different aspects of development, from coding to documentation. I continue to push myself to stay updated with industry trends and am committed to consistently delivering my best in every project.


      </p>
    
    </CardContent>
  </div>
</Card>

  {/* Mantra */}
 <Card className="row-start-5 md:col-span-4">
  <div>
    <CardContent className="">
      <p className="italic text-base text-blue-500 leading-6 ">
        "Empowered by faith, driven by discipline, refined by every line of code."
        <br /><span className='flex justify-end text-sm text-gray-500'>-Mantra</span>
      </p>
    </CardContent>
  </div>
  </Card>



      {/* Experience */}
      <Card className="md:col-span-3 row-span-5">
        <CardContent className="space-y-4">
           <div className='flex gap-2'>
        <img src={experience} alt=""></img>
        <h2 className="text-xl font-bold">Experience</h2>
      </div>
          <ul className="relative border-l border-gray-300 pl-6 space-y-8">
  <li className="relative">
    <span className="absolute -left-[30px] top-1 w-3 h-3 bg-blue-500 animate-pulse rounded-full border border-white"></span>
    <div className='flex flex-row justify-between items-center'>
      <strong>IT and Infrastructure</strong>
      <div className='text-[10px] bg-blue-100 py-1 px-2 text-center rounded-full'>April 2025</div>
    </div> 
    <h1 className='text-xs mt-1'>Embedded Silicon Technology Solutions Corp.</h1>
    <p className='mt-4 text-sm leading-5'>
      Led the complete revamp of company’s website, handling both frontend and backend development.
    </p>
  </li>

  <li className="relative">
    <span className="absolute -left-[30px] top-1 w-3 h-3 bg-blue-500 animate-pulse rounded-full border border-white"></span>
    <div className='flex flex-row justify-between items-center'>
      <strong>Frontend Developer</strong>
      <div className='text-[10px] bg-blue-100 py-1 px-2 text-center rounded-full'>January 2025</div>
    </div> 
    <h1 className='text-xs mt-1'>Befiend (FKA Edufied)</h1>
    <p className='mt-4 text-sm leading-5'>
      Contributed in building the FliPass system for Edufied, collaborating remotely with an experienced team.
    </p>
  </li>

  <li className="relative">
    <span className="absolute -left-[30px] top-1 w-3 h-3 bg-blue-500 animate-pulse rounded-full border border-white"></span>
    <div className='flex flex-row justify-between items-center'>
      <strong>Freelancer</strong>
      <div className='text-[10px] bg-blue-100 py-1 px-2 text-center rounded-full'>November 2022</div>
    </div> 
    <p className='mt-2 text-sm leading-5'>
      Catered various programming activities /projects using Java, Python, Django, and others.
    </p>
  </li>
</ul>

        </CardContent>
      </Card>

      {/* Projects */}
         <Card className="md:col-span-8">
        <CardContent className="space-y-4 ">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {projects.map((projects,index) => (
              <Card key={index}>
                <CardContent className=''>
                  <img
                    src={projects.image}
                    alt="Project Thumbnail"
                    className="rounded mb-2"
                  />
                  <h3 className="font-semibold">{projects.title}</h3>
                  <p className="text-sm text-gray-500">
                   {projects.description}
                  </p>
                </CardContent>
           </Card>

      ))}
     
          
          </div>
        </CardContent>
      </Card>

      {/* Connect */}
      <Card className="md:col-span-4">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-bold">Connect</h2>
          <p>
            I'm currently looking for job opportunities. If you have any suggestions or
            feedback, I’d be happy to hear from you!
          </p>
          <Input type="email" placeholder="Email" />
          <Input type="text" placeholder="Feedback" />
          <Button className="w-full">Submit</Button>
          <div className="flex space-x-4 pt-2">
            <a href="#"><img src={linkedin} alt="LinkedIn" className="h-6" /></a>
            <a href="#"><img src={github} alt="Instagram" className="h-6" /></a>
            <a href="#"><img src={instagram} alt="GitHub" className="h-6" /></a>
          </div>
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card className="md:col-span-3">
        <CardContent className="space-y-2">
          <h2 className="text-xl font-bold">Certifications</h2>
          <ul className="space-y-1">
            <li>
              <strong>JavaScript Essential 1</strong>
              <br /> Statement of Achievement
            </li>
            <li>
              <strong>JavaScript Essential 2</strong>
              <br /> Statement of Achievement
            </li>
            <li>
              <strong>Intro to MERN Stack</strong>
              <br /> Statement of Achievement
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
