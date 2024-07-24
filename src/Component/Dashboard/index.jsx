import Dashboard from "./content/Dashboard";
import Sidebar from "./content/Sidebar";

function Main() {
  return (
    <div className="flex min-h-screen text-white">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default Main;
