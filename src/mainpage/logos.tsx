import html from "../assets/logo/html.png"
import java from "../assets/logo/Java.png"
import c from "../assets/logo/C++.png"
import javascript from "../assets/logo/Javascript.png"
import mysql from "../assets/logo/mysql.png"
import css from "../assets/logo/css.png"
import figma from "../assets/logo/Figma.png"
import github from "../assets/logo/github2.png"
import mongodb from "../assets/logo/mongodb.png"
import python from "../assets/logo/Python.png"
import react from "../assets/logo/React.png"
import tailwind from "../assets/logo/tailwind.png"
import typescript from "../assets/logo/Typescript.png"
import vite from "../assets/logo/vite.png"
import vscode from "../assets/logo/vscode.png"
import vercel from "../assets/logo/vercel.png"

function Logos() {
  return (
    <div className="flex flex-row  gap-4 p-2 mt-8  overflow-x-auto">
        <img src={html} alt=""></img>
        <img src={c} alt=""></img>
        <img src={java} alt=""></img>
          <img src={react} alt=""></img>
        <img src={tailwind} alt=""></img>
        <img src={javascript} alt=""></img>
        <img src={mysql} alt=""></img>
         <img src={vite} alt=""></img>
          <img src={css} alt=""></img>
        <img src={figma} alt=""></img>
        <img src={mongodb} alt=""></img>
        <img src={javascript} alt=""></img>
         <img src={python} alt=""></img>
        <img src={typescript} alt=""></img>
         <img src={vercel} alt=""></img>
        <img src={vscode} alt=""></img>
        <img src={github} alt=""></img>
        
       
        
      
    </div>
  )
}

export default Logos
