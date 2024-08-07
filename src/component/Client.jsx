import React from "react";
import Logo from "../images/Logo.svg";
import Logo2 from "../images/Logo2.svg";
import Logo3 from "../images/Logo3.svg";
import Logo4 from "../images/Logo4.svg";
import Logo5 from "../images/Logo5.svg";
import Logo6 from "../images/Logo6.svg";
import Logo7 from "../images/Logo7.svg";
import ring from "../images/ring.svg";
import ring1 from "../images/ring1.svg";
import ring2 from "../images/ring2.svg";

const Client = () => {
  return (
    <>
      <div className="">
        <div className="text-center">
          <h1 className="text-[#4D4D4D] text-4xl max-xxs:text-2xl font-semibold">
            Our Clients
          </h1>
          <p className="mt-2 text-lg text-[#717171]">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="mt-9 flex flex-wrap justify-evenly max-md:justify-between">
          <img className="h-12" src={Logo} />
          <img className="h-12" src={Logo2} />
          <img className="h-12" src={Logo3} />
          <img className="h-12" src={Logo4} />
          <img className="h-12" src={Logo5} />
          <img className="h-12" src={Logo6} />
          <img className="h-12" src={Logo7} />
        </div>
        <div className="flex  flex-col justify-center text-center mt-16">
          <div className="flex justify-center">
            <h1 className=" text-center  text-[#4D4D4D] text-4xl max-xxs:text-2xl font-semibold">
              Manage your entire community in a single system
            </h1>
          </div>
          <div className="">
            <p className="mt-2 text-lg text-[#717171]">
              Who is Nextcent suitable for?
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-around mt-9  ">
          <div className="rings flex flex-col items-center p-6 bg-white rounded-lg shadow-lg max-lx:p-1 max-lg:w-fit">
            <div className="mb-4">
              <img
                className="w-24 h-24 object-cover "
                src={ring}
                alt="Ring Image"
              />
            </div>
            <div className="flex flex-col items-center mt-2">
              <h1 className="w-72 text-center text-3xl max-xxs:text-xl text-[#4D4D4D] font-semibold mb-2 ">
                Membership Organisations
              </h1>
              <p className="w-72 text-lg text-[#717171] text-center ">
                Our membership management software provides full automation of
                membership renewals and payments.
              </p>
            </div>
          </div>
          <div className="rings flex flex-col items-center p-6 bg-white rounded-lg shadow-lg max-lx:p-1  mt-9 max-lg:w-fit">
            <div className="mb-4">
              <img
                className="w-24 h-24 object-cover"
                src={ring1}
                alt="Ring Image"
              />
            </div>
            <div className="flex flex-col items-center mt-2">
              <h1 className="w-60 text-center text-3xl max-xxs:text-xl text-[#4D4D4D] font-semibold mb-2 ">
                National Associations
              </h1>
              <p className="w-72 text-lg text-[#717171] text-center ">
                Our membership management software provides full automation of
                membership renewals and payments.
              </p>
            </div>
          </div>
          <div className="rings flex flex-col items-center p-6 bg-white rounded-lg shadow-lg max-lx:p-1 max-lg:w-fit  mt-9 ">
            <div className="mb-4">
              <img
                className="w-24 h-24 object-cover"
                src={ring2}
                alt="Ring Image"
              />
            </div>
            <div className="flex flex-col items-center mt-2">
              <h1 className="w-60 text-center text-3xl max-xxs:text-xl text-[#4D4D4D] font-semibold mb-2 ">
                Clubs And Groups
              </h1>
              <p className="w-72 text-lg text-[#717171] text-center ">
                Our membership management software provides full automation of
                membership renewals and payments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Client;
