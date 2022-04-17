import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar/navBar";

import SleepTrackerRoutes from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <SleepTrackerRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
