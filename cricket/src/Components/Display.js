import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";

const Display = () => {
  const url =
    "https://api.cricapi.com/v1/matches?apikey=081fca32-3b0d-4e5a-a291-12310cea6da6";
  const [apiData, setData] = useState([]); //as jsonData.data is an array so we will pass empty array
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      console.log(jsonData.data);
      setData(jsonData.data);
      console.log(apiData);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="row">
        {apiData.map((match, index) => (
          // col-6 should be just above the where the card is used otherwise it will not work.
          <div className="col-6">
            <Card
              number={index + 1}
              team1={match.teams[0]}
              team2={match.teams[1]}
              date={match.date}
              venue={match.venue}
              status={match.status}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
