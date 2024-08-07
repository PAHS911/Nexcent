import design from "../images/design.svg";

const Design = () => {
  return (
    <>
      <div className="flex justify-evenly max-lx:flex-col max-lx:items-center max-lx:gap-9">
        <div className="">
          <img className="h-96" src={design} />
        </div>
        <div className="w-1/2 flex flex-col justify-center max-md:w-full">
          <div>
            <h1 className=" text-[#4D4D4D] text-4xl max-xxs:text-2xl font-semibold max-lx:text-center max-lx:w-auto">
              How to design your site footer like <br /> we did{" "}
            </h1>
          </div>
          <div>
            <p className="w-fit mt-2 text-lg text-[#717171] tracking-tighter max-lx:text-center max-lx:w-auto">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
          </div>
          <div className="max-lx:flex max-lx:justify-center">
            <button className="px-6 py-2 mt-4 rounded-md text-left bg-[#4CAF4F] text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Design;
