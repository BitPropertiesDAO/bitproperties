import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Outlet } from "react-router";
import { useLocation } from "react-router";
import "../DaoManager/styles.css";
import Tab from "../SideBar/Tab";
import SideBar from "../SideBar/SideBar";
import { DAORouter__factory as DAORouterFactory } from "../../typechain/factories/DAORouter__factory";
import { ethers } from "ethers";

import { useDispatch } from "react-redux";
import { changeCurrDAO } from "../../BreadcrumbsSlice";

export default function DashBoard() {
  const [current, setCurrent] = useState<number>();
  const [daoInfo, setDAOInfo] = useState<any>({
    daoName: "",
    governanceTokenAddress: "",
  });

  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );
  const signer = provider.getSigner();
  let { DAORouterID } = useParams();

  // @ts-ignore
  const router = DAORouterFactory.connect(DAORouterID, signer);
  let location = useLocation();

  useEffect(() => {
    const getDAOInfo = async () => {
      const readDAOName = await router.daoName();
      const readDAOGovernanceTokenAddress =
        await router.governanceTokenAddress();
      setDAOInfo({
        daoName: readDAOName,
        governanceTokenAddress: readDAOGovernanceTokenAddress,
      });
    };

    // UPDATE EVERY NEW TAB
    // CURRENT CORRESPONDS TO PROP IN TAB
    if (location.pathname.includes("/Dashboard")) {
      setCurrent(0);
    }
    if (location.pathname.includes("/Properties")) {
      setCurrent(1);
    }
    if (location.pathname.includes("/Senate")) {
      setCurrent(2);
    }
    getDAOInfo();
    console.log(current);
  }, [location]);

  const dispatch = useDispatch()

  return (
    <>
      <SideBar>
        <Tab
          title={daoInfo.daoName}
          main={true}
          linkTo={`/app/DAO/${DAORouterID}/Dashboard`}
        ></Tab>
        <Tab
          id={0}
          current={current}
          // onClick={() => handleActiveTab(0)}
          title="Dashboard"
          icon="ic:round-space-dashboard"
          linkTo={`/app/DAO/${DAORouterID}/Dashboard`}
          onClick={dispatch(changeCurrDAO(daoInfo.daoName))}
        ></Tab>
        <Tab
          id={1}
          current={current}
          // onClick={() => setActiveTab(current)}
          title="Properties"
          icon="fluent:building-home-20-filled"
          linkTo={`/app/DAO/${DAORouterID}/Properties`}
        ></Tab>
        <Tab
          id={2}
          current={current}
          // onClick={() => setActiveTab(current)}
          title="Senate"
          icon="fluent:building-government-20-filled"
          linkTo={`/app/DAO/${DAORouterID}/Senate/${daoInfo.governanceTokenAddress}`}
        ></Tab>
      </SideBar>
      <div className="alchemy--section--right">
        <Outlet />
      </div>
      <div className="alchemy--background"></div>
    </>
  );
}
