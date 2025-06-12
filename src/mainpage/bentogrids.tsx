import { useState } from 'react';
import { motion } from "motion/react"
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input'
import { Label } from "../components/ui/label"
import firstproject from "../assets/projectsImages/mcbook.png"
import secondproject from "../assets/projectsImages/mcbook2.png"
import thirdproject from "../assets/projectsImages/embedded.svg"
import linkedin from "../assets/logo/linkedin.png"
import github from "../assets/logo/github2.png"
import githubb from "../assets/logo/githubT.svg"
import instagram from "../assets/logo/instagram.png"
import js1 from "../assets/files/js1.jpg";
import js2 from "../assets/files/js2.png";
import mern from "../assets/files/Mern.jpg";

export default function BentoPortfolio() {

const [isSubmitting, setIsSubmitting] = useState(false); 
const [stateMessage, setStateMessage] = useState<string | null>(null);

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

  emailjs.sendForm(serviceID, templateID, e.currentTarget, publicKey)
    .then(() => {
     
      setStateMessage('Message sent!');
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 5000);
    })
    .catch((error) => {
      console.error(error.text);
      setStateMessage('Something went wrong, please try again later');
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 5000);
    });

  e.currentTarget.reset();
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
    image: secondproject,
    title: "BAGA.NET",
    description:  "I designed and developed here our system for thesis, a lung classification disease through federated machine leanring.",
    tech:['#MongoDB','Express.Js','#React','#Node.Js'],
    linkvercel:"https://baga-net.vercel.app",
    link:"https://github.com/rasberriali/BAGA.Net"
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
]

const certs = [
  {
    title: "Javascript Essential 1",
    subtitle: "Statement of Achievement",
    certsImages: js1,
  },
  {
    title: "Javascript Essential 2",
    subtitle: "Statement of Achievement",
    certsImages: js2,
  },
  {
    title: "Intro to MERN Stack",
    subtitle: "Certificate of Completion",
    certsImages: mern,
  },
]
  return (
    <div className="container grid grid-cols-1 md:grid-cols-6 grid-rows-5 gap-4 mt-10 mb-20">
<Card className="md:col-span-4 row-span-4 flex flex-col justify-between dark:bg-neutral-800/40">
  

    <CardContent className="space-y-4 ">
      <motion.div
       initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.15 }}
    viewport={{ once: true, amount: 0.3 }}
       className='flex gap-2'>
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2.5L3 6.5V20.5C3 21.0304 3.21071 21.5391 3.58579 21.9142C3.96086 22.2893 4.46957 22.5 5 22.5H19C19.5304 22.5 20.0391 22.2893 20.4142 21.9142C20.7893 21.5391 21 21.0304 21 20.5V6.5L18 2.5H6Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 6.5H21" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 10.5C16 11.5609 15.5786 12.5783 14.8284 13.3284C14.0783 14.0786 13.0609 14.5 12 14.5C10.9391 14.5 9.92172 14.0786 9.17157 13.3284C8.42143 12.5783 8 11.5609 8 10.5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <h2 className="text-xl font-bold">About</h2>
      </motion.div>

      <motion.p
       initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.30 }}
    viewport={{ once: true, amount: 0.3 }}
      className='text-sm leading-6 '>
       I’m a Computer Engineer passionate about software development, especially in web technologies. 
       I primarily work with the MERN stack (MongoDB, Express.js, React.js, Node.js) to build full-stack
        applications and am currently learning Laravel 11 to expand my backend skills with PHP.
      </motion.p>
      <motion.p
       initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.50 }}
    viewport={{ once: true, amount: 0.3 }}
      className='text-sm leading-6'>
        Throughout college, I gravitated more toward software despite my program covering both
         hardware and software. I took the initiative to deepen my knowledge by watching tutorials,
          joining free online courses, and participating in mentorship programs centered around modern web development.
      </motion.p>
      <motion.p
       initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.70 }}
    viewport={{ once: true, amount: 0.3 }}
      className='text-sm leading-6'>
        Beyond academics, I’ve worked as a freelancer on various projects, gaining practical 
        experience with technologies like Java, Flask, Django, and PHP. These experiences 
        allowed me to handle different aspects of development, from coding to documentation. I continue to push myself to stay updated with industry trends and am committed to consistently delivering my best in every project.


      </motion.p>
    
    </CardContent>
