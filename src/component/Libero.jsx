import { FaLongArrowAltRight } from "react-icons/fa";

const Libero = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          <h1 className="text-5xl max-xxs:text-3xl  text-center font-semibold leading-tight">
            Pellentesque suscipit <br /> fringilla libero eu.
          </h1>{" "}
        </div>
        <div className="flex justify-center">
          <button className="text-lg px-6  mt-9 rounded-md flex items-center text-white  gap-3 bg-[#4CAF4F] py-2 ">
            Get a Demo
            <span className="text-white  flex  ">
              <FaLongArrowAltRight className="text-xl font-thin" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Libero;
