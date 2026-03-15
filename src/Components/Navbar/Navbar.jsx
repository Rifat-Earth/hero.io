
import { TbBrandGithubFilled } from 'react-icons/tb';
import { NavLink } from 'react-router';
import logo from "../../assets/logo.png"

const Navbar = () => {

    const links = <>
    <NavLink to='/' className={({isActive})=> isActive? "text-[#632EE3] underline  font-bold":"font-bold "}>Home</NavLink>
     <NavLink to="/apps" className={({isActive})=> isActive? "text-[#632EE3] font-bold underline":"font-bold"}>Apps</NavLink>
      <NavLink to="/installation" className={({isActive})=> isActive? "text-[#632EE3] font-bold underline":"font-bold"}>Installation</NavLink>

    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                       {links}
                    </ul>
                </div>
                <a className=" text-xl flex gap-1 justify-center items-center font-bold  text-[#632EE3]"><img className='w-8 h-8' src={logo} alt="image not found" />HERO.IO</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a href='' className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2]"> <span className= 'bg-white p-1 rounded-full'><TbBrandGithubFilled /></span> <span className='text-white'>Contribute</span></a>
            </div>
        </div>
    );
};

export default Navbar;