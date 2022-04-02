import React from "react";
import { useParams } from "react-router";
import { Outlet } from "react-router";
import "../DaoManager/styles.css";

import "./styles.css";

export default function DashBoard() {
  return (
    <div>
      <div className="creation">
        <div className="alchemy--side--container">
          <ul className="Alchemy--tabs"></ul>
        </div>
      </div>
      <div className="alchemy--section--right">
        <Outlet />
      </div>
      <div className="alchemy--background"></div>
    </div>
  );
}
