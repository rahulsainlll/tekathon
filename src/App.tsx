import "./App.css";

import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import axios from "axios";
import { Toaster } from "react-hot-toast";

// Axios
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
