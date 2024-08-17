import { useEffect, useState } from "react";
import axios from "axios";
import img from "../assets/Intersect.png";
import Loader from "../components/ui/Loader";

const TeamPanel = () => {
  const [teamData, setTeamData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [newMembers, setNewMembers] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false); // State for submission loading
  const [file, setFile] = useState<File | null>(null); // State for file upload
  const [selectedProblemStatement, setSelectedProblemStatement] = useState<string>(""); // State for problem statement

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

  if (error) return <p>{error}</p>;

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
  };
  

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files ? event.target.files[0] : null);
  };

  const handleFileUpload = async () => {
    if (!file) return;
  
    if (!selectedProblemStatement) {
      alert("Problem statement is required.");
      return;
    }
  
    const reader = new FileReader();
    reader.onload = async function () {
      if (typeof reader.result === "string") {
        const fileBase64 = reader.result.split(",")[1];
        const token = localStorage.getItem("authToken");
  
        // Prepare FormData
        const formData = new FormData();
        formData.append("problem_statement", selectedProblemStatement);
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
        }
      }
    };
  
    reader.readAsDataURL(file);
  };
  
  

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (members.length === 0) {
      setIsSubmitting(true); // Show loader
      
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

        // Refresh the page after successful submission
        alert("Added Successfully");
        window.location.reload();

      } catch (err) {
        setError("Failed to post data");
      } finally {
        setIsSubmitting(false); // Hide loader
      }
    } else if (file) {
      await handleFileUpload();
    }
  };

  const totalMembers = 5;
  const currentMembers = members.length;
  const additionalMembersCount = Math.max(0, totalMembers - currentMembers);
  return (
    <div className="w-full bg-[#f5f7f8] overflow-x-hidden">
      {isSubmitting && <Loader />} {/* Show loader when submitting */}
      <div className="w-full h-[14vh] flex flex-col md:flex-row mb-24 xl:mb-0 justify-between">
        <div className="w-full md:w-1/2 h-full py-5 px-6 md:px-20 flex justify-center md:justify-start">
          <img
            className="w-14 h-14 md:w-20 md:h-20 cursor-pointer"
            src={img}
            alt=""
            onClick={() => (window.location.href = "/")}
          />
        </div>
        <div className="w-full md:w-1/2 h-full gap-4 md:gap-8 flex flex-col md:flex-row items-center justify-center pb-3 px-5 md:px-10">
          <div className="px-6 py-2 md:px-10 md:h-12 flex items-center justify-center font-bold capitalize text-[20px] md:text-[20px] tracking-wide font-sans rounded-xl bg-[#ffe668] cursor-pointer">
            Guidelines
          </div>
          <div className="px-6 py-2 md:px-10 md:h-12 flex items-center justify-center font-bold capitalize text-[20px] md:text-[20px] tracking-wide font-sans rounded-xl bg-[#ffe668] cursor-pointer">
            Logout
          </div>
        </div>
      </div>
      <div className="w-full xl:h-[85vh] relative h-fit flex items-center justify-center">
        <div className="hidden xl:block absolute -left-14 top-52 font-semibold tracking-wider uppercase -rotate-90 text-3xl text-[#ffe668]">
          TeamLeader Panel
        </div>
        <div className="w-full md:w-[95%] flex flex-col md:flex-row h-[97%] bg-green-900 rounded-xl">
          <div className="w-full md:w-[5%] relative h-full flex justify-center md:justify-start pl-5 xl:pl-0">
            <p className="absolute md:static rotate-0 md:-rotate-90 mb-10 w-full whitespace-nowrap top-5 pl-5 xl:pl-0 md:top-72 tracking-wider uppercase text-[1rem] md:text-[1.7rem] font-semibold font-sans text-[#ffe668]">
              TeamLeader Panel
            </p>
          </div>
          <div className="w-full md:w-[95%] h-full px-4 md:px-16">
            <div className="w-full xl:pt-10 pt-16">
              <form className="flex flex-col md:flex-row gap-4 md:gap-16 w-full" onSubmit={handleSubmit}>
                <input
                  className="w-full md:w-auto px-4 py-3 md:px-10 md:py-5 rounded-xl text-base md:text-xl"
                  type="text"
                  placeholder="Team name"
                  value={teamData?.team?.name || ""}
                  onChange={handleChange}
                  readOnly={!areFieldsEditable}
                />
                <input
                  className="w-full md:w-auto px-4 py-3 md:px-10 md:py-5 rounded-xl text-base md:text-xl"
                  type="text"
                  placeholder="Leader's uid"
                  value={teamData?.team?.lead_id || ""}
                  onChange={handleChange}
                  readOnly={!areFieldsEditable}
                />
                <select
                  className="w-full md:w-auto px-4 py-3 md:px-24 md:text-xl md:py-5 rounded-xl"
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
              </form>
            </div>
            <div className="mt-8 mb-5 text-xl md:text-2xl text-[#ffe668] capitalize font-semibold">
              Register Members
            </div>
            <div>
              <form className="w-full flex flex-col gap-5 items-center justify-center" onSubmit={handleSubmit}>
                {members.map((member: any, index: number) => (
                  <div
                    key={index}
                    className="w-full flex flex-col md:flex-row gap-4 md:gap-6"
                  >
                   <label className="text-lg font-semibold mb-1 text-white">{`Member ${index + 1} Data`}</label>
                    <input
                      className="w-full md:w-auto px-4 py-2 md:px-5 md:py-[5px] rounded-xl"
                      type="text"
                      placeholder={`${index + 1} Member name`}
                      value={member.name}
                      readOnly
                    />
                    <input
                      className="w-full md:w-auto px-4 py-2 md:px-3 md:py-[5px] rounded-xl"
                      type="text"
                      placeholder="UID"
                      value={member.uid}
                      readOnly
                    />
                    <input
                      className="w-full md:w-auto px-4 py-2 md:px-5 md:py-[5px] rounded-xl"
                      type="email"
                      placeholder="Email"
                      value={member.email}
                      readOnly
                    />
                    <input
                      className="w-full md:w-auto px-4 py-2 md:px-5 md:py-[5px] rounded-xl"
                      type="text"
                      placeholder="Phone Number"
                      value={member.phoneNumber}
                      readOnly
                    />
                    <input
                      className="w-full md:w-auto px-4 py-2 md:px-5 md:py-[5px] rounded-xl"
                      type="text"
                      placeholder="Gender"
                      value={member.gender}
                      readOnly
                    />
                  </div>
                ))}
                {members.length === 0 && (
                  <div className="flex flex-col gap-4">
                    {[...Array(additionalMembersCount)].map((_, index) => (
                      <div key={index} className="w-full flex flex-col md:flex-row gap-4 md:gap-6">
                        <input
                          className="w-full md:w-auto px-4 py-2 md:px-5 md:py-[5px] rounded-xl"
                          type="text"
                          name="name"
                          placeholder={`New Member ${index + 1} Name`}
                          onChange={(e) => handleChange(e, members.length + index)}
                          required
                        />
                        <input
                          className="w-full md:w-auto px-4 py-2 md:px-3 md:py-[5px] rounded-xl"
                          type="text"
                          name="uid"
                          placeholder="UID"
                          onChange={(e) => handleChange(e, members.length + index)}
                          required
                        />
                        <input
                          className="w-full md:w-auto px-4 py-2 md:px-5 md:py-[5px] rounded-xl"
                          type="email"
                          name="email"
                          placeholder="Email"
                          onChange={(e) => handleChange(e, members.length + index)}
                          required
                        />
                        <input
                          className="w-full md:w-auto px-4 py-2 md:px-5 md:py-[5px] rounded-xl"
                          type="text"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          onChange={(e) => handleChange(e, members.length + index)}
                          required
                        />
                        <input
                          className="w-full md:w-auto px-4 py-2 md:px-5 md:py-[5px] rounded-xl"
                          type="text"
                          name="gender"
                          placeholder="Gender"
                          onChange={(e) => handleChange(e, members.length + index)}
                          required
                        />
                      </div>
                    ))}
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-2 md:px-12 md:py-4 rounded-xl bg-[#ffe668] text-[#000] font-bold mt-6"
                  disabled={isSubmitting}
                >
                  {members.length === 0 ? "Submit Members" : "Upload PPT"}
                </button>
                {members.length >= 1 && (
                  <label className="flex flex-col items-center justify-center mt-5">
                    <span className="block text-sm text-gray-700 mb-2">Choose File</span>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="block w-full text-sm text-gray-500 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#ffe668] file:text-black cursor-pointer"
                    />
                  </label>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Display Previous Submissions */}
      <div className="w-full mt-16 px-5">
        <h2 className="text-2xl font-semibold text-[#ffe668]">Previous Submissions</h2>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {previousSubmissions.length === 0 ? (
            <p>No previous submissions found.</p>
          ) : (
            previousSubmissions.map((submission: any, index: number) => (
              <div key={index} className="bg-white p-5 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold mb-2">{submission.problem_statement}</h3>
                <a
                  href={submission.submission_link}
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Submission
                </a>
                <p className="text-gray-500 mt-2">{new Date(submission.submitted_at).toLocaleString()}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamPanel;

