import React, { useState, useEffect } from "react";
import Table from "../../components/table/Table";
import { fetchTeams } from "../../services/Teamservices/Teamservices";

const teamTableHead = [
  "",
  "team_name",
  "leader",
  "co_leader",
//   "members",
  "logo",
  // "club_name",
  "Actions",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td></td>
    <td>{item.team_name}</td>
    <td>{item.lead_user_id}</td>
    <td>{item.co_lead_user_id}</td>
    <td>{item.members.join(", ")}</td>
    {/* <td>
      <img src={item.logo} alt="team logo" style={{ width: 50, height: 50 }} />
    </td>
    <td>{item.club_name}</td> */}
  </tr>
);

const Teams = () => {
  const [teamList, setTeamList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      setTeamList(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="page-header">Teams</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                headData={teamTableHead}
                renderHead={renderHead}
                bodyData={teamList}
                renderBody={renderBody}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
