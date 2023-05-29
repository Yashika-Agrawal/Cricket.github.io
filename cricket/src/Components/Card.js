import React from "react";

const Card = (props) => {
  return (
    <div class="card text-center my-5">
      <div class="card-header bg-success text-white">
        <strong>Match {props.number}</strong>
      </div>
      <div class="card-body">
        <h5 class="card-title">
          {props.team1} vs {props.team2}
        </h5>
        <p class="card-text">venue: {props.venue}</p>
      </div>
      <div class="card-footer text-body-secondary">
        <strong>Date:</strong> {props.date} <strong>Status:</strong>{" "}
        {props.status}
      </div>
    </div>
  );
};

export default Card;
