import { current } from "immer";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Outlet } from "react-router";
import { useLocation } from "react-router";
import "../DaoManager/styles.css";
import Tab from "../SideBar/Tab";
import SideBar from "../SideBar/SideBar";
import { DAORouter__factory as DAORouterFactory } from "../../typechain/factories/DAORouter__factory";
import { ethers } from "ethers";

export default function DashBoard() {
  const [current, setCurrent] = useState<number>();
  const [daoName, setDAOName] = useState<string>();

  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );
  const signer = provider.getSigner();
  let { DAORouterID } = useParams();

  // @ts-ignore
  const router = DAORouterFactory.connect(DAORouterID, signer);
  let location = useLocation();

  useEffect(() => {
    const getDAOName = async () => {
      const readDAOName = await router.daoName();
      setDAOName(readDAOName);
    };

    if (location.pathname.includes("/Dashboard")) {
      setCurrent(0);
    }
    if (location.pathname.includes("/Properties")) {
      setCurrent(1);
    }
    getDAOName();
    console.log(current);
  }, [location]);

  return (
    <>
      <SideBar>
        <Tab
          title={daoName}
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
