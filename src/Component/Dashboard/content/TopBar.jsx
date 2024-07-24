import Logo from "../../asserts/Logo.png";
import Bell from "../../asserts/Bell.png";
import Token from "../../asserts/Token.png";
import User from "../../asserts/User.png";

const TopBar = () => {
  return (
    <div className="bg-black py-5 px-5 flex flex-row justify-between items-center mb-4" >
      <div>
        <img src={Logo} alt="" />
      </div>
      <div>
        <div>
          <input
            type="text"
            placeholder="Search tournament, player name or player tag"
            className="p-2 rounded bg-[#1C1C1C] border border-gray-700 w-[31rem]"
          />
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-5">
        <div className="bg-[#1C1C1C] rounded-full">
          <img src={Bell} alt="" className="p-3" />
        </div>
        <div className="flex flex-row items-center text-white">
          <img src={Token} alt="" />
          <h2>20,0000</h2>
        </div>
        <div className="flex flex-row items-center gap-x-4">
          <div className="bg-[#1C1C1C] rounded-full">
            <img src={User} alt="" className="p-3" />
          </div>
          <div className="text-white">
            <h2>Akinola Olalekan</h2>
            <select name="" id="" className="bg-green-600 h-7 w-20">
              <option value="">Online</option>
              <option value="">Offline</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
