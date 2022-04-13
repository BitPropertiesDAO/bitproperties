import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import "antd/dist/antd.css";
import "./styles.css";
import { ethers } from "ethers";
import BreadCrumbs from "../Breadcrumbs/BreadCrumbs";

function NavItem(props: any) {
  let navigate = useNavigate();
  return (
    <li className="header--li">
      <button
        className={
          props.type !== "connect"
            ? "header--nav--link"
            : "header--nav--actionbutton"
        }
        onClick={() => navigate(props.navigate)}
      >
        <div style={{ overflow: `hidden` }}>{props.title}</div>
      </button>
    </li>
  );
}

export default function Header() {
  let navigate = useNavigate();
  const [tempAddress, setTempAddress] = useState("");

  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );

  useEffect(() => {
    const signer = provider.getSigner();
    const getAddress = async () => {
      const address = await signer.getAddress();
      setTempAddress(address);
    };
    getAddress();
  }, [provider]);
  const location = useLocation();

  const pathName = location.pathname.toString();
  let isApp = pathName.includes("/app/");

  return (
    <div className="header">
      <h1 className="header--logo">
        <button onClick={() => navigate(`/`)} className="header--logo--button">
          bit<span className="header--logo--bolder">Properties</span>
        </button>
      </h1>
      <nav>
        {!isApp ? (
          <ul className="header--nav navbar">
            <NavItem
              title="Whitepaper"
              url="https://app.gitbook.com/o/royHtkR6AKieNQ1UygU7/s/tgIrluxcjOTzLxDW1aVB/"
            ></NavItem>
            <div className="nav--divider header--li"></div>
            <button
              className="header--li nav--button"
              onClick={() => navigate("/app/Explore/DAOS")}
            >
              TO APP {">"}
            </button>
          </ul>
        ) : (
          <ul className="header--nav navbar">
            <NavItem title="DAOs" navigate={`app/Explore/DAOS`}></NavItem>
            <NavItem
              title="Create DAO"
              navigate={`app/Alchemy/create`}
            ></NavItem>
            <div className="nav--divider header--li"></div>
            <div className="header--li nav--button">
              {!tempAddress
                ? "Account"
                : tempAddress.replace(/(.{9})..+/, "$1…")}
            </div>
          </ul>
        )}
      </nav>
    </div>
  );
}
