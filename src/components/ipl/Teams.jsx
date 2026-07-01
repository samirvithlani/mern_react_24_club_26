import React from "react";
import { Link } from "react-router-dom";

export const Teams = () => {

  const teamList = [
    {
      id: 1,
      name: "Chennai Super Kings",
      shortName: "CSK",
      poster: "https://www.iplt20.com/assets/images/teams/CSK.png",
    },
    {
      id: 2,
      name: "Mumbai Indians",
      shortName: "MI",
      poster: "https://www.iplt20.com/assets/images/teams/MI.png",
    },
    {
      id: 3,
      name: "Royal Challengers Bengaluru",
      shortName: "RCB",
      poster: "https://www.iplt20.com/assets/images/teams/RCB.png",
    },
    {
      id: 4,
      name: "Kolkata Knight Riders",
      shortName: "KKR",
      poster: "https://www.iplt20.com/assets/images/teams/KKR.png",
    },
    {
      id: 5,
      name: "Sunrisers Hyderabad",
      shortName: "SRH",
      poster: "https://www.iplt20.com/assets/images/teams/SRH.png",
    },
    {
      id: 6,
      name: "Delhi Capitals",
      shortName: "DC",
      poster: "https://www.iplt20.com/assets/images/teams/DC.png",
    },
    {
      id: 7,
      name: "Punjab Kings",
      shortName: "PBKS",
      poster: "https://www.iplt20.com/assets/images/teams/PBKS.png",
    },
    {
      id: 8,
      name: "Rajasthan Royals",
      shortName: "RR",
      poster: "https://www.iplt20.com/assets/images/teams/RR.png",
    },
    {
      id: 9,
      name: "Lucknow Super Giants",
      shortName: "LSG",
      poster: "https://www.iplt20.com/assets/images/teams/LSG.png",
    },
    {
      id: 10,
      name: "Gujarat Titans",
      shortName: "GT",
      poster: "https://www.iplt20.com/assets/images/teams/GT.png",
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Teams</h1>
      <table className="table table-dark">
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>POSTER</th>
                <th>ACTION</th>
            </tr>
        </thead>
        <tbody>
            {
                teamList.map((team)=>{
                    return <tr>
                        <td>{team.id}</td>
                        <td>{team.name}</td>
                        <td>
                            <img src={team.poster} style={{height:"100px",width:"100px"}} alt={team.name}></img>
                        </td>
                        <td>
                            <Link to={`/teamdetail/${team.id}`} class="btn btn-primary">Detail</Link>
                        </td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  );
};
