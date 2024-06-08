import { IoHome } from "react-icons/io5";

import { TiMessage } from "react-icons/ti";
import { IoSettings } from "react-icons/io5";
import { FaStore } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";




function SideBar() {
  const[open , setOpen]=useState(true)

  const menu =[
    {name:"home",Link:"/",icon: <IoHome/>},
    {name:"cart",Link:"/cart",icon: <LuShoppingCart/>},
    {name:"store",Link:"/store",icon: <FaStore/>},
    {name:"setting",Link:"/",icon: <IoSettings/>},
    {name:"message",Link:"/",icon: <TiMessage/>},
    
  ];
  return (
  <div className={`bg-slate-700 ${open? `w-16` : `w-96  `} fixed left-0 top-0  h-screen felx translate-x-0 overflow-hidden transition-all duration-300 rounded-r-md`}>
    <div onClick={()=>{setOpen(!open)}} className="text-white flex justify-end text-5xl cursor-pointer">
    <HiMenu />
    </div>
 {
  menu.map((item)=>(
    <ul className="mt-20 text-3xl cursor-pointer hover:bg-slate-500  hover:rounded-md hover: p-3 text-white" >
      
    <Link to={item.Link}>
    <li className="text-white text-4xl">{item.icon}</li> 
    <li className={`relative left-14 bottom-10 hover:translate-x-7  ${open? `translate-x-96`:`  transition-all duration-1000  `}`}>{item.name}</li></Link>
  </ul>
  ))
 }
    
  </div>
  )
}

export default SideBar;