</Card>

  {/* Mantra */}
 <Card className="row-start-5 md:col-span-4 dark:bg-neutral-800/40">
  <motion.div
   initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.15 }}
    viewport={{ once: true, amount: 0.3 }}>
    <CardContent className="">
      <p className="italic text-base text-blue-500 leading-6 ">
        "Empowered by faith, driven by discipline, refined by every line of code."
        <br /><span className='flex justify-end text-xs text-gray-500'>- Daily motivation</span>
      </p>
    </CardContent>
  </motion.div>
  </Card>



      {/* Experience */}
      <Card className="md:col-span-2 row-span-5 dark:bg-neutral-800/40">
        <CardContent className="space-y-4">
          <div>
           <motion.div 
            initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.15 }}
    viewport={{ once: true, amount: 0.3 }}
           className='flex flex-row gap-2  justify-between items-center'>
            <div className='flex gap-2 items-center'>
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 3.5H4C2.89543 3.5 2 4.39543 2 5.5V15.5C2 16.6046 2.89543 17.5 4 17.5H20C21.1046 17.5 22 16.6046 22 15.5V5.5C22 4.39543 21.1046 3.5 20 3.5Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 21.5H16" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 17.5V21.5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
          <div className="text-xl font-bold">Experience</div>
        </div>
       
           <div className='text-xs tracking-wide'>Internships</div>
 
       
      </motion.div>
          <ul className="relative border-l border-gray-300 pl-6 space-y-8 mt-4">
  <motion.li
  initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.30 }}
    viewport={{ once: true, amount: 0.3 }}
  className="relative">

  <span className='relative flex size-3 -left-[30px] top-1'>
     <span className=" absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
     <span className='relative inline-flex size-3 rounded-full bg-sky-500'></span>
  </span>
   
    <div className='flex flex-row justify-between items-center -mt-3'>
      <strong>IT and Infrastructure</strong>
      <div className='text-[10px] dark:bg-blue-400 dark:text-black bg-blue-100 py-1 px-2 text-center rounded-full '>April 2025</div>
    </div> 
    <h1 className='text-xs mt-1'>Embedded Silicon Technology Solutions Corp.</h1>
    <p className='mt-4 text-sm leading-5'>
      Led the complete revamp of company’s website, handling both frontend and backend development.
    </p>
  </motion.li>

  <motion.li 
   initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.50 }}
    viewport={{ once: true, amount: 0.3 }}
  className="relative">
      <span className='relative flex size-3 -left-[30px] top-1'>
     <span className=" absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
     <span className='relative inline-flex size-3 rounded-full bg-sky-500'></span>
  </span>
    <div className='flex flex-row justify-between items-center -mt-3'>
      <strong>Frontend Developer</strong>
      <div className='text-[10px] dark:bg-blue-400 dark:text-black bg-blue-100 py-1 px-2 text-center rounded-full '>January 2025</div>
    </div> 
    <h1 className='text-xs mt-1'>Befiend (FKA Edufied)</h1>
    <p className='mt-4 text-sm leading-5'>
      Contributed in building the FliPass system for Edufied, collaborating remotely with an experienced team.
    </p>
  </motion.li>

  <motion.li 
  initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.70 }}
    viewport={{ once: true, amount: 0.3 }}
  className="relative">
      <span className='relative flex size-3 -left-[30px] top-1'>
     <span className=" absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
     <span className='relative inline-flex size-3 rounded-full bg-sky-500'></span>
  </span>
    <div className='flex flex-row justify-between items-center -mt-3'>
      <strong>Freelancer</strong>
      <div className='text-[10px] dark:bg-blue-400 dark:text-black bg-blue-100 py-1 px-2 text-center rounded-full '>November 2022</div>
    </div> 
    <p className='mt-2 text-sm leading-5'>
      Catered various programming activities /projects using Java, Python, Django, and others.
    </p>
  </motion.li>
</ul>
</div>

        </CardContent>
      </Card>

      {/* Projects */}
         <Card className="md:col-span-6 dark:bg-neutral-800/40 ">
        <CardContent className="space-y-4 ">
          <div className='flex flex-row justify-between'>
             <motion.div
             initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15}}
              viewport={{ once: true, amount: 0.3 }}
            
            className='flex gap-2'>
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
            </motion.div>
            <Link to="/projects" className='flex flex-row justify-end items-center gap-1 cursor-pointer group'>
                 <div className='text-xs underline-offset-2 transform transition-transform duration-300 group-hover:translate-x-2'>View All</div>
                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='transform transition-transform duration-300 group-hover:translate-x-2'>
                <path d="M4.66663 11.3334L11.3333 4.66669" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.66663 4.66669H11.3333V11.3334" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
              {projects.map((project, index) => (
  <motion.a
    key={index}
    href={project.linkvercel}
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
        <img src={project.image} alt="Project Thumbnail" className="rounded mb-2 relative" />
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute p-2 m-2 bg-blue-200 rounded-full cursor-pointer hover:animate-spin hover:bg-sky-300"
        >
          <img src={githubb} alt="" className="w-6" />
        </a>
        <h3 className="font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-500">{project.description}</p>
        <div className="tech-stack">
          {project.tech.map((techItem, i) => (
            <span
              key={i}
              style={{
                backgroundColor: techColors[techItem] || "#888",
                color: "white",
                padding: "4px",
                borderRadius: "6px",
                marginRight: "6px",
                marginTop: "4px",
                display: "inline-block",
              }}
            >
              <h1 className="xl:text-sm text-xs font-semibold">{techItem}</h1>
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
  

      <Card className="md:col-span-4 dark:bg-neutral-800/40">
        <CardContent className="">
            <motion.div 
            initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.15 }}
    viewport={{ once: true, amount: 0.3 }}
            
            className='flex gap-2 mb-4'>
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 17.42V20.42C22.0011 20.6985 21.9441 20.9741 21.8325 21.2293C21.7209 21.4845 21.5573 21.7136 21.3521 21.9018C21.1469 22.0901 20.9046 22.2335 20.6408 22.3227C20.3769 22.4119 20.0974 22.445 19.82 22.42C16.7428 22.0856 13.787 21.0341 11.19 19.35C8.77383 17.8146 6.72534 15.7661 5.19 13.35C3.49998 10.7412 2.44824 7.77097 2.12 4.67997C2.09501 4.40344 2.12788 4.12474 2.2165 3.8616C2.30513 3.59846 2.44757 3.35666 2.63477 3.1516C2.82196 2.94653 3.04981 2.78268 3.30379 2.6705C3.55778 2.55831 3.83234 2.50024 4.11 2.49997H7.11C7.59531 2.4952 8.06579 2.66705 8.43376 2.98351C8.80173 3.29996 9.04208 3.73942 9.11 4.21997C9.23662 5.18004 9.47145 6.1227 9.81 7.02997C9.94455 7.3879 9.97366 7.77689 9.89391 8.15086C9.81415 8.52482 9.62886 8.86809 9.36 9.13998L8.09 10.41C9.51356 12.9135 11.5865 14.9864 14.09 16.41L15.36 15.14C15.6319 14.8711 15.9752 14.6858 16.3491 14.6061C16.7231 14.5263 17.1121 14.5554 17.47 14.69C18.3773 15.0285 19.3199 15.2634 20.28 15.39C20.7658 15.4585 21.2094 15.7032 21.5265 16.0775C21.8437 16.4518 22.0122 16.9296 22 17.42Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <h2 className="text-xl font-bold">Connect</h2>
      </motion.div>
          <motion.p 
          initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.20 }}
    viewport={{ once: true, amount: 0.3 }}
          className='text-sm leading-6 mb-4'>
            I'm currently looking for job opportunities. If you have any suggestions or
            feedback, I’d be happy to hear from you!
          </motion.p>

        <form onSubmit={sendEmail} className="space-y-4">
  <motion.div
  initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.25 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <Label htmlFor="email" variant="muted">Email</Label>
    <Input 
      id="email"
      type="email"
      name="email" 

      required
      aria-required="true"
      className="bg-[#F3F3F3] dark:bg-black/60 border-0"
    />
  </motion.div>

  <motion.div
  initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.30 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <Label htmlFor="feedback" variant="muted">Feedback</Label>
    <Input 
      id="feedback"
      type="text"
      name="feedback"
 
      required
      aria-required="true"
      className="bg-[#F3F3F3] dark:bg-black/60 border-0"
    />
  </motion.div>
<motion.div
initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.30 }}
    viewport={{ once: true, amount: 0.3 }}
