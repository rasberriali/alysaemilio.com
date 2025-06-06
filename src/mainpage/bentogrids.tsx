import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input'
import { Label } from "../components/ui/label"
import about from "../assets/icons/about.svg"
import experience from "../assets/icons/experience.svg" 
import projectss from "../assets/icons/projects.svg"
import connect from "../assets/icons/connect.svg"
import certifications from "../assets/icons/certifications.svg"
import firstproject from "../assets/projectsImages/mcbook.png"
import secondproject from "../assets/projectsImages/mcbook2.png"
import thirdproject from "../assets/projectsImages/monitor.png"
import linkedin from "../assets/logo/linkedin.png"
import github from "../assets/logo/github2.png"
import instagram from "../assets/logo/instagram.png"
import arrow from "../assets/icons/up-arrow.svg"

export default function BentoPortfolio() {

  const [formData, setFormData] = useState({
    email: '',
    feedback: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = { ...formData };

      await emailjs.send(
        'service_lrqbf18',
        'template_di57wfk',
        templateParams,
        'ITmUKPndfKZTeDw4i'
      );

      setSubmitStatus('success');
      setFormData({
        email: '',
        feedback: ''
      });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };


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

const certs = [
  {
    title: "Javascript Essential 1",
    subtitle: "Statement of Achievement"
  },
  {
    title: "Javascript Essential 2",
    subtitle: "Statement of Achievement"
  },
  {
    title: "Intro to MERN Stack",
    subtitle: "Statement of Achievement"
  },
]
  return (
    <div className="container grid grid-cols-1 md:grid-cols-6 grid-rows-5 gap-4 mt-10  ">
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
          <div className='flex flex-row justify-between'>
            <div className='flex gap-2'>
              <img src={projectss} alt=""></img>
              <h2 className="text-xl font-bold">Projects</h2>
            </div>
            <Link to="/projects" className='flex flex-row justify-end items-center gap-1 cursor-pointer'>
                 <div className='text-xs'>View All</div>
                 <img src={arrow} alt="" className='h-4'></img>
                </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {projects.map((projects,index) => (
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

      {/* Connect */}
      <Card className="md:col-span-4">
        <CardContent className="">
            <div className='flex gap-2 mb-4'>
        <img src={connect} alt=""></img>
        <h2 className="text-xl font-bold">Connect</h2>
      </div>
          <p className='text-sm leading-6 mb-4'>
            I'm currently looking for job opportunities. If you have any suggestions or
            feedback, I’d be happy to hear from you!
          </p>

        <form onSubmit={handleSubmit} className="">
          <Label 
            htmlFor="email" variant="muted">Email</Label>
          <Input 
            type="email"
            name="email" 
            value={formData.email}
            onChange={handleInputChange}
            required
            className='bg-[#F3F3F3] border-0' />

          <Label htmlFor="text"  variant="muted">Feedback</Label>
          <Input 
            type="text"
            name="feedback"
            onChange={handleInputChange}
            value={formData.feedback}
            required
            className='bg-[#F3F3F3] border-0' />

          <Button
            type="submit"
            variant="submit"
            // onClick={handleSubmit}
            disabled={isSubmitting}
            size="w">
            {isSubmitting ? 'Sending...' : 'Submit'}
            </Button>

          {submitStatus === 'success' && (
          <div className="text-green-600 text-sm mt-2">Message sent successfully!</div>
        )}
        {submitStatus === 'error' && (
          <div className="text-red-600 text-sm mt-2">Failed to send message. Please try again.</div>
        )}
        </form>


           <Label htmlFor="text" variant="muted" className='mt-4'>Social Links</Label>
          <div className="flex flex-row justify-between space-x-6 ">
            <div className='flex items-center justify-center p-2 bg-[#F3F3F3] rounded-lg w-1/3'><a href="https://www.linkedin.com/in/alysa-juliana-emilio-33a195227/"target="_blank" 
            rel="noopener noreferrer"
          ><img src={linkedin} alt="LinkedIn" className="h-8" /></a></div>
            <div className='flex items-center justify-center p-2 bg-[#F3F3F3] rounded-lg w-1/3'><a href="https://www.instagram.com/alysaemilio/"target="_blank" 
          rel="noopener noreferrer"
        ><img src={github} alt="Instagram" className="h-8" /></a></div>
            <div className='flex items-center justify-center p-2 bg-[#F3F3F3] rounded-lg w-1/3'><a href="https://github.com/rasberriali"target="_blank" 
        rel="noopener noreferrer"
      ><img src={instagram} alt="GitHub" className="h-8" /></a></div>
          </div>
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card className="md:col-span-3">
        <CardContent className="space-y-2">
            <div className='flex gap-2'>
        <img src={certifications} alt=""></img>
        <h2 className="text-xl font-bold">Certifications</h2>
      </div>
          <div className="space-y-4 mt-4">
            {certs.map((certs,index) => (
            <div className='flex flex-col justify-between min-h-26 bg-[#F3F3F3] p-4 rounded-[10px]' key={index}>
              <div className=''>
                <h1 className='font-bold tracking-wide '>{certs.title}</h1>
                <h2 className='text-sm font-light'> {certs.subtitle}</h2>
              </div>
              <div className='flex flex-row justify-end items-center gap-1 cursor-pointer'>
                 <div className='text-xs'>View</div>
                 <img src={arrow} alt="" className='h-4'></img>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

          
      
    </div>
  );
}