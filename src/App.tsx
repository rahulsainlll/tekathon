import "./App.css";

import Home from "./pages/Home";
import TeamPanel from "./pages/TeamPanel";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import axios from "axios";
import { Toaster } from "react-hot-toast";

// Axios
axios.defaults.baseURL = "https://hackathon-backend-zeta.vercel.app/";
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/teampanel" element={<TeamPanel />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
