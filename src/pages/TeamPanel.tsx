import { useEffect, useState } from "react";
import axios from "axios";
import img from "../assets/Intersect.png";
import Loader from "../components/ui/Loader";

const TeamPanel = () => {
  const [teamData, setTeamData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [newMembers, setNewMembers] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [selectedProblemStatement, setSelectedProblemStatement] = useState<string>("");
  const [selectedtheme, setSelectedtheme] = useState<string>("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axios.get("/team", { headers });
        setTeamData(response.data);
        setSelectedProblemStatement(response.data.team?.problem_statement || "");
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <Loader />;

  if (error) return <p className="text-red-500 text-center">{error}</p>;

  const members = teamData?.team?.members || [];
  const previousSubmissions = teamData?.submissions || [];
  const areFieldsEditable = members.length === 0;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, index?: number) => {
    const { name, value } = event.target;
    if (index !== undefined) {
      setNewMembers(prevState => {
        const updatedMembers = [...prevState];
        updatedMembers[index] = { ...updatedMembers[index], [name]: value };
        return updatedMembers;
      });
    } else if (event.target.name === "problem_statement") {
      setSelectedProblemStatement(value);
    }
    else if (event.target.name === "theme") {
      setSelectedtheme(value);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files ? event.target.files[0] : null);
  };

  const handleFileUpload = async () => {
    if (!file) return;

    if (!selectedProblemStatement && !selectedtheme) {
      alert("Problem statement and Theme is required.");
      return;
    }
    setIsLoading(true);
    const reader = new FileReader();
    reader.onload = async function () {
      if (typeof reader.result === "string") {
        const fileBase64 = reader.result.split(",")[1];
        const token = localStorage.getItem("authToken");

        const formData = new FormData();
        formData.append("problem_statement", selectedProblemStatement);
        formData.append("theme", selectedtheme);
        formData.append(
          "file",
          new Blob([fileBase64], { type: file.type }),
          file.name
        );

        try {
          const response = await axios.post("/team/ppt", formData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          });

          alert(response.data.message);
          window.location.reload();
        } catch (err) {
          console.error("File upload failed", err);
          setError("Failed to upload file");
        } finally {
          setIsLoading(false);
        }
      }
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (members.length === 0) {
      setIsSubmitting(true);

      try {
        const payload = {
          members: newMembers,
        };
        const token = localStorage.getItem('authToken');
        const headers = {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        };
        const response = await axios.post("/team/members", payload, {
          headers
        });

        setTeamData((prevData: { team: any; }) => ({
          ...prevData,
          team: {
            ...prevData.team,
            members: response.data.members
          }
        }));

        alert("Added Successfully");
        window.location.reload();

      } catch (err) {
        setError("Failed to post data");
      } finally {
        setIsSubmitting(false);
      }
    } else if (file) {
      await handleFileUpload();
    }
  };

  const totalMembers = 5;
  const currentMembers = members.length;
  const additionalMembersCount = Math.max(0, totalMembers - currentMembers);
  return (
    <div className="w-full bg-[#fffff] min-h-screen overflow-x-hidden flex flex-col">
      {isSubmitting && <Loader />}
      <header className="w-full h-[14vh] flex flex-col md:flex-row mb-8 justify-between items-center bg-[#fffff] text-[#ffe668] px-6 py-4">
      <div className="flex justify-center md:justify-start">
          <img
            className="w-14 h-14 md:w-20 md:h-20 cursor-pointer"
            src={img}
            alt="Logo"
            onClick={() => (window.location.href = "/")}
          />
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-xl bg-[#2d3748] hover:bg-[#4a5568]">
            Guidelines
          </button>
          
        </div>
      </header>

      <main className="w-full flex flex-col items-center justify-center flex-grow">
        <div className="w-full md:w-[90%] lg:w-[80%] bg-[#2d3748] text-white rounded-xl p-6">
          <h1 className="text-center text-2xl md:text-3xl font-bold text-[#ffe668] mb-6">TeamLeader Panel</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                className="w-full md:flex-1 px-4 py-3 rounded-xl bg-[#4a5568] text-white placeholder-gray-400"
                type="text"
                placeholder="Team name"
                value={teamData?.team?.name || ""}
                onChange={handleChange}
                readOnly={!areFieldsEditable}
              />
              <input
                className="w-full md:flex-1 px-4 py-3 rounded-xl bg-[#4a5568] text-white placeholder-gray-400"
                type="text"
                placeholder="Leader's uid"
                value={teamData?.team?.lead_id || ""}
                onChange={handleChange}
                readOnly={!areFieldsEditable}
              />
              <select
                className="w-full md:flex-1 px-4 py-3 rounded-xl bg-[#4a5568] text-white"
                name="problem_statement"
                value={selectedProblemStatement}
                onChange={handleChange}
              >
                <option value="" hidden>
                  Choose Problem Statement
                </option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
              <select
                className="w-full md:flex-1 px-4 py-3 rounded-xl bg-[#4a5568] text-white"
                name="theme"
                value={selectedtheme}
                onChange={handleChange}
              >
                <option value="" hidden>
                  Choose theme
                </option>
                <option value="Dark">Dark</option>
                <option value="ColourFull">ColourFull</option>
                <option value="Hii">Hii</option>
              </select>
            </div>

            <h2 className="text-lg md:text-xl font-semibold text-[#ffe668]">Register Members</h2>
            {members.map((member: any, index: number) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-6">
                <input
                  className="w-full px-4 py-3 rounded-xl bg-[#4a5568] text-white"
                  type="text"
                  value={member.name}
                  readOnly
                />
                <input
                  className="w-full px-4 py-3 rounded-xl bg-[#4a5568] text-white"
                  type="text"
                  value={member.uid}
                  readOnly
                />
                <input
                  className="w-full px-4 py-3 rounded-xl bg-[#4a5568] text-white"
                  type="email"
                  value={member.email}
                  readOnly
                />
                <input
                  className="w-full px-4 py-3 rounded-xl bg-[#4a5568] text-white"
                  type="text"
                  value={member.phoneNumber}
                  readOnly
                />
                <input
                  className="w-full px-4 py-3 rounded-xl bg-[#4a5568] text-white"
                  type="text"
                  value={member.gender}
                  readOnly
                />
              </div>
            ))}
            {members.length === 0 && (
              <div className="flex flex-col gap-4">
                {[...Array(additionalMembersCount)].map((_, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-4">
                    <input
                      className="w-full px-4 py-3 rounded-xl bg-[#4a5568] text-white placeholder-gray-400"
                      type="text"
                      placeholder={`Member ${index + 1} Name`}
                      value={newMembers[index]?.name || ""}
                      onChange={(e) => handleChange(e, index)}
                      name="name"
                      required
                    />
                    <input
                      className="w-full px-4 py-3 rounded-xl bg-[#4a5568] text-white placeholder-gray-400"
                      type="text"
                      placeholder={`Member ${index + 1} UID`}
                      value={newMembers[index]?.uid || ""}
                      onChange={(e) => handleChange(e, index)}
                      name="uid"
                      required
                    />
                    <input
                      className="w-full px-4 py-3 rounded-xl bg-[#4a5568] text-white placeholder-gray-400"
                      type="email"
                      placeholder={`Member ${index + 1} Email`}
                      value={newMembers[index]?.email || ""}
                      onChange={(e) => handleChange(e, index)}
                      name="email"
                      required
                    />
                    <input
                      className="w-full px-4 py-3 rounded-xl bg-[#4a5568] text-white placeholder-gray-400"
                      type="text"
                      placeholder={`Member ${index + 1} Phone`}
                      value={newMembers[index]?.phoneNumber || ""}
                      onChange={(e) => handleChange(e, index)}
                      name="phoneNumber"
                      required
                    />
                    <select
                      className="w-full px-4 py-3 rounded-xl bg-[#4a5568] text-white"
                      name="gender"
                      value={newMembers[index]?.gender || ""}
                      onChange={(e) => handleChange(e, index)}
                      required
                    >
                      <option value="" hidden>
                        Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                ))}
              </div>
            )}

            {(currentMembers>= 4 && previousSubmissions.length<3) && (
              <div>
                <label className="block text-[#ffe668]">Upload PPT:</label>
                <input
                  className="w-full px-4 py-3 rounded-xl bg-[#4a5568] text-white cursor-pointer"
                  type="file"
                  accept=".ppt,.pptx"
                  onChange={handleFileChange}
                />
              </div>
            )}
           {(currentMembers=== 0) && (
            <button
              type="submit"
              className="w-full mt-6 px-6 py-3 rounded-xl bg-[#38b2ac] text-white font-semibold text-lg hover:bg-[#2c7a7b] transition-colors duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
           )}
          </form>

          {/* Previous Submissions Section */}
          <div className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-[#ffe668] mb-4">Previous Submissions</h2>
            {previousSubmissions.length === 0 ? (
              <p className="text-gray-300">No submissions found.</p>
            ) : (
              <div className="space-y-4">
                {previousSubmissions.map((submission: any, index: number) => (
                  <div key={index} className="bg-[#4a5568] text-white rounded-xl p-4 mb-4">
                    <p className="font-bold">{submission.theme}</p>
                  <p className="font-bold">{submission.problem_statement}</p>
                  <a
                    href={submission.link}
                    className="text-[#38b2ac] underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Submission
                  </a>
                  <p className="text-gray-400">{new Date(submission.timestamp).toLocaleString()}</p>
                </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="w-full py-4 text-center text-[#4a5568] text-sm bg-[#f7f9fa] mt-8">
        © {new Date().getFullYear()} CAC . All rights reserved.
      </footer>
    </div>
  );
};

export default TeamPanel;