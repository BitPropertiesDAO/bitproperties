import React, { useEffect } from "react";
import { useState } from "react";
import SideBar from "../SideBar/SideBar";
import Tab from "../SideBar/Tab";
import { Outlet } from "react-router";

import { useLocation } from "react-router";

export default function Explore() {
  const [current, setCurrent] = useState<number>();
  let location = useLocation();

  useEffect(() => {
    // UPDATE EVERY NEW TAB
    // CURRENT CORRESPONDS TO PROP IN TAB
    if (location.pathname.includes("/DAOS")) {
      setCurrent(0);
    }
  }, [location]);

  return (
    <>
      <SideBar>
        <Tab title={"DAOs"} main={true} linkTo={``}></Tab>
        <Tab
          id={0}
          current={current}
          title="Explore DAOs"
          icon="ic:round-space-dashboard"
          linkTo={`/app/Explore/DAOS`}
        ></Tab>
        <Tab
          id={1}
          current={current}
          title="Create DAO"
          icon="fluent:building-home-20-filled"
          linkTo={`/app/Alchemy/create`}
        ></Tab>
      </SideBar>
      <div className="app--section--right">
        <Outlet />
      </div>
    </>
  );
}
