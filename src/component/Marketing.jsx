import market from "../images/market.svg";
import market1 from "../images/market1.svg";
import market2 from "../images/market2.svg";
import { FaLongArrowAltRight } from "react-icons/fa";

const Marketing = () => {
  return (
    <>
      <div className="flex flex-col justify-center text-center">
        <div className="flex justify-center">
          <h1 className=" text-center  text-[#4D4D4D] text-4xl max-xxs:text-2xl font-semibold">
            Caring is the new marketing
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="mt-2 w-[650px] text-lg text-[#717171]">
            The Nextcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-9 justify-center w-full  ">
        <div className="flex flex-col items-center mt-9">
          <img src={market} className="h-64" />
          <div className="rings w-72 flex flex-col items-center p-2 bg-white rounded-lg shadow-lg relative mt-[-75px]">
            <div className="flex flex-col justify-center items-center">
              <h1 className="w-72 text-center text-xl text-[#4D4D4D] font-semibold">
                Creating Streamlined Safeguarding Processes with OneRens
              </h1>
              <div className="flex justify-center">
                <button className="text-lg flex items-center font-bold gap-3 text-[#4CAF4F] py-2">
                  Readmore
                  <span className="text-[#4CAF4F] text-center flex">
                    <FaLongArrowAltRight className="text-base" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center  mt-9">
          <img src={market1} className="h-64" />
          <div className="rings w-[300px] flex flex-col items-center p-2 bg-white rounded-lg shadow-lg relative mt-[-75px]">
            <div className="flex  flex-col items-center">
              <h1 className="w-[257px] text-center text-xl text-[#4D4D4D] font-semibold">
                What are your safeguarding responsibilities and how can you
                manage them?
              </h1>
              <div className="flex justify-center">
                <button className="text-lg flex items-center font-bold gap-3 text-[#4CAF4F] py-2">
                  Readmore
                  <span className="text-[#4CAF4F] flex">
                    <FaLongArrowAltRight className="text-base" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center  mt-9">
          <img src={market2} className="h-64" />
          <div className="rings w-[290px] flex flex-col items-center p-2 bg-white rounded-lg shadow-lg relative mt-[-75px]">
            <div className="flex  flex-col items-center">
              <h1 className="w-[264px] text-center text-xl text-[#4D4D4D] font-semibold">
                Revamping the Membership Model with Triathlon Australia
              </h1>
              <div className="flex justify-center">
                <button className="text-lg flex items-center font-bold gap-3 text-[#4CAF4F] py-2">
                  Readmore
                  <span className="flex items-center  text-[#4CAF4F]">
                    <FaLongArrowAltRight className="text-base" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketing;
