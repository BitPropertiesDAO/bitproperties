import { current } from "immer";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Outlet } from "react-router";
import { useLocation } from "react-router";
import "../DaoManager/styles.css";
import AlchemyTab from "../SideBar/AlchemyTab";

import "./styles.css";

export default function DashBoard() {
  const [current, setCurrent] = useState<number>();
  let { DAORouterID } = useParams();
  let location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/Dashboard")) {
      setCurrent(0);
    }
    if (location.pathname.includes("/Properties")) {
      setCurrent(1);
    }
    console.log(current);
  }, [location]);

  return (
    <>
    <div>
      <div className="creation">
        <div className="alchemy--side--container">
          <ul className="Alchemy--tabs">
            <AlchemyTab
              id={0}
              current={current}
              // onClick={() => handleActiveTab(0)}
              title="Dashboard"
              icon="clarity:details-solid"
              linkTo={`/DAO/${DAORouterID}/Dashboard`}
            ></AlchemyTab>
            <AlchemyTab
              id={1}
              current={current}
              // onClick={() => setActiveTab(current)}
              title="Properties"
              icon="clarity:details-solid"
              linkTo={`/DAO/${DAORouterID}/Properties`}
            ></AlchemyTab>
          </ul>
        </div>
      </div>
      <div className="alchemy--section--right">
        <Outlet />
      </div>
      <div className="alchemy--background"></div>
    </div>
    <div>
      
    </div>
    </>
  );
}
