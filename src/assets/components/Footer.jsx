import logo from '../img/logo.png'
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";

export const Footer = () => {
  return (
    <>
    <footer className="w-full text-gray-700 bg-[#393939] body-font rounded-[1em] mb-[4em]">
        <div className="container flex flex-col flex-wrap items-center justify-center px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div className="flex-shrink-0 w-full md:w-64 mx-auto text-center md:mx-0 md:text-left">
                <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                <div className="flex justify-center items-center">
                    <img src={logo} alt="" className="w-[40%]" />
                </div>
                </a>
                <div className="">
                    <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                        <a className="m-2 mt-0 text-gray-500 cursor-pointer hover:text-blue-bizio">
                            <SlSocialFacebook className='w-5 h-5'/>
                        </a>
                        <a className="m-2 mt-0 text-gray-500 cursor-pointer hover:text-blue-bizio">
                            <SlSocialTwitter className='w-5 h-5'/>
                        </a>
                        <a className="m-2 mt-0 text-gray-500 cursor-pointer hover:text-blue-bizio">
                            <SlSocialLinkedin className='w-5 h-5'/>
                        </a>
                        <a className="m-2 mt-0 text-gray-500 cursor-pointer hover:text-blue-bizio">
                            <SlSocialInstagram className='w-5 h-5'/>
                        </a>
                    </span>
                </div>
            </div>
            <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:text-left">
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-blue-bizio uppercase title-font">Products</h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-white">Gaming</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-white">Graphic design</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-white">Office & others</a>
                        </li>
                    </nav>
                </div>
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-blue-bizio uppercase title-font">need help?</h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-white">Contact Support</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-white">Help Resources</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-white">Release Updates</a>
                        </li>
                    </nav>
                </div>
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-blue-bizio uppercase title-font">More info</h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-white">Terms &amp; Privacy</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-white">Pricing</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-white">FAQ</a>
                        </li>
                    </nav>
                </div>
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-blue-bizio uppercase title-font">Contact</h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-white">bizio@bizio.com</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-white">+54 012 3456 7890</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 hover:text-white">08hs-18hs (GMT-4)</a>
                        </li>
                    </nav>
                </div>
            </div>
        </div>
        <div className="bg-[#393939] text-center rounded-[1em]">
            <div className="container px-5 py-4 mx-auto text-center">
                <p className="text-sm text-white capitalize xl:text-center">© 2024 All rights reserved </p>
            </div>
        </div>
    </footer>
    </>
  )
}
