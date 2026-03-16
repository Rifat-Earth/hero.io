import React from 'react';
import logo from '../../assets/logo.png'
import { Github, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-blue-200   rounded-lg text-base-content p-10">
            <aside>
                <img className='w-24 h-24' src={logo} alt="Not found logo" />
                <p className='font-bold  text-[#632EE3] italic'>
                    HERO.IO
                    <br />
                    Providing world class service since 1992
                </p>
            </aside>

            <nav className='mt-5'>
                <h6 className="footer-title  text-[#632EE3]">Company</h6>
                <div className='flex flex-col md:flex-row gap-4'>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Privacy & Policy</a>
                    <a className="link link-hover">Terms & Condition</a>
                </div>
            </nav>
            <form className='mt-5'>
                <h6 className="footer-title font-bold   text-[#632EE3]">HERO.IO</h6>
                <fieldset className="flex flex-col ">
                    <label>Enter your email address</label>
                    <div className="join">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="input input-bordered join-item mt-2" />
                        <button className="btn btn-primary mt-2 join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form>
            <nav className='mt-5'>
                <h6 className="footer-title text-[#632EE3]">Get in Touch</h6>
                <div className='flex gap-4'>
                    <a href='https://www.youtube.com/' target='_blank' className="link link-hover"><Youtube size={42} color="#e60a0a" /></a>
                    <a href='' className="link link-hover"><Github size={42} color="#131111" /></a>
                    <a href="" className="link link-hover"><Linkedin size={42} color="#1a20c1" /></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;