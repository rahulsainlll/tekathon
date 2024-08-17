import "./App.css";
import Home from "./pages/Home";
import TeamPanel from "./pages/TeamPanel";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./auth/authContext";
import ProtectedRoute from "./auth/protectedRoute";

// Axios configuration
axios.defaults.baseURL = "https://hackathon-backend-zeta.vercel.app/";
axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Public route */}
          <Route
            path="/teampannel"
            element={
              <ProtectedRoute>
                <TeamPanel />
              </ProtectedRoute>
            } 
          /> {/* Protected route */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
