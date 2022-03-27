import { useState } from "react";
import { useNavigate, useLocation } from "react-router";

import "antd/dist/antd.css";
import "./styles.css";
import { injected } from "../../utils/connectors";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
// import CollapsedNav from "./Collapse/CollapsedNav";

function NavItem(props: any) {
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();

  const handleClick = () => {
    if (props.navigate) {
      navigate(`${props.navigate}`);
    }
    setOpen(!open);
  };

  return (
    <li className="header--li">
      <button className="header--nav--link" onClick={handleClick}>
        {props.title} {open && props.children}
      </button>
    </li>
  );
}

function NavBar(props: any) {
  return (
    <nav>
      <ul className="header--nav">{props.children}</ul>
    </nav>
  );
}

function DropdownMenu(props: any) {
  return <div className="nav--dropdown"></div>;
}

export default function Header() {
  let navigate = useNavigate();
  const location = useLocation();

  const { chainId, account, activate, deactivate, active, library } =
    useWeb3React<Web3Provider>();

  const _connectToMetamask = () => {
    activate(injected);
    console.log(activate(injected));
  };

  const pathName = location.pathname.toString();
  let isAlchemy = pathName.includes("Alchemy/");

  return (
    <div className="header">
      <h1 className="header--logo">
        <button onClick={() => navigate(`/`)} className="header--logo--button">
          bit<span className="header--logo--bolder">Properties</span>
        </button>
        {isAlchemy}
      </h1>

      {/* {!isAlchemy ? ( */}
      <NavBar>
        <NavItem
          title="WHITEPAPER"
          url="https://app.gitbook.com/o/royHtkR6AKieNQ1UygU7/s/tgIrluxcjOTzLxDW1aVB/"
        ></NavItem>
        <NavItem title="CREATE DAO" navigate={`/Alchemy`}></NavItem>
        <NavItem title="CONNECT">
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </NavBar>
      {/* <nav>
        <ul className="header--nav">
          <li className="header--li">
            <button className="header--nav--link">MARKETPLACE</button>
          </li>
          <li className="header--li">
            <a
              className="header--nav--link"
              href="https://app.gitbook.com/o/royHtkR6AKieNQ1UygU7/s/tgIrluxcjOTzLxDW1aVB/"
            >
              WHITEPAPER
            </a>
          </li>
          <li className="header--li">
            <Link className="header--nav--link" to="Alchemy">
              CREATE DAO
            </Link>
          </li>
          <li className="header--li">
            <button
              className="header--nav--actionbutton"
              onClick={
                !account ? () => _connectToMetamask() : () => deactivate()
              }
            >
              {content}
            </button>
          </li>
        </ul>
      </nav> */}
      {/* // ) : null} */}
    </div>
  );
}
