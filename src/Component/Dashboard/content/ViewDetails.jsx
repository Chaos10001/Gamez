import MainBg from "../../asserts/Bg.png";
import Trophygold from "../../asserts/Trophygold.png";
import Calender from "../../asserts/Calendar.png";
import Pad from "../../asserts/Pad.png";
import Green from "../../asserts/Arrowgreen.png";


const ViewDetails = () => {
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
        <div>
          <div className="grid grid-cols-12 py-4 border-b border-solid border-[#e7e7e7] bg-[#242424] text-sm text-[#555454]">
            <div className="col-span-1">Placement</div>
            <div className="col-span-2">Player</div>
            <div className="col-span-2">Game played</div>
            <div className="col-span-2">Wins</div>
            <div className="col-span-2">Losses</div>
            <div className="col-span-1">W/L ratio</div>
            <div className="col-span-1">Point</div>
          </div>
          <div className="mt-4">
            <div className="grid grid-cols-12 mb-3 text-white">
              <div className="col-span-1 flex flex-row items-center space-x-2">
                <img src={Green} alt="" className="" /> <h1>1</h1>
              </div>
              <div className="col-span-2">Blessing </div>
              <div className="col-span-2">20</div>
              <div className="col-span-2">20</div>
              <div className="col-span-2">0</div>
              <div className="col-span-1">100%</div>
              <div className="col-span-1">49</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="grid grid-cols-12 mb-3 text-white">
              <div className="col-span-1  flex flex-row items-center space-x-2">
                <img src={Green} alt="" className="" /><h1>2</h1>
              </div>
              <div className="col-span-2">Gabriel Jesus</div>
              <div className="col-span-2">20</div>
              <div className="col-span-2">19</div>
              <div className="col-span-2">1</div>
              <div className="col-span-1">98%</div>
              <div className="col-span-1">47</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="grid grid-cols-12 mb-3 text-white">
              <div className="col-span-1 flex flex-row items-center space-x-2">
                <img src={Green} alt="" className="" /> <h1>3</h1>
              </div>
              <div className="col-span-2 ">Thompson Lukman</div>
              <div className="col-span-2">20</div>
              <div className="col-span-2">17</div>
              <div className="col-span-2">3</div>
              <div className="col-span-1">92%</div>
              <div className="col-span-1">46</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="grid grid-cols-12 mb-3 text-white">
              <div className="col-span-1 flex flex-row items-center space-x-2">
                <img src={Green} alt="" className="" /> <h1>4</h1>
              </div>
              <div className="col-span-2">Mark Gabage</div>
              <div className="col-span-2">20</div>
              <div className="col-span-2">12</div>
              <div className="col-span-2">8</div>
              <div className="col-span-1">55%</div>
              <div className="col-span-1">39</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="grid grid-cols-12 mb-3 text-white">
              <div className="col-span-1 flex flex-row items-center space-x-2">
                <img src={Green} alt="" className="" /> <h1>5</h1>
              </div>
              <div className="col-span-2">Alison Micheal</div>
              <div className="col-span-2">20</div>
              <div className="col-span-2">10</div>
              <div className="col-span-2">6</div>
              <div className="col-span-1">50%</div>
              <div className="col-span-1">34</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="grid grid-cols-12 mb-3 text-white">
              <div className="col-span-1  flex flex-row items-center space-x-2">
                <img src={Green} alt="" className="" /> <h1>6</h1>
              </div>
              <div className="col-span-2">Iris West</div>
              <div className="col-span-2">20</div>
              <div className="col-span-2">8</div>
              <div className="col-span-2">14</div>
              <div className="col-span-1">48%</div>
              <div className="col-span-1">30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
