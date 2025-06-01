
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input'

export default function BentoPortfolio() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-6 grid-rows-3 gap-4 mt-10  ">
     {/* About */}
<Card className="md:col-span-4 row-span-2 flex flex-col justify-between">
  <div>
    <CardContent className="space-y-4 ">
      <h2 className="text-xl font-bold">About</h2>
      <p>
        I'm a full-stack software engineer specializing in developing solutions with
        JavaScript, Python, and PHP. I work on projects including building modern
        websites, web applications, mobile apps, search engine optimization, digital
        marketing, and making code tutorials.
      </p>
      <p>
        I've helped startups and MSMEs grow and streamline their processes through
        software solutions. I’ve also built a community of over 200,000 developers
        sharing knowledge and mentorship.
      </p>
    </CardContent>
  </div>
</Card>

  {/* Mantra */}
 <Card className="row-start-3 md:col-span-4">
  <div>
    <CardContent className="pt-0">
      <p className="italic text-sm text-gray-500">
        "Empowered by faith, driven by discipline, refined by every line of code."
        <br />– Self Mantra
      </p>
    </CardContent>
  </div>
  </Card>



      {/* Experience */}
      <Card className="md:col-span-2 row-span-3">
        <CardContent className="space-y-2">
          <h2 className="text-xl font-bold">Experience</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>IT and Infrastructure</strong> - Led the complete revamp of company’s
              website, handling both frontend and backend development.
            </li>
            <li>
              <strong>Frontend Developer Trainee</strong> - Contributed in building the FliPass system
              for Edufied, collaborating remotely with an experienced team.
            </li>
            <li>
              <strong>Freelancer</strong> - Catered various programming activities/projects using Java,
              Python, Django, and others.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Projects */}
      <Card className="md:col-span-6">
        <CardContent className="space-y-4 ">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <Card key={i}>
                <CardContent className=''>
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Project Thumbnail"
                    className="rounded mb-2"
                  />
                  <h3 className="font-semibold">DotGenerate</h3>
                  <p className="text-sm text-gray-500">
                    A simple personal project to enhance MERN skills and perform CRUD
                    functionalities. It generates project ideas to inspire developers.
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
            <a href="#"><img src="/linkedin.svg" alt="LinkedIn" className="h-6" /></a>
            <a href="#"><img src="/instagram.svg" alt="Instagram" className="h-6" /></a>
            <a href="#"><img src="/github.svg" alt="GitHub" className="h-6" /></a>
          </div>
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card className="md:col-span-2">
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
