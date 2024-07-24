import MainBg from "../../asserts/Bg.png";
import Trophygold from "../../asserts/Trophygold.png";
import Calender from "../../asserts/Calendar.png";
import Pad from "../../asserts/Pad.png";
import Fixture from "../../asserts/Fixture.png";

const JoinDetails = () => {
  return (
    <div className="flex-1 p-4">
      <div className="space-y-4">
        <img src={MainBg} alt="" />
        <h1 className="text-2xl font-bold text-white">Call of duty</h1>
        <div className="bg-[#1C1C1C] w-[7rem] rounded-full">
          <div className="flex flex-row items-center space-x-2 p-2 text-gray-400">
            <img src={Trophygold} alt="" className="w-6 h-6"></img>
            <h1>N10,000</h1>
          </div>
        </div>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <div className="flex flex-row items-center text-gray-400 space-x-3">
          <div className="flex flex-row items-center">
            <img src={Calender} alt="" />
            <h1>10 Feb 2023</h1>
          </div>
          <div className="flex flex-row items-center">
            <img src={Calender} alt="" />
            <h1>4v4</h1>
          </div>

          <div className="flex flex-row items-center">
            <img src={Calender} alt="" />
            <h1>Free-to-play</h1>
          </div>
          <div className="flex flex-row items-center">
            <img src={Calender} alt="" />
            <h1>10/48</h1>
          </div>
        </div>
        <button className="bg-[#8BC72F] text-black font-bold px-4 py-2 justify-center rounded flex flex-row items-center space-x-2">
          <img src={Pad} alt="" className="w-4 h-3" />
          <h1>Join tournament</h1>
        </button>
      </div>
      <div className="mt-6">
        <h1 className="font-bold text-2xl">Tournament information</h1>
        <div className="space-x-2 mt-4">
          <button className="bg-[#3B3B3B] p-3">Leaderboard</button>
          <button className="bg-[#141414] p-3 w-[9rem]">Fixtures</button>
        </div>
        <div className="mt-6">
            <img src={Fixture} alt="" />
        </div>
      </div>
    </div>
  );
};

export default JoinDetails;
