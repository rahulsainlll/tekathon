import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
  
    if (!selectedProblemStatement || !selectedtheme) {
      alert("Problem statement and Theme are required.");
      return;
    }
  
    setIsLoading(true);
  
    try {
      const token = localStorage.getItem("authToken");
  
      // Create a FormData object and append the file and other data
      const formData = new FormData();
      formData.append("problem_statement", selectedProblemStatement);
      formData.append("theme", selectedtheme);
      formData.append("file", file); // Append the file directly
  
      // Send the file via a POST request
      const response = await axios.post("/team/ppt", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
  
      alert(response.data.message);
      navigate('/');
    } catch (err) {
      console.error("File upload failed", err);
      setError("Failed to upload file");
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (members.length === 0) {
      setIsSubmitting(true);
      const hasAtLeastOneFemale = newMembers.some(member => member.gender === "Female");

      if (!hasAtLeastOneFemale) {
        alert("At least one member must be female.");
        setIsSubmitting(false);
        return;
      }
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
        navigate('/');

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
                <option value="SIH1524">SIH1524</option>
<option value="SIH1525">SIH1525</option>
<option value="SIH1526">SIH1526</option>
<option value="SIH1527">SIH1527</option>
<option value="SIH1528">SIH1528</option>
<option value="SIH1529">SIH1529</option>
<option value="SIH1530">SIH1530</option>
<option value="SIH1531">SIH1531</option>
<option value="SIH1532">SIH1532</option>
<option value="SIH1533">SIH1533</option>
<option value="SIH1534">SIH1534</option>
<option value="SIH1535">SIH1535</option>
<option value="SIH1536">SIH1536</option>
<option value="SIH1537">SIH1537</option>
<option value="SIH1538">SIH1538</option>
<option value="SIH1539">SIH1539</option>
<option value="SIH1540">SIH1540</option>
<option value="SIH1541">SIH1541</option>
<option value="SIH1542">SIH1542</option>
<option value="SIH1543">SIH1543</option>
<option value="SIH1544">SIH1544</option>
<option value="SIH1545">SIH1545</option>
<option value="SIH1546">SIH1546</option>
<option value="SIH1547">SIH1547</option>
<option value="SIH1548">SIH1548</option>
<option value="SIH1549">SIH1549</option>
<option value="SIH1550">SIH1550</option>
<option value="SIH1554">SIH1554</option>
<option value="SIH1555">SIH1555</option>
<option value="SIH1556">SIH1556</option>
<option value="SIH1557">SIH1557</option>
<option value="SIH1558">SIH1558</option>
<option value="SIH1559">SIH1559</option>
<option value="SIH1560">SIH1560</option>
<option value="SIH1561">SIH1561</option>
<option value="SIH1562">SIH1562</option>
<option value="SIH1563">SIH1563</option>
<option value="SIH1564">SIH1564</option>
<option value="SIH1565">SIH1565</option>
<option value="SIH1566">SIH1566</option>
<option value="SIH1567">SIH1567</option>
<option value="SIH1568">SIH1568</option>
<option value="SIH1569">SIH1569</option>
<option value="SIH1570">SIH1570</option>
<option value="SIH1571">SIH1571</option>
<option value="SIH1572">SIH1572</option>
<option value="SIH1573">SIH1573</option>
<option value="SIH1574">SIH1574</option>
<option value="SIH1575">SIH1575</option>
<option value="SIH1576">SIH1576</option>
<option value="SIH1577">SIH1577</option>
<option value="SIH1578">SIH1578</option>
<option value="SIH1579">SIH1579</option>
<option value="SIH1580">SIH1580</option>
<option value="SIH1581">SIH1581</option>
<option value="SIH1582">SIH1582</option>
<option value="SIH1583">SIH1583</option>
<option value="SIH1584">SIH1584</option>
<option value="SIH1585">SIH1585</option>
<option value="SIH1586">SIH1586</option>
<option value="SIH1587">SIH1587</option>
<option value="SIH1588">SIH1588</option>
<option value="SIH1589">SIH1589</option>
<option value="SIH1590">SIH1590</option>
<option value="SIH1591">SIH1591</option>
<option value="SIH1592">SIH1592</option>
<option value="SIH1593">SIH1593</option>
<option value="SIH1594">SIH1594</option>
<option value="SIH1595">SIH1595</option>
<option value="SIH1596">SIH1596</option>
<option value="SIH1597">SIH1597</option>
<option value="SIH1598">SIH1598</option>
<option value="SIH1599">SIH1599</option>
<option value="SIH1600">SIH1600</option>
<option value="SIH1601">SIH1601</option>
<option value="SIH1602">SIH1602</option>
<option value="SIH1603">SIH1603</option>
<option value="SIH1604">SIH1604</option>
<option value="SIH1605">SIH1605</option>
<option value="SIH1606">SIH1606</option>
<option value="SIH1607">SIH1607</option>
<option value="SIH1608">SIH1608</option>
<option value="SIH1609">SIH1609</option>
<option value="SIH1610">SIH1610</option>
<option value="SIH1611">SIH1611</option>
<option value="SIH1612">SIH1612</option>
<option value="SIH1613">SIH1613</option>
<option value="SIH1614">SIH1614</option>
<option value="SIH1615">SIH1615</option>
<option value="SIH1616">SIH1616</option>
<option value="SIH1617">SIH1617</option>
<option value="SIH1618">SIH1618</option>
<option value="SIH1619">SIH1619</option>
<option value="SIH1620">SIH1620</option>
<option value="SIH1621">SIH1621</option>
<option value="SIH1622">SIH1622</option>
<option value="SIH1623">SIH1623</option>
<option value="SIH1624">SIH1624</option>
<option value="SIH1625">SIH1625</option>
<option value="SIH1626">SIH1626</option>
<option value="SIH1627">SIH1627</option>
<option value="SIH1628">SIH1628</option>
<option value="SIH1629">SIH1629</option>
<option value="SIH1630">SIH1630</option>
<option value="SIH1631">SIH1631</option>
<option value="SIH1632">SIH1632</option>
<option value="SIH1633">SIH1633</option>
<option value="SIH1637">SIH1637</option>
<option value="SIH1638">SIH1638</option>
<option value="SIH1639">SIH1639</option>
<option value="SIH1640">SIH1640</option>
<option value="SIH1641">SIH1641</option>
<option value="SIH1642">SIH1642</option>
<option value="SIH1643">SIH1643</option>
<option value="SIH1644">SIH1644</option>
<option value="SIH1645">SIH1645</option>
<option value="SIH1646">SIH1646</option>
<option value="SIH1647">SIH1647</option>
<option value="SIH1648">SIH1648</option>
<option value="SIH1649">SIH1649</option>
<option value="SIH1650">SIH1650</option>
<option value="SIH1651">SIH1651</option>
<option value="SIH1652">SIH1652</option>
<option value="SIH1653">SIH1653</option>
<option value="SIH1654">SIH1654</option>
<option value="SIH1655">SIH1655</option>
<option value="SIH1656">SIH1656</option>
<option value="SIH1657">SIH1657</option>
<option value="SIH1658">SIH1658</option>
<option value="SIH1659">SIH1659</option>
<option value="SIH1660">SIH1660</option>
<option value="SIH1661">SIH1661</option>
<option value="SIH1664">SIH1664</option>
<option value="SIH1666">SIH1666</option>
<option value="SIH1667">SIH1667</option>
<option value="SIH1668">SIH1668</option>
<option value="SIH1669">SIH1669</option>
<option value="SIH1670">SIH1670</option>
<option value="SIH1671">SIH1671</option>
<option value="SIH1672">SIH1672</option>
<option value="SIH1673">SIH1673</option>
<option value="SIH1674">SIH1674</option>
<option value="SIH1675">SIH1675</option>
<option value="SIH1676">SIH1676</option>
<option value="SIH1677">SIH1677</option>
<option value="SIH1678">SIH1678</option>
<option value="SIH1679">SIH1679</option>
<option value="SIH1680">SIH1680</option>
<option value="SIH1681">SIH1681</option>
<option value="SIH1682">SIH1682</option>
<option value="SIH1683">SIH1683</option>
<option value="SIH1684">SIH1684</option>
<option value="SIH1685">SIH1685</option>
<option value="SIH1686">SIH1686</option>
<option value="SIH1687">SIH1687</option>
<option value="SIH1688">SIH1688</option>
<option value="SIH1689">SIH1689</option>
<option value="SIH1690">SIH1690</option>
<option value="SIH1691">SIH1691</option>
<option value="SIH1692">SIH1692</option>
<option value="SIH1693">SIH1693</option>
<option value="SIH1694">SIH1694</option>
<option value="SIH1695">SIH1695</option>
<option value="SIH1696">SIH1696</option>
<option value="SIH1697">SIH1697</option>
<option value="SIH1698">SIH1698</option>
<option value="SIH1699">SIH1699</option>
<option value="SIH1700">SIH1700</option>
<option value="SIH1701">SIH1701</option>
<option value="SIH1702">SIH1702</option>
<option value="SIH1703">SIH1703</option>
<option value="SIH1704">SIH1704</option>
<option value="SIH1705">SIH1705</option>
<option value="SIH1706">SIH1706</option>
<option value="SIH1707">SIH1707</option>
<option value="SIH1708">SIH1708</option>
<option value="SIH1709">SIH1709</option>
<option value="SIH1710">SIH1710</option>
<option value="SIH1711">SIH1711</option>
<option value="SIH1712">SIH1712</option>
<option value="SIH1713">SIH1713</option>
<option value="SIH1714">SIH1714</option>
<option value="SIH1715">SIH1715</option>
<option value="SIH1716">SIH1716</option>
<option value="SIH1717">SIH1717</option>
<option value="SIH1718">SIH1718</option>
<option value="SIH1719">SIH1719</option>
<option value="SIH1720">SIH1720</option>
<option value="SIH1721">SIH1721</option>
<option value="SIH1722">SIH1722</option>
<option value="SIH1723">SIH1723</option>
<option value="SIH1724">SIH1724</option>
<option value="SIH1725">SIH1725</option>
<option value="SIH1726">SIH1726</option>
<option value="SIH1727">SIH1727</option>
<option value="SIH1728">SIH1728</option>
<option value="SIH1729">SIH1729</option>
<option value="SIH1730">SIH1730</option>
<option value="SIH1731">SIH1731</option>
<option value="SIH1732">SIH1732</option>
<option value="SIH1733">SIH1733</option>
<option value="SIH1734">SIH1734</option>
<option value="SIH1735">SIH1735</option>
<option value="SIH1736">SIH1736</option>
<option value="SIH1737">SIH1737</option>
<option value="SIH1738">SIH1738</option>
<option value="SIH1739">SIH1739</option>
<option value="SIH1740">SIH1740</option>
<option value="SIH1741">SIH1741</option>
<option value="SIH1742">SIH1742</option>
<option value="SIH1743">SIH1743</option>
<option value="SIH1744">SIH1744</option>
<option value="SIH1745">SIH1745</option>
<option value="SIH1746">SIH1746</option>
<option value="SIH1747">SIH1747</option>
<option value="SIH1748">SIH1748</option>
<option value="SIH1749">SIH1749</option>
<option value="SIH1750">SIH1750</option>
<option value="SIH1751">SIH1751</option>
<option value="SIH1752">SIH1752</option>
<option value="SIH1753">SIH1753</option>
<option value="SIH1754">SIH1754</option>
<option value="SIH1755">SIH1755</option>
<option value="SIH1756">SIH1756</option>
<option value="SIH1757">SIH1757</option>
<option value="SIH1758">SIH1758</option>
<option value="SIH1759">SIH1759</option>
<option value="SIH1760">SIH1760</option>
<option value="SIH1761">SIH1761</option>
<option value="SIH1762">SIH1762</option>
<option value="SIH1764">SIH1764</option>
<option value="SIH1765">SIH1765</option>
<option value="SIH1767">SIH1767</option>
<option value="SIH1768">SIH1768</option>
<option value="SIH1770">SIH1770</option>
<option value="SIH1771">SIH1771</option>

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
                <option value="robotics-drone">Robotics/Drone</option>
<option value="smart-automation">Smart Automation</option>
<option value="smart-vehicles">Smart Vehicles</option>
<option value="fitness-sports">Fitness & Sports</option>
<option value="heritage-culture">Heritage & Culture</option>
<option value="medtech-healthtech-biotech">Medtech/Healthtech/Biotech</option>
<option value="agriculture-foodtech-rural-development">Agriculture, Foodtech & Rural Development</option>
<option value="transportation-logistics">Transportation & Logistics</option>
<option value="clean-green-energy">Clean & Green Energy</option>
<option value="travel-tourism">Travel & Tourism</option>
<option value="renewable-sustainable-energy">Renewable/Sustainable Energy</option>
<option value="blockchain-cybersecurity">Blockchain/Cybersecurity</option>
<option value="smart-education">Smart Education</option>
<option value="disaster-management">Disaster Management</option>
<option value="toys-games">Toys & Games</option>
<option value="space-technology">Space Technology</option>
<option value="miscellaneous">Miscellaneous</option>
<option value="smart-resource-conservation">Smart Resource Conservation</option>
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
           {(previousSubmissions.length<3) && (
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
                    href={submission.submission_link}
                    className="text-[#38b2ac] underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Submission
                  </a>
                  <p className="text-gray-400">{new Date(submission.submitted_at).toLocaleString()}</p>
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