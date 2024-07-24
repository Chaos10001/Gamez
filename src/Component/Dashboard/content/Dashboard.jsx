import MainImg from "../../asserts/MainImg.png";
import User from "../../asserts/User.png";
import Play from "../../asserts/Play.png";
import MainBg from "../../asserts/image1.png";
import Calender from "../../asserts/Calendar.png";
import Trophygrey from "../../asserts/Trophygrey.png";
import Pad from "../../asserts/Pad.png";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex-1 p-4">
      <main>
        <div className="mb-8 bg-[#1C1C1C] px-4 py-7 flex flex-row justify-between items-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold mb-2">Setup your profile</h2>
            <p className="text-gray-400">
              Complete your information to get access to tournaments and other
              premium features
            </p>
            <button className="bg-[#8BC72F] text-black font-bold px-4 py-2 rounded flex flex-row items-center">
              <img src={User} alt="" />
              Complete profile
            </button>
          </div>
          <div>
            <img src={MainImg} alt="" />
          </div>
        </div>
        <div className="flex flex-row space-x-2">
          <div className="mb-8 bg-[#1C1C1C] px-4 py-7 flex flex-row justify-between items-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold mb-2">Continue playing</h2>
              <p className="text-gray-400">
                Start or esume tournaments you have registered for
              </p>
              <div className="flex flex-row font-bold">
                <img src={Play} alt="" />
                <h2>Continue playing</h2>
              </div>
            </div>
            <div>
              <img src={MainImg} alt="" />
            </div>
          </div>
          <div className="mb-8 bg-[#1C1C1C] px-4 py-7 flex flex-row justify-between items-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold mb-2">Quick match</h2>
              <p className="text-gray-400">
                Create a tournament and invite friends to play
              </p>
              <div className="flex flex-row font-bold">
                <img src={Play} alt="" />
                <h2>Let&apos;s go</h2>
              </div>
            </div>
            <div>
              <img src={MainImg} alt="" />
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Tournaments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-[#1C1C1C] rounded">
              <img
                src={MainBg}
                alt="Tournament"
                className="mb-4 rounded w-full"
              />
              <div className="px-2">
                <h3 className="text-lg font-bold mb-2">Call of Duty</h3>
                <div className="flex flex-row items-center justify-between mb-4 text-gray-400">
                  <div>
                    <div className="flex flex-row items-center space-y-2">
                      <img src={Calender} alt="" />
                      <h1>10 Feb 2023</h1>
                    </div>
                    <div className="flex flex-row items-center space-y-2">
                      <img src={Calender} alt="" />
                      <h1>4v4</h1>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center space-y-2">
                      <img src={Calender} alt="" />
                      <h1>Free-to-play</h1>
                    </div>
                    <div className="flex flex-row items-center space-y-2">
                      <img src={Calender} alt="" />
                      <h1>10/48</h1>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1C1C1C] w-[7rem] rounded-full">
                  <div className="flex flex-row items-center space-x-2 p-2">
                    <img src={Trophygrey} alt="" className="w-6 h-6" />
                    <h1>N10,000</h1>
                  </div>
                </div>
                <div className="space-y-3 mb-2">
                  <Link to="/joindetails">
                    <button className="bg-[#8BC72F] mb-3 text-black font-bold px-4 py-2 w-full justify-center rounded flex flex-row items-center space-x-2">
                      <img src={Pad} alt="" className="w-4 h-3" />
                      <h1>Join tournament</h1>
                    </button>
                  </Link>
                  <Link to="/viewdetails">
                    <button className="text-black border-[#4A4A4A] border-2 bg-transparent font-bold px-4 py-2 w-full justify-center rounded flex flex-row items-center space-x-2">
                      <img src={Pad} alt="" className="w-4 h-3" />
                      <h1>View Details</h1>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-[#1C1C1C] rounded">
              <img
                src={MainBg}
                alt="Tournament"
                className="mb-4 rounded w-full"
              />
              <div className="px-2">
                <h3 className="text-lg font-bold mb-2">Call of Duty</h3>
                <div className="flex flex-row items-center justify-between mb-4 text-gray-400">
                  <div>
                    <div className="flex flex-row items-center space-y-2">
                      <img src={Calender} alt="" />
                      <h1>10 Feb 2023</h1>
                    </div>
                    <div className="flex flex-row items-center space-y-2">
                      <img src={Calender} alt="" />
                      <h1>4v4</h1>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center space-y-2">
                      <img src={Calender} alt="" />
                      <h1>Free-to-play</h1>
                    </div>
                    <div className="flex flex-row items-center space-y-2">
                      <img src={Calender} alt="" />
                      <h1>10/48</h1>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1C1C1C] w-[7rem] rounded-full">
                  <div className="flex flex-row items-center space-x-2 p-2">
                    <img src={Trophygrey} alt="" className="w-6 h-6" />
                    <h1>N10,000</h1>
                  </div>
                </div>
                <div className="space-y-3 mb-2">
                  <Link to="/joindetails">
                    <button className="bg-[#8BC72F] mb-3 text-black font-bold px-4 py-2 w-full justify-center rounded flex flex-row items-center space-x-2">
                      <img src={Pad} alt="" className="w-4 h-3" />
                      <h1>Join tournament</h1>
                    </button>
                  </Link>
                  <Link to="/viewdetails">
                    <button className="text-black border-[#4A4A4A] border-2 bg-transparent font-bold px-4 py-2 w-full justify-center rounded flex flex-row items-center space-x-2">
                      <img src={Pad} alt="" className="w-4 h-3" />
                      <h1>View Details</h1>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-[#1C1C1C] rounded">
              <img
                src={MainBg}
                alt="Tournament"
                className="mb-4 rounded w-full"
              />
              <div className="px-2">
                <h3 className="text-lg font-bold mb-2">Call of Duty</h3>
                <div className="flex flex-row items-center justify-between mb-4 text-gray-400">
                  <div>
                    <div className="flex flex-row items-center space-y-2">
                      <img src={Calender} alt="" />
                      <h1>10 Feb 2023</h1>
                    </div>
                    <div className="flex flex-row items-center space-y-2">
                      <img src={Calender} alt="" />
                      <h1>4v4</h1>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center space-y-2">
                      <img src={Calender} alt="" />
                      <h1>Free-to-play</h1>
                    </div>
                    <div className="flex flex-row items-center space-y-2">
                      <img src={Calender} alt="" />
                      <h1>10/48</h1>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1C1C1C] w-[7rem] rounded-full">
                  <div className="flex flex-row items-center space-x-2 p-2">
                    <img src={Trophygrey} alt="" className="w-6 h-6" />
                    <h1>N10,000</h1>
                  </div>
                </div>
                <div className="space-y-3 mb-2">
                  <Link to="/joindetails">
                    <button className="bg-[#8BC72F] mb-3 text-black font-bold px-4 py-2 w-full justify-center rounded flex flex-row items-center space-x-2">
                      <img src={Pad} alt="" className="w-4 h-3" />
                      <h1>Join tournament</h1>
                    </button>
                  </Link>
                  <Link to="/viewdetails">
                    <button className="text-black border-[#4A4A4A] border-2 bg-transparent font-bold px-4 py-2 w-full justify-center rounded flex flex-row items-center space-x-2">
                      <img src={Pad} alt="" className="w-4 h-3" />
                      <h1>View Details</h1>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-[#1C1C1C] rounded">
              <img
                src={MainBg}
                alt="Tournament"
                className="mb-4 rounded w-full"
              />
              <div className="px-2">
                <h3 className="text-lg font-bold mb-2">Call of Duty</h3>
                <div className="flex flex-row items-center justify-between mb-4 text-gray-400">
                  <div>
                    <div className="flex flex-row items-center space-y-2">
                      <img src={Calender} alt="" />
                      <h1>10 Feb 2023</h1>
                    </div>
                    <div className="flex flex-row items-center space-y-2">
                      <img src={Calender} alt="" />
                      <h1>4v4</h1>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center space-y-2">
                      <img src={Calender} alt="" />
                      <h1>Free-to-play</h1>
                    </div>
                    <div className="flex flex-row items-center space-y-2">
                      <img src={Calender} alt="" />
                      <h1>10/48</h1>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1C1C1C] w-[7rem] rounded-full">
                  <div className="flex flex-row items-center space-x-2 p-2">
                    <img src={Trophygrey} alt="" className="w-6 h-6" />
                    <h1>N10,000</h1>
                  </div>
                </div>
                <div className="space-y-3 mb-2">
                  <Link to="/joindetails">
                    <button className="bg-[#8BC72F] mb-3 text-black font-bold px-4 py-2 w-full justify-center rounded flex flex-row items-center space-x-2">
                      <img src={Pad} alt="" className="w-4 h-3" />
                      <h1>Join tournament</h1>
                    </button>
                  </Link>
                  <Link to="/viewdetails">
                    <button className="text-black border-[#4A4A4A] border-2 bg-transparent font-bold px-4 py-2 w-full justify-center rounded flex flex-row items-center space-x-2">
                      <img src={Pad} alt="" className="w-4 h-3" />
                      <h1>View Details</h1>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-[#1C1C1C] rounded">
              <img
                src={MainBg}
                alt="Tournament"
                className="mb-4 rounded w-full"
              />
              <div className="px-2">
                <h3 className="text-lg font-bold mb-2">Call of Duty</h3>
                <div className="flex flex-row items-center justify-between mb-4 text-gray-400">
                  <div>
                    <div className="flex flex-row items-center space-y-2">
                      <img src={Calender} alt="" />
                      <h1>10 Feb 2023</h1>
                    </div>
                    <div className="flex flex-row items-center space-y-2">
                      <img src={Calender} alt="" />
                      <h1>4v4</h1>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center space-y-2">
                      <img src={Calender} alt="" />
                      <h1>Free-to-play</h1>
                    </div>
                    <div className="flex flex-row items-center space-y-2">
                      <img src={Calender} alt="" />
                      <h1>10/48</h1>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1C1C1C] w-[7rem] rounded-full">
                  <div className="flex flex-row items-center space-x-2 p-2">
                    <img src={Trophygrey} alt="" className="w-6 h-6" />
                    <h1>N10,000</h1>
                  </div>
                </div>
                <div className="space-y-3 mb-2">
                  <Link to="/joindetails">
                    <button className="bg-[#8BC72F] mb-3 text-black font-bold px-4 py-2 w-full justify-center rounded flex flex-row items-center space-x-2">
                      <img src={Pad} alt="" className="w-4 h-3" />
                      <h1>Join tournament</h1>
                    </button>
                  </Link>
                  <Link to="/viewdetails">
                    <button className="text-black border-[#4A4A4A] border-2 bg-transparent font-bold px-4 py-2 w-full justify-center rounded flex flex-row items-center space-x-2">
                      <img src={Pad} alt="" className="w-4 h-3" />
                      <h1>View Details</h1>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-[#1C1C1C] rounded">
              <img
                src={MainBg}
                alt="Tournament"
                className="mb-4 rounded w-full"
              />
              <div className="px-2">
                <h3 className="text-lg font-bold mb-2">Call of Duty</h3>
                <div className="flex flex-row items-center justify-between mb-4 text-gray-400">
                  <div>
                    <div className="flex flex-row items-center space-y-2">
                      <img src={Calender} alt="" />
                      <h1>10 Feb 2023</h1>
                    </div>
                    <div className="flex flex-row items-center space-y-2">
                      <img src={Calender} alt="" />
                      <h1>4v4</h1>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center space-y-2">
                      <img src={Calender} alt="" />
                      <h1>Free-to-play</h1>
                    </div>
                    <div className="flex flex-row items-center space-y-2">
                      <img src={Calender} alt="" />
                      <h1>10/48</h1>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1C1C1C] w-[7rem] rounded-full">
                  <div className="flex flex-row items-center space-x-2 p-2">
                    <img src={Trophygrey} alt="" className="w-6 h-6" />
                    <h1>N10,000</h1>
                  </div>
                </div>
                <div className="space-y-3 mb-2">
                  <Link to="/joindetails">
                    <button className="bg-[#8BC72F] mb-3 text-black font-bold px-4 py-2 w-full justify-center rounded flex flex-row items-center space-x-2">
                      <img src={Pad} alt="" className="w-4 h-3" />
                      <h1>Join tournament</h1>
                    </button>
                  </Link>
                  <Link to="/viewdetails">
                    <button className="text-black border-[#4A4A4A] border-2 bg-transparent font-bold px-4 py-2 w-full justify-center rounded flex flex-row items-center space-x-2">
                      <img src={Pad} alt="" className="w-4 h-3" />
                      <h1>View Details</h1>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
