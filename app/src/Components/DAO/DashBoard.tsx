import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Outlet } from "react-router";
import { useLocation } from "react-router";
import "../DaoManager/styles.css";
import Tab from "../SideBar/Tab";
import SideBar from "../SideBar/SideBar";
import { DAORouter__factory as DAORouterFactory } from "../../typechain/factories/DAORouter__factory";
import { ethers } from "ethers";
import BreadCrumbs from "../Breadcrumbs/BreadCrumbs";

export default function DashBoard() {
  const [current, setCurrent] = useState<number>(0);
  const [daoInfo, setDAOInfo] = useState<any>({
    daoName: "",
    governanceTokenAddress: "",
  });

  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );
  const signer = provider.getSigner();
  let { DAORouterID, DAOName } = useParams();

  // @ts-ignore
  const router = DAORouterFactory.connect(DAORouterID, signer);
  let location = useLocation();

  useEffect(() => {
    const getDAOInfo = async () => {
      try {
        const readDAOName = await router.daoName();
        const readDAOGovernanceTokenAddress =
          await router.governanceTokenAddress();
        setDAOInfo({
          daoName: readDAOName,
          governanceTokenAddress: readDAOGovernanceTokenAddress,
        });
      } catch (error) {
        console.log(error);
      }
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
    if (location.pathname.includes("/addproperty")) {
      setCurrent(3);
    }
    getDAOInfo();
  }, [location, daoInfo]);

  return (
    <>
      <SideBar>
        <Tab
          title={daoInfo.daoName}
          main={true}
          linkTo={`/app/DAO/${DAORouterID}/${daoInfo.daoName}/Dashboard`}
        ></Tab>
        <Tab
          id={0}
          current={current}
          // onClick={() => handleActiveTab(0)}
          title="Dashboard"
          icon="ic:round-space-dashboard"
          linkTo={`/app/DAO/${DAORouterID}/${daoInfo.daoName}/Dashboard`}
        ></Tab>
        <Tab
          id={1}
          current={current}
          // onClick={() => setActiveTab(current)}
          title="Properties"
          icon="fluent:building-home-20-filled"
          linkTo={`/app/DAO/${DAORouterID}/${daoInfo.daoName}/Properties`}
        ></Tab>
        <Tab
          id={2}
          current={current}
          // onClick={() => setActiveTab(current)}
          title="Senate"
          icon="fluent:building-government-20-filled"
          linkTo={`/app/DAO/${DAORouterID}/${daoInfo.daoName}/Senate/${daoInfo.governanceTokenAddress}`}
        ></Tab>
        <Tab
          id={3}
          current={current}
          // onClick={() => setActiveTab(current)}
          title="Add Property"
          icon="bxs:message-square-add"
          linkTo={`/app/DAO/${DAORouterID}/${daoInfo.daoName}/addproperty`}
        ></Tab>
      </SideBar>
      <div className="app--section--right">
        <BreadCrumbs
          root={DAOName}
          rootRoute={`app/DAO/${DAORouterID}/${daoInfo.daoName}/Dashboard`}
        ></BreadCrumbs>
        <Outlet />
      </div>
    </>
  );
}
