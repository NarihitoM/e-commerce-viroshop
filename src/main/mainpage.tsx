import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface props {
    children?: ReactNode
}

const Mainpage: React.FC<props> = ({ children }) => {

    const [toggle, settoggle] = useState<Boolean>();

    const menutoggle = () => {
        settoggle((prev) => !prev);
    }
    return (
        <>
            <header className="h-10 p-8 bg-white flex justify-between items-center shadow-[0_0_10px_0_black] z-index-10">
                <h1 className="text-black text-2xl font-bold">ViroShop</h1>
                <div className=" flex">
                    <ul className=" flex flex-row gap-5 max-md:hidden">
                        <NavLink to="/home" className={({isActive}) => isActive ? "text-purple-700 font-bold" : "text-black"}>Home</NavLink>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? "text-purple-700 font-bold " : "text-black"}>Blog</NavLink>
                        <NavLink to="/features" className={({ isActive }) => isActive ? "text-purple-700 font-bold" : "text-black"}>Features</NavLink>
                    </ul>
                </div>
                <button className="md:hidden" onClick={menutoggle}>
                    {toggle ?
                        <X size={24} /> :
                        <Menu size={24} />
                    }
                </button>
                <div className={`absolute w-full bg-white top-12 left-0 md:hidden text-black flex p-5 ${toggle ? "flex flex-column justify-end" : "hidden"}`}>
                    <ul className="flex flex-col gap-3 text-end md:hidden">
                        <NavLink to="/home" className={({isActive}) => isActive ? "text-purple-700 font-bold" : "text-black"}>Home</NavLink>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? "text-purple-700 font-bold" : "text-black"}>Blog</NavLink>
                        <NavLink to="/features" className={({ isActive }) => isActive ? "text-purple-700 font-bold" : "text-black"}>Features</NavLink>
                    </ul>
                </div>
            </header>
            {children}
        </>
    )
}
export default Mainpage;