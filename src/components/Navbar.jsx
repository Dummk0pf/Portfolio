import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="header">
            <NavLink to="/Portfolio" className="w-10 h-10 rounded-lg bg-white items-center font-bold shadow-md justify-center flex">
                <p className=" blue-gradient_text ">PM</p>
            </NavLink>
            <nav className="flex text-lg font-medium gap-7">
                <NavLink to="/Portfolio/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                    About
                </NavLink>
                <NavLink to="/Portfolio/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                    Projects
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar