import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";

import "antd/dist/antd.css";
import "./styles.css";
import { injected } from "../../utils/connectors";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";

function NavItem(props: any) {
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();

  const handleClick = () => {
    if (props.navigate) {
      navigate(`${props.navigate}`);
    }
    if (props.url) {
      window.location.href = props.url;
    }
    setOpen(!open);
  };

  return (
    <li className="header--li">
      <button
        className={
          props.type !== "connect"
            ? "header--nav--link"
            : "header--nav--actionbutton"
        }
        onClick={handleClick}
      >
        <div style={{ overflow: `hidden` }}>{props.title}</div>
      </button>
      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const { account, activate, deactivate, active } =
    useWeb3React<Web3Provider>();

  const _connectToMetamask = () => {
    activate(injected);
    console.log(activate(injected));
  };
  console.log(active);

  let navigate = useNavigate();

  return (
    <div className="nav--dropdown">
      <div className="nav--dropdown--item">
        Account: {account ? account : "Not Connected"}
      </div>
      {/* {account && ( */}
      <button
        className="nav--dropdown--item"
        onClick={() => navigate(`/profile`)}
      >
        My Account
      </button>
      {/* )} */}
      {!account ? (
        <button
          className="nav--dropdown--item"
          onClick={() => _connectToMetamask()}
        >
          Connect
        </button>
      ) : (
        <button className="nav--dropdown--item" onClick={() => deactivate()}>
          Disconnect
        </button>
      )}
    </div>
  );
}

export default function Header() {
  let navigate = useNavigate();
  const location = useLocation();

  const pathName = location.pathname.toString();
  let isAlchemy = pathName.includes("Alchemy/");

  const { account } = useWeb3React<Web3Provider>();

  return (
    <div className="header">
      <h1 className="header--logo">
        <button onClick={() => navigate(`/`)} className="header--logo--button">
          bit<span className="header--logo--bolder">Properties</span>
        </button>
      </h1>
      {!isAlchemy && (
        <nav>
          <ul className="header--nav navbar">
            <NavItem
              title="WHITEPAPER"
              url="https://app.gitbook.com/o/royHtkR6AKieNQ1UygU7/s/tgIrluxcjOTzLxDW1aVB/"
            ></NavItem>
            <NavItem title="CREATE DAO" navigate={`/Alchemy`}></NavItem>
            <NavItem
              title={!account ? "Connect Wallet" : account}
              type="connect"
            >
              <DropdownMenu></DropdownMenu>
            </NavItem>
          </ul>
        </nav>
      )}
    </div>
  );
}
