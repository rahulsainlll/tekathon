import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/auth/authContext";

const AuthDialog = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    teamName: "",
    name: "",
    uid: "",
    phoneNumber: "",
    email: "",
    gender: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth(); // Call useAuth hook here

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  const validatePhoneNumber = (phoneNumber:string) => {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phoneNumber);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const emailDomain = formData.email.split('@')[1];
    if (isRegister && emailDomain !== 'cuchd.in') {
      setError("Email must be from the @cuchd.in domain.");
      setLoading(false);
      return;
    }
  
    // UID validation
    if (formData.uid.length !== 10) {
      setError("UID must be exactly 10 digits.");
      setLoading(false);
      return;
    }
    if (isRegister && !formData.gender) {
      setError("Gender is required.");
      setLoading(false);
      return;
    }
  
    if (isRegister && formData.phoneNumber) {
      if (!validatePhoneNumber(formData.phoneNumber)) {
      setError("Phone number must be exactly 10 digits.");
      setLoading(false);
      return;
    }}
    try {
      const endpoint = isRegister ? "/auth/register/lead" : "/auth/login";
      
      const payload = isRegister 
        ? {
            ...formData,
            role: "team_lead",
            ...(formData.teamName && { teamName: formData.teamName })
          }
        : formData;

      const response = await axios.post(endpoint, payload);
      
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        setIsAuthenticated(true); // Use setIsAuthenticated here
      }

      if (isRegister) {
        alert("Registered successfully! Please login.");
        setIsRegister(false);
      } else {
        navigate("/teampannel");
      }
    } catch (err) {
      console.error("Caught error:", err);
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "An error occurred");
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-32 flex justify-center md:text-[20px] hover:scale-110 hover:bg-[#495e57] transition-all items-center h-10 rounded-full cursor-pointer">
          <p>{isRegister ? "Register" : "Login"}</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] mx-auto">
        <DialogHeader>
          <DialogTitle>{isRegister ? "Register" : "Login"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          {isRegister ? (
            <>
              <Label htmlFor="teamName">Team Name</Label>
              <Input id="teamName" value={formData.teamName} onChange={handleChange} placeholder="Enter your team name" required/>
              <Label htmlFor="name">Leader Name</Label>
              <Input id="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
              <Label htmlFor="uid">UID</Label>
              <Input id="uid" value={formData.uid} onChange={handleChange} placeholder="Enter your UID" required/>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Enter your phone number" required/>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
              <Label htmlFor="gender">Gender</Label>
              <select
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-opacity-50"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" required />
            </>
          ) : (
            <>
              <Label htmlFor="uid">UID</Label>
              <Input id="uid" value={formData.uid} onChange={handleChange} placeholder="Enter your UID" required/>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" required/>
            </>
          )}
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex flex-col justify-center items-center mt-4">
            <button
              type="submit"
              className="w-28 flex justify-center text-[16px] bg-[#FCF2BF] transition-all items-center h-10 rounded-full cursor-pointer"
              disabled={loading}
            >
              {loading ? "Loading..." : isRegister ? "Submit" : "Login"}
            </button>
            <Button
              onClick={() => setIsRegister(!isRegister)}
              type="button"
              className="mt-4 font-bold"
              variant="link"
            >
              {isRegister ? "Back to Login" : "Register Now"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
