import Marquee from "react-fast-marquee";
import html from "../assets/logo/html.svg"
import java from "../assets/logo/Java.svg"
import c from "../assets/logo/C++.svg"
import javascript from "../assets/logo/JavaScriptt.svg"
import mysql from "../assets/logo/mysql.svg"
import css from "../assets/logo/css.svg"
import python from "../assets/logo/Python.svg"
import figma from "../assets/logo/figma.svg"
import github from "../assets/logo/github.svg"
import mongodb from "../assets/logo/mongodb.svg"
import react from "../assets/logo/react.svg"
import tailwind from "../assets/logo/tailwind.svg"
import typescript from "../assets/logo/typescript.svg"
import vite from "../assets/logo/vite.svg"
import vscode from "../assets/logo/vscode.svg"
import vercel from "../assets/logo/vercel.svg"

function Logos() {

  const logo = [
      html,
      css,
      java,
      mysql,
      python,
      c,
      javascript,
      vscode,
      react,
      typescript,
      github,
      tailwind,
      figma,
      mongodb,
      vite,
      vercel
    ]
  
  return (
   <div className="relative mt-8">
  <div className="absolute left-0 top-0 h-full w-12 z-10 bg-gradient-to-r from-white dark:from-neutral-900 to-transparent " />
  <div className="absolute right-0 top-0 h-full w-12 z-10 bg-gradient-to-l from-white dark:from-neutral-900 to-transparent " />

  <div className="overflow-x-hidden">
    <Marquee speed={30}>
      {logo.map((techStack, index) => (
        <div className="mx-2" key={index}>
          <img src={techStack} alt={`tech-${index}`} className="w-12" />
        </div>
      ))}
    </Marquee>
  </div>
</div>

  )
}

export default Logos
