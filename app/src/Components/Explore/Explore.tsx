import React, { useEffect } from "react";
import { DAOFactoryAddress } from "../../contractsconfig";
import { DAOFactory__factory as DAOFactoryFactory } from "../../typechain/factories/DAOFactory__factory";
import { ethers } from "ethers";
import { useState } from "react";
import { useNavigate } from "react-router";
import SideBar from "../SideBar/SideBar";
import Tab from "../SideBar/Tab";
import { Outlet } from "react-router";
import { AppHeader } from "../DaoManager/InputFormAlchemy";
import { useLocation } from "react-router";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

export default function Explore() {
  const [current, setCurrent] = useState<number>();
  let location = useLocation();

  useEffect(() => {
    // UPDATE EVERY NEW TAB
    // CURRENT CORRESPONDS TO PROP IN TAB
    if (location.pathname.includes("/DAOS")) {
      setCurrent(0);
    }
    // if (location.pathname.includes("/Properties")) {
    //   setCurrent(1);
    // }
    // if (location.pathname.includes("/Senate")) {
    //   setCurrent(2);
    // }
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
      <div className="alchemy--section--right">
        <Breadcrumbs/>
        <Outlet />
      </div>
      <div className="alchemy--background"></div>
    </>

    // <div>
    /* <div>Number of DAOs: {numberDAOs}</div>
<ul>{DAORouters}</ul> */
    //   <br />
    //   <br />
    //   <button
    //     className="primary--button"
    //     onClick={() => navigate(`/app/Alchemy/create`)}
    //   >
    //     Create DAO
    //   </button>
    // </div>
  );
}
