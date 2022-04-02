import { useEffect, useState, useRef } from "react";
import "./styles.css";
import { Outlet, useNavigate, useLocation } from "react-router";
import { useAppSelector } from "../../utils/reduxhooks";
import { Icon } from "@iconify/react";

export default function Creation() {
  const AlchemyTab = (props: any) => {
    return (
      <li
        className={`Alchemy--tab--container ${
          current === props.current && "brightness--animation"
        }`}
        onClick={() => onChange(props.current)}
        style={{
          color: current === props.current ? "black" : "rgb(210,210,210)",
          background: current === props.current ? `` : "transparent",
        }}
      >
        <Icon icon={props.icon} height="25" className="tab--icon" />
        <div className="Alchemy--tab--title">{props.title}</div>
      </li>
    );
  };
  let navigate = useNavigate();
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

    //Update tabs on `Next Section / Back
    if (location.pathname === `/Alchemy/create/`) {
      setCurrent(0);
    }
    if (location.pathname === `/Alchemy/create/governance`) {
      setCurrent(1);
    }
    if (location.pathname === `/Alchemy/create/tokenomics`) {
      setCurrent(2);
    }
    if (location.pathname === `/Alchemy/create/confirmation`) {
      setCurrent(3);
    }
  });

  //navigate on step change
  const onChange = (current: any) => {
    setCurrent(current);
    if (current === 0) {
      navigate(`/Alchemy/create`);
    }
    if (current === 1) {
      navigate(`/Alchemy/create/governance`);
    }
    if (current === 2) {
      navigate(`/Alchemy/create/tokenomics`);
    }
    if (current === 3) {
      navigate(`/Alchemy/create/confirmation`);
    }
  };

  return (
    <div>
      <div className="creation">
        <div className="alchemy--progress-bar">
          <div
            className="alchemy--progress brightness--animation"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="alchemy--side--container">
          <ul className="Alchemy--tabs">
            <AlchemyTab
              current={0}
              title="Basic Information"
              icon="clarity:details-solid"
            ></AlchemyTab>
            <AlchemyTab
              current={1}
              title="Governance"
              icon="fluent:building-government-20-filled"
            ></AlchemyTab>
            <AlchemyTab
              current={2}
              title="Tokenomics"
              icon="akar-icons:money"
            ></AlchemyTab>
            <AlchemyTab
              current={3}
              title="Confirmation"
              icon="line-md:confirm-circle"
            ></AlchemyTab>
          </ul>
        </div>
      </div>
      <div className="alchemy--section--right">
        <Outlet />
      </div>
      <div className="alchemy--background"></div>
    </div>
  );
}
