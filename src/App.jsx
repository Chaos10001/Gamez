import { Route, Routes } from "react-router-dom";
import Main from "./Component/Dashboard";
import TopBar from "./Component/Dashboard/content/TopBar";
import View from "./Component/Dashboard/View";
import Join from "./Component/Dashboard/Join";

function App() {
  return (
    <div>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/viewdetails" element={<View />} />
        <Route path="/joindetails" element={<Join />} />
      </Routes>
    
    </div>
  );
}

export default App;
