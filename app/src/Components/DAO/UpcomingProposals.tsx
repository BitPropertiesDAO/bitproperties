import React from "react";
import "./daogridstyles.css";

export default function UpcomingProposals(props: any) {
  return (
    <div>
      <div
        style={{ margin: "1.5rem 30px", fontWeight: 600 }}
        className="section--right--subtitle "
      >
        Upcoming Proposals
      </div>
      <div className="DAO--grid--proposals"></div>
    </div>
  );
}
