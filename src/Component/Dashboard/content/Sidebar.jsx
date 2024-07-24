import GamePad from "../../asserts/Vector.png";
import Leader from "../../asserts/leader.png";
import Token from "../../asserts/token2.png";
import LiveBet from "../../asserts/LiveBet.png";
import Content from "../../asserts/Content.png";
import Community from "../../asserts/community.png";
import Logout from "../../asserts/Logout.png";


function Sidebar() {
  return (
    <div className="w-64 bg-[#1C1C1C] p-4 mr-5">
      <nav>
        <ul>
          <li className="mb-2">
            <a
              href="#"
              className="p-2 rounded font-bold text-md bg-gray-700 flex flex-row gap-x-2 items-center"
            >
              <img src={GamePad} alt="" className="w-4 h-4" />
              Tournament
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="p-2 rounded font-bold text-md hover:bg-gray-700 flex flex-row gap-x-2 items-center"
            >
              <img src={Leader} alt="" className="w-4 h-4" />
              Leaderboards
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="p-1 rounded font-bold text-md hover:bg-gray-700 flex flex-row gap-x-2 items-center"
            >
              <img src={Token} alt="" className="w-5 h-5" />
              Token shop
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="p-2 rounded font-bold text-md hover:bg-gray-700 flex flex-row gap-x-2 items-center"
            >
              <img src={LiveBet} alt="" className="w-4 h-4" />
              Live betting
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="p-1 rounded font-bold text-md hover:bg-gray-700 flex flex-row gap-x-2 items-center"
            >
              <img src={Content} alt="" className="w-5 h-5" />
              Content locker
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="p-2 rounded font-bold text-md hover:bg-gray-700 flex flex-row gap-x-2 items-center"
            >
              <img src={Community} alt="" className="w-4 h-4" />
              Community
            </a>
          </li>
          <li className="mt-[7rem]">
            <a
              href="#"
              className="p-2 rounded font-bold text-md bg-red-700 flex flex-row gap-x-2 items-center h-[4rem]"
            >
              <img src={Logout} alt="" className="w-7 h-7" />
              LOG - OUT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
