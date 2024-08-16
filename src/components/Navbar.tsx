import img from "./../assets/Intersect.png";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Navbar = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="w-full hidden h-[15vh] relative z-50 sm:flex justify-between px-10 py-5 items-center">
      <div className="w-[40%] h-full px-20">
        <img
          className="w-20 h-20 hover:animate-spin"
          src={img}
          alt="not showing"
        />
      </div>

      <div className="w-[60%] h-full flex justify-between px-10 capitalize text-[20px] items-center">
        <p className="w-32 flex justify-center hover:bg-[#495e57] hover:scale-110 transition-all px-4 py-2 rounded-full cursor-pointer">
          about
        </p>
        <p className="w-32 flex justify-center hover:bg-[#495e57] hover:scale-110 transition-all px-4 py-2 rounded-full cursor-pointer">
          timelines
        </p>
        <p className="w-32 flex justify-center hover:bg-[#495e57] hover:scale-110 transition-all px-4 py-2 rounded-full cursor-pointer">
          guidelines
        </p>
        <p className="w-32 flex justify-center hover:bg-[#495e57] hover:scale-110 transition-all px-4 py-2 rounded-full cursor-pointer">
          FAQ
        </p>

        <Dialog>
          <DialogTrigger asChild>
            <div className="w-32 flex justify-center text-[20px] hover:scale-110 hover:bg-[#495e57] transition-all items-center h-10 rounded-full cursor-pointer">
              <p>login</p>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] mx-auto">
            <DialogHeader>
              <DialogTitle>{isRegister ? "Register" : "Login"}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {isRegister ? (
                <>
                  <Label htmlFor="teamName">Team Name</Label>
                  <Input id="teamName" placeholder="Enter your team name" />
                  <Label htmlFor="leaderName">Leader's Name</Label>
                  <Input id="leaderName" placeholder="Enter leader's name" />
                  <Label htmlFor="uid">UID</Label>
                  <Input id="uid" placeholder="Enter your UID" />
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <Label htmlFor="gender">Gender</Label>
                  <select
                    id="gender"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-opacity-50"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </>
              ) : (
                <>
                  <Label htmlFor="uid">UID</Label>
                  <Input id="uid" placeholder="Enter your UID" />
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                </>
              )}
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
              <button
                type="submit"
                className="w-28 flex justify-center text-[16px] bg-[#FCF2BF] transition-all items-center h-10 rounded-full cursor-pointer"
              >
                {isRegister ? "Submit" : "Login"}
              </button>
              {isRegister ? (
                <Button
                  onClick={() => setIsRegister(false)}
                  type="button"
                  className="mt-4 font-bold"
                  variant="link"
                >
                  Back to Login
                </Button>
              ) : (
                <p>
                  For new user
                  <Button
                    onClick={() => setIsRegister(true)}
                    type="button"
                    className="font-bold"
                    variant="link"
                  >
                    Register now
                  </Button>
                </p>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Navbar;
