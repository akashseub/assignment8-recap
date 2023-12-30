// import { useEffect } from "react";

import { NavLink } from "react-router-dom";


const Navbar = () => {

    // useEffect(() => {
    //     fetch('data.json')
    //         .then(res=> res.json())
    //         .then(data => console.log(data))
    // },[])

    const navLinks = <>
        <NavLink><li>Home</li></NavLink>
        <NavLink><li>Donation</li></NavLink>
        <NavLink><li>Statistics</li></NavLink>
    </>

    return (
        <div className="lg: max-w-7xl mx-auto pt-8">
            <div className="navbar  flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img className="w-36" src="https://i.ibb.co/gZ5PpBn/Logo.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;