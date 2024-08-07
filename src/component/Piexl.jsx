import pixel from "../images/pixel.svg";

const Piexl = () => {
  return (
    <>
      <div className="flex justify-evenly max-lx:flex-col max-lx:items-center">
        <div className="">
          <img className="h-96" src={pixel} />
        </div>
        <div className="w-1/2 flex flex-col justify-center max-md:w-full">
          <div>
            <h1 className=" text-[#4D4D4D] text-4xl max-xxs:text-2xl font-semibold max-lx:text-center max-lx:w-auto">
              The unseen of spending three <br /> years at Pixelgrade
            </h1>
          </div>
          <div>
            <p className="w-fit mt-2 text-lg text-[#717171] tracking-tighter max-lx:text-center  max-lx:w-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
          </div>
          <div className="max-lx:flex max-lx:justify-center">
            <button className="px-6 py-2 mt-4 rounded-md text-left bg-[#4CAF4F] text-white ">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Piexl;
