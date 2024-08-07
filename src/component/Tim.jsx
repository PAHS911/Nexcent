import { FaLongArrowAltRight } from "react-icons/fa";
import tim from "../images/tim.svg";
import tim1 from "../images/tim1.svg";
import tim2 from "../images/tim2.svg";
import tim3 from "../images/tim3.svg";
import tim4 from "../images/tim4.svg";
import tim5 from "../images/tim5.svg";
import tim6 from "../images/tim6.svg";

const Tim = () => {
  return (
    <>
      <div className="flex justify-evenly max-lx:flex-col max-lx:items-center max-lx:gap-9">
        <div className="">
          <img className="h-96" src={tim} />
        </div>
        <div className="w-1/2 flex flex-col justify-center max-md:w-full">
          <div>
            <p className=" text-[#717171] text-lg font-medium ">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
          </div>
          <div>
            <p className=" text-[#4CAF4F] text-xl font-bold mt-2">Tim Smith</p>
            <p className="text-base text-[#89939E] mt-2">
              British Dragon Boat Racing Association
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-9 justify-between items-center max-w-full">
            <div className="flex-shrink-0">
              <img className="h-12" src={tim1} alt="Tim 1" />
            </div>
            <div className="flex-shrink-0">
              <img className="h-12" src={tim2} alt="Tim 2" />
            </div>
            <div className="flex-shrink-0">
              <img className="h-12" src={tim3} alt="Tim 3" />
            </div>
            <div className="flex-shrink-0">
              <img className="h-12" src={tim4} alt="Tim 4" />
            </div>
            <div className="flex-shrink-0">
              <img className="h-12" src={tim5} alt="Tim 5" />
            </div>
            <div className="flex-shrink-0">
              <img className="h-12" src={tim6} alt="Tim 6" />
            </div>
            <div className=" text-center mt-4">
              <button className="text-lg flex items-center justify-center font-bold gap-3 text-[#4CAF4F] py-2">
                Meet all customer
                <span className="text-[#4CAF4F] flex items-center">
                  <FaLongArrowAltRight className="text-base" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tim;
