import { FiUsers } from "react-icons/fi";
import { LiaHandshake } from "react-icons/lia";
import help2 from "../images/help2.svg";
import help3 from "../images/help3.svg";
const Helping = () => {
  return (
    <>
      <div className="flex justify-evenly  max-lx:flex-col max-lx:items-center  max-lx:gap-9">
        <div className="max-lx:text-center flex flex-col justify-center">
          <h1 className=" text-[#4D4D4D] text-4xl max-xxs:text-2xl font-semibold">
            Helping a local
            <br />{" "}
            <span className="text-[#4CAF4F]">business reinvent itself</span>
          </h1>
          <p className="mt-4 text-lg">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-9 w-1/2  max-lx:w-full max-ms:flex max-ms:flex-col max-ms:items-center">
          <div className="flex max-lx:flex max-lx:justify-center gap-5">
            <div className="text-[#4CAF4F] flex items-center">
              <FiUsers className="text-5xl max-xxs:text-4xl font-extrabold" />
            </div>
            <div className="">
              <h1 className="text-[#4D4D4D] text-4xl max-xxs:text-2xl font-semibold">
                2,245,341
              </h1>
              <p className="mt-1 text-[#717171] text-lg">Members</p>
            </div>
          </div>
          <div className="flex gap-5 max-lx:flex max-lx:justify-center">
            <div className="text-[#4CAF4F] flex items-center">
              <LiaHandshake className="text-5xl max-xxs:text-4xl font-extrabold" />
            </div>
            <div className="">
              <h1 className="text-[#4D4D4D] text-4xl max-xxs:text-2xl font-semibold">46,328</h1>
              <p className="mt-1 text-[#717171] text-lg">Clubs</p>
            </div>
          </div>
          <div className="flex gap-5 max-lx:flex max-lx:justify-center">
            <div className="text-[#4CAF4F] flex items-center">
              <img src={help2} />
            </div>
            <div className="">
              <h1 className="text-[#4D4D4D] text-4xl max-xxs:text-2xl font-semibold">828,867</h1>
              <p className="mt-1 text-[#717171] text-lg">Event Bookings</p>
            </div>
          </div>
          <div className="flex gap-5 max-lx:flex max-lx:justify-center">
            <div className="text-[#4CAF4F] flex items-center">
              <img src={help3} />{" "}
            </div>
            <div className="">
              <h1 className="text-[#4D4D4D] text-4xl max-xxs:text-2xl font-semibold">
                1,926,436
              </h1>
              <p className="mt-1 text-[#717171] text-lg">Payments</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Helping;
