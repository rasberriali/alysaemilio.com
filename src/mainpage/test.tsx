
import { Card, CardContent } from '../components/ui/card';
import firstproject from "../assets/projectsImages/mcbook.png"
import secondproject from "../assets/projectsImages/mcbook2.png"
import thirdproject from "../assets/projectsImages/monitor.png"

export default function Test() {

    const projects = [
        {
            image: firstproject,
            title: 'Project 1',
            description: ' I design and develop the website for BAGA.NET, an ongoing thesis project',
        },
          {
            image: secondproject,
            title: 'Project 2',
            description: ' I design and develop the website for BAGA.NET, an ongoing thesis project',
        },
          {
            image: thirdproject,
            title: 'Project 3',
            description: ' I design and develop the website for BAGA.NET, an ongoing thesis project',
        }
    ]


  return (
    <div className=" max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-6 grid-rows-5 gap-4 mt-10  ">
         <Card className="md:col-span-8">
        <CardContent className="space-y-4 ">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {projects.map((project,index) =>(
              <Card key={index}>
                <CardContent className=''>
                  <img
                    src={project.image}
                    alt="Project Thumbnail"
                    className="rounded mb-2"
                  />
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-500">
                {project.description}
                  </p>
                </CardContent>
           </Card>
           ))}
          </div>
          </CardContent>
   </Card>
   </div>
);
}