import { Link } from 'react-router-dom';
import { motion } from "motion/react"
import { Card, CardContent } from '../components/ui/card';
import cloud from "../assets/files/cloudpractitioner.png"
import devops from "../assets/files/devops.png"
import js1 from "../assets/files/js1.jpg";
import js2 from "../assets/files/js2.png";
import mern from "../assets/files/Mern.jpg";

function MoreCerts() {
    
const certs = [
  {
    title: "AWS Cloud Practitioner Essentials",
    subtitle: "Completion Certificate",
    certsImages: cloud,
  },
 {
    title: "AWS Getting Started with DevOps",
    subtitle: "Completion Certificate",
    certsImages: devops,
  },
  {
    title: "Javascript Essential 1",
    subtitle: "Statement of Achievement",
    certsImages: js1,
  },
  {
   title: "Javascript Essential 2",
    subtitle: "Certificate of Completion",
    certsImages: js2,
  },
   {
    title: "Intro to MERN Stack",
    subtitle: "Certificate of Completion",
    certsImages: mern,
   },
]

    return(
         <div className="max-w-screen-lg  mx-auto p-4 mt-4 space-y-10">

            <Link to="/" className='flex flex-row gap-2 items-center group transition-all duration-300 ease-in-out'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='transform transition-transform duration-300 ease-in-out group-hover:-translate-x-1.5 group-hover:opacity-80'>
                <path d="M19 12H5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <div className='text-sm underline-offset-2 transform transition-transform duration-300 ease-in-out group-hover:-translate-x-1.5 group-hover:opacity-80">'>
                    Back to Home
                </div>
                
            </Link>
             {/* Certifications */}
             <div className=' container grid grid-cols-1 md:grid-cols-6 gap-4 mb-20'>
        
      <Card className="md:col-span-6 col-span-1 dark:bg-neutral-800/40">
        <CardContent className="space-y-2">
          <div className='flex flex-row justify-between'>
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
     </div>

          <div className="grid md:grid-cols-3 grid-cols-1  md:grid-rows-2  grid-rows-5 gap-4  mt-4">
            {certs.map((certs,index) => (
            <motion.div 
             initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.5 }}
            
            className='flex flex-col justify-between min-h-26  bg-[#F3F3F3] dark:bg-neutral-100/85 hover:bg-sky-200 text-black  p-4 rounded-[10px] transform transition-transform duration-300 ease-in-out hover:-translate-y-1.5 cursor-pointer' key={index} onClick={() => window.open(certs.certsImages, "_blank")}>
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
        </div>
    )
} 
export default MoreCerts