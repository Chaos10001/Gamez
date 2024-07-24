import ViewDetails from "./content/ViewDetails";
import Sidebar from "./content/Sidebar";

function View() {
  return (
    <div className="flex min-h-screen text-white">
      <Sidebar />
      <ViewDetails />
    </div>
  );
}

export default View;
