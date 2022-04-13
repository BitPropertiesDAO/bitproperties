import { useNavigate } from "react-router";
import { DAORouter__factory } from "../../typechain";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

interface DAOCard {
  image: any;
  key: any;
  navigateTo: string;
  propertyName?: string;
  contractAddress?: any;
  DAORouter?: any;
}

export default function DAOCard(props: DAOCard) {
  let navigate = useNavigate();

  const [daoInfo, setDaoInfo] = useState({
    name: "",
    propertiesNumber: 0,
  });

  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );
  const signer = provider.getSigner();

  // @ts-ignore
  const DAORouter = DAORouter__factory.connect(props.DAORouter, signer);

  useEffect(() => {
    const readDAO = async () => {
      try {
        let DAOName = await DAORouter.daoName();
        let DAOPropertiesNumber = await DAORouter.propertyCounter();
        setDaoInfo({
          name: DAOName,
          propertiesNumber: DAOPropertiesNumber.toNumber(),
        });
      } catch (error) {
        console.log(error);
      }
    };
    readDAO();
  }, []);

  return (
    <div
      onClick={() => navigate(`${props.navigateTo}/${daoInfo.name}/Dashboard`)}
      className="property--grid"
    >
      <img
        src={props.image}
        className="grid--card--image property--card--item"
        alt="property listing"
      ></img>
      <p className="property--card--item">{daoInfo.name}</p>
      <p className="property--card--item">{daoInfo.propertiesNumber}</p>
      <p className="property--card--item">##</p>
      <p className="property--card--item">
        {props.DAORouter.replace(/(.{9})..+/, "$1…")}
      </p>
    </div>
  );
}