>
  <Button
  type="submit"
  variant="submit"
  disabled={isSubmitting}
  size="w"
  className="w-full"
  aria-busy={isSubmitting}
>
  {isSubmitting ? 'Sending...' : 'Send Message'}
</Button>

{stateMessage && (
  <p className="text-center mt-2 text-sm text-muted-foreground">
    {stateMessage}
  </p>
)}
   </motion.div>
</form>

<motion.div
initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.30 }}
    viewport={{ once: true, amount: 0.3 }}
>



           <Label htmlFor="text" variant="muted" className='mt-4'>Social Links</Label>
          <div className="flex flex-row justify-between space-x-6 ">
            <a href="https://www.linkedin.com/in/alysa-juliana-emilio-33a195227/"target="_blank" 
            rel="noopener noreferrer" className='flex items-center justify-center p-2 bg-[#F3F3F3] dark:bg-neutral-100/85 hover:bg-blue-100 rounded-lg w-1/3'>
          <img src={linkedin} alt="LinkedIn" className="h-8" /></a>


            <a href="https://github.com/rasberriali"target="_blank" 
          rel="noopener noreferrer" className='flex items-center justify-center p-2 bg-[#F3F3F3] dark:bg-neutral-100/85 hover:bg-blue-100 rounded-lg w-1/3'>
        <img src={github} alt="Instagram" className="h-8" /></a>

            <a href="  https://www.instagram.com/alysaemilio/"target="_blank" 
        rel="noopener noreferrer" className='flex items-center justify-center p-2 bg-[#F3F3F3] dark:bg-neutral-100/85 hover:bg-blue-100 rounded-lg w-1/3'>
      <img src={instagram} alt="GitHub" className="h-8" /></a>
          </div>
          </motion.div>
        </CardContent>
      </Card>
   

      {/* Certifications */}
      <Card className="md:col-span-2 dark:bg-neutral-800/40">
        <CardContent className="space-y-2">
            <motion.div
             initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15}}
              viewport={{ once: true, amount: 0.3 }}
            className='flex gap-2'>
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 19.5C22 20.0304 21.7893 20.5391 21.4142 20.9142C21.0391 21.2893 20.5304 21.5 20 21.5H4C3.46957 21.5 2.96086 21.2893 2.58579 20.9142C2.21071 20.5391 2 20.0304 2 19.5V5.5C2 4.96957 2.21071 4.46086 2.58579 4.08579C2.96086 3.71071 3.46957 3.5 4 3.5H9L11 6.5H20C20.5304 6.5 21.0391 6.71071 21.4142 7.08579C21.7893 7.46086 22 7.96957 22 8.5V19.5Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <h2 className="text-xl font-bold">Certifications</h2>
      </motion.div>
          <div className="space-y-4 mt-4">
            {certs.map((certs,index) => (
            <motion.div 
             initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
            
            className='flex flex-col justify-between min-h-26  bg-[#F3F3F3] dark:bg-neutral-100/85 text-black  p-4 rounded-[10px] transform transition-transform duration-300 ease-in-out hover:-translate-y-1.5 cursor-pointer' key={index} onClick={() => window.open(certs.certsImages, "_blank")}>
              <div className=''>
                <h1 className='font-bold tracking-wide '>{certs.title}</h1>
                <h2 className='text-sm font-light'> {certs.subtitle}</h2>
              </div>
              <div className='flex flex-row justify-end items-center gap-1 cursor-pointer'>
                 <div className='text-xs'>View</div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.66663 11.3334L11.3333 4.66669" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.66663 4.66669H11.3333V11.3334" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

          
      
    </div>
  );
}