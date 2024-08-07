import React from "react";
import footer from "../images/footer.svg";
import send from "../images/send.svg";
import { FaInstagram } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="text-white flex justify-evenly max-gl:flex-col">
        <div className="">
          <div className="flex  items-center gap-1">
            <img className="h-7" src={footer} />
            <h1 className="text-3xl font-extrabold text-white ">Nexcent</h1>
          </div>
          <div className="py-12">
            <p>Copyright © 2020 Landify UI Kit.</p>

            <p>All rights reserved</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-[#717171] rounded-full p-2 text-2xl">
              <a target="_blank" href="https://www.instagram.com/">
                <FaInstagram className="" />
              </a>
            </div>
            <div className="bg-[#717171] rounded-full text-2xl p-2">
              <a target="_blank" href="https://www.nba.com/">
                <IoBasketballOutline className="" />
              </a>
            </div>
            <div className="bg-[#717171] flex items-center rounded-full text-xl p-2">
              <a target="_blank" href="https://x.com/?lang=en">
                <FaTwitter className="" />
              </a>
            </div>
            <div className="bg-[#717171] flex items-center  rounded-full text-xl p-2">
              <a target="_blank" href="https://www.youtube.com/s">
                <FaYoutube className="" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex max-gl:mt-16 max-gl:flex-wrap   max-md:gap-10    gap-40">
          <div className="">
            <div className="">
              <h1 className="text-xl font-extrabold mb-5 ">Company</h1>
            </div>
            <div className="">
              <ul className=" text-[#F5F7FA] ">
                <li className="py-1">About us</li>
                <li className="py-1">Blog</li>
                <li className="py-1">Contact us</li>
                <li className="py-1">Pricing</li>
                <li className="py-1">Testimonials</li>
              </ul>
            </div>
          </div>
          <div className="">
            <h1 className="text-xl font-extrabold mb-5">Support</h1>
            <ul className=" text-[#F5F7FA] max-h-fit">
              <li className="py-1">Help center</li>
              <li className="py-1">Terms of service</li>
              <li className="py-1">Legal</li>
              <li className="py-1">Privacy policy</li>
              <li className="py-1">Status</li>
            </ul>
          </div>
          <div className="">
            <div className="">
              <h1 className="text-xl font-extrabold mb-5">Stay up to date </h1>
            </div>
            <div className="bg-[#717171] flex p-2 rounded-xl border-spacing-5 border-black">
              <input
                className="bg-[#717171] outline-0 deceration-none text-[#E1D9DE]"
                placeholder="Your email address"
              ></input>{" "}
              <span>
                <img src={send} className=""></img>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
