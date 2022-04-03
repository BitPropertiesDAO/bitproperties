import { current } from "immer";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Outlet } from "react-router";
import { useLocation } from "react-router";
import "../DaoManager/styles.css";
import Tab from "../SideBar/Tab";
import SideBar from "../SideBar/SideBar";

export default function DashBoard() {
  const [current, setCurrent] = useState<number>();
  let location = useLocation();

  let { DAORouterID } = useParams();
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
      <SideBar>
        <Tab
          title="DAO"
          main={true}
          linkTo={`/DAO/${DAORouterID}/Dashboard`}
        ></Tab>
        <Tab
          id={0}
          current={current}
          // onClick={() => handleActiveTab(0)}
          title="Dashboard"
          icon="clarity:details-solid"
          linkTo={`/DAO/${DAORouterID}/Dashboard`}
        ></Tab>
        <Tab
          id={1}
          current={current}
          // onClick={() => setActiveTab(current)}
          title="Properties"
          icon="clarity:details-solid"
          linkTo={`/DAO/${DAORouterID}/Properties`}
        ></Tab>
      </SideBar>
      <div className="alchemy--section--right">
        <Outlet />
      </div>
      <div className="alchemy--background"></div>
    </>
  );
}
