import JoinDetails from "./content/JoinDetails";
import Sidebar from "./content/Sidebar";

const Join = () => {
  return (
    <div className="flex min-h-screen text-white">
      <Sidebar />
      <JoinDetails />
    </div>
  );
}

export default Join