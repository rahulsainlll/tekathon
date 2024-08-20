import React, { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import img from "./../assets/Path.png";
import mainImg from "./../assets/person.png";
import bush from "./../assets/bushes@2x.png";
import Navbar from "./Navbar"; 
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
function HeroSection({
  scrollToSection,
  refs,
}: {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  refs: {
    aboutRef: React.RefObject<HTMLDivElement>;
    timelinesRef: React.RefObject<HTMLDivElement>;
  };
}) {
  const [isRegister, setIsRegister] = useState(true); 
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
  const [isOpen, setIsOpen] = useState(false); // Move the state outside of handleSubmit
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically open the dialog when the component mounts
    setIsOpen(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phoneNumber);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const emailDomain = formData.email.split('@')[1];
    if (isRegister && emailDomain !== 'cuchd.in' && emailDomain !== 'gmail.com') {
      setError("Email must be from the @cuchd.in or @gmail.com domain.");
      setLoading(false);
      return;
    }

    // UID validation
    if (!/^(20|21|22|23)[A-Za-z]{3}\d{4,6}$/.test(formData.uid)) {
      setError("UID must start with 20, 21, 22, or 23, followed by three characters and 4 to 6 digits.");
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
      }
    }

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
      }

      if (isRegister) {
        alert("Registered successfully! Please login.");
        setIsRegister(false);
      } else {
        navigate("/teampannel");
      }

    } catch (err) {
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
    <div className="w-full md:h-[100vh] relative overflow-hidden">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] mx-auto mt-10 sm:mt-0 p-4 sm:p-8 max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-center text-[1.7rem] text-[#c52116]">Important instructions
            </DialogTitle>
          </DialogHeader>
          <ol className="bold-marker">
  <li>If you have registered as team lead you cannot be the team lead of another team or Member of any another team.
  </li>
  <li>Kindly register carefully. In any case once entered details cannot be changed further.
  </li>
  <li>Enter the correct gmail id so that any further information regarding the Hackathon can be passed to you later on.
  </li>
  <li>Details of team lead and team members must be correct as it will be validated later on.
  </li>
  <li>You can submit only 1 ppt for each theme and its only one PS. In Total you can submit 3 for 3 different themes and corresponding PS.</li>
</ol>

        </DialogContent>
      </Dialog>
      <Navbar scrollToSection={scrollToSection} refs={refs} />

      <img
        className="hidden sm:block absolute top-0 -right-[7%]"
        src={img}
        alt="Background decoration"
      />

      <div className="w-full h-[85vh] z-30 relative flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="w-full md:w-[50%] flex flex-col justify-center gap-5 h-[80%] text-center md:text-right px-5">
          <h1 className="uppercase text-[2rem] md:text-[5rem] tracking-wide text-[#462626] leading-none">
            tekathon 3.0
          </h1>
          <p className="font-bold tracking-wider text-center md:text-[22px] text-[14px] capitalize leading-none">
            internal hackathon for SIH 2024
          </p>
          <div
            className="w-[60%] md:w-[35%] mx-auto capitalize flex justify-center text-[10px] md:text-[20px] font-sans hover:scale-110 transition-all duration-[0.4s] text-white items-center h-10 bg-[#495e57] rounded-full"
          >
            <Dialog>
              <DialogTrigger asChild>
                <div className="w-32 flex justify-center md:text-[20px] items-center h-10 rounded-full cursor-pointer">
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
                      <Input id="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required/>
                      <Label htmlFor="uid">UID</Label>
                      <Input id="uid" value={formData.uid} onChange={handleChange} placeholder="Enter your UID" required />
                      <Label htmlFor="phoneNumber">Phone Number</Label>
                      <Input id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Enter your phone number" required/>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required/>
                      <Label htmlFor="gender">Gender</Label>
                      <select
                        id="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-opacity-50"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
                    </>
                  ) : (
                    <>
                      <Label htmlFor="uid">UID</Label>
                      <Input id="uid" value={formData.uid} onChange={handleChange} placeholder="Enter your UID" />
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
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
                      {isRegister ? "Already have an account? Login" : "Need to register? Register"}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="w-full hidden md:block md:w-[55%] h-full relative mt-10 md:mt-0 justify-center items-center">
          <img
            className="w-[80%] md:w-full h-auto scale-110 object-contain"
            src={mainImg}
            alt="Main visual"
          />
        </div>
      </div>

      <div className="absolute w-full z-40 h-[20vh] hidden md:block bottom-0 left-0">
        <img className="w-full h-full object-center" src={bush} alt="Background decoration" />
      </div>
    </div>
  );
}

export default HeroSection;
