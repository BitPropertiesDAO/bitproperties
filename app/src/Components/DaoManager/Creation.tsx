import { useEffect, useState, useRef } from "react";
import "./styles.css";
import { Outlet, useNavigate, useLocation } from "react-router";
import { useAppSelector } from "../../utils/reduxhooks";
import Tab from "../SideBar/Tab";
import SideBar from "../SideBar/SideBar";

export default function Creation() {
  let location = useLocation();
  const [current, setCurrent] = useState(0);

  const inputs = useAppSelector((state) => {
    const inputs = state.Alchemy;
    return inputs;
  });

  const [percentage, setPercentage] = useState(0);

  const {
    name,
    proposalPassing,
    quorumPercentage,
    voteDurationWeeks,
    tokenSymbol,
    initTokenSupply,
  } = inputs;

  useEffect(() => {
    const inputsNeeded = [
      name,
      quorumPercentage,
      proposalPassing,
      voteDurationWeeks,
      tokenSymbol,
      initTokenSupply,
    ];

    const total = inputsNeeded.length;
    let completed = 0;
    inputsNeeded.forEach((element) => {
      if (element) {
        completed++;
        setPercentage((completed / total) * 100);
      }
      return percentage;
    });

    if (location.pathname.includes("/Alchemy/create")) {
      setCurrent(0);
    }
    if (location.pathname.includes("/Alchemy/create/governance")) {
      setCurrent(1);
    }
    if (location.pathname.includes("/Alchemy/create/tokenomics")) {
      setCurrent(2);
    }
    if (location.pathname.includes("/Alchemy/create/confirmation")) {
      setCurrent(3);
    }
  }, [
    name,
    quorumPercentage,
    proposalPassing,
    voteDurationWeeks,
    tokenSymbol,
    initTokenSupply,
    location.pathname,
    percentage,
  ]);

  return (
    <>
      <SideBar>
        <div className="MAKEtab--group">
          {/*     FOR MAIN TAB :
            //    linkTo={``} leads to first item in tabGroup
                  do not include id or current
          */}
          <Tab
            title="Alchemy"
            icon="entypo:lab-flask"
            linkTo={``}
            main={true}
          ></Tab>
          <Tab
            id={0}
            current={current}
            title="Basic Information"
            icon="clarity:details-solid"
            linkTo={`/Alchemy/create`}
          ></Tab>
          <Tab
            id={1}
            current={current}
            title="Governance"
            icon="fluent:building-government-20-filled"
            linkTo={`/Alchemy/create/governance`}
          ></Tab>
          <Tab
            id={2}
            current={current}
            title="Tokenomics"
            icon="akar-icons:money"
            linkTo={`/Alchemy/create/tokenomics`}
          ></Tab>
          <Tab
            id={3}
            current={current}
            title="Confirmation"
            icon="line-md:confirm-circle"
            linkTo={`/Alchemy/create/confirmation`}
          ></Tab>
        </div>
        <div className="alchemy--progress-bar">
          <div
            className="alchemy--progress brightness--animation"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </SideBar>

      <div className="alchemy--section--right">
        <Outlet />
      </div>
      <div className="alchemy--background"></div>
    </>
  );
}
