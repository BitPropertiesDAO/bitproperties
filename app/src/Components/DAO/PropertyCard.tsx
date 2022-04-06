import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./styles.css";
import { Property__factory as PropertyFactory } from "../../typechain";
import { ethers } from "ethers";

export default function ProeprtyCard(props: any) {
  const [propertyInfo, setPropertyInfo] = useState<any>({
    totalShares: 0,
    totalIssuedShares: 0,
    percentageIssued: 0,
  });

  let navigate = useNavigate();

  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );
  const signer = provider.getSigner();
  // @ts-ignore
  const Property = PropertyFactory.connect(props.contractAddress, signer);
  useEffect(() => {
    const getInfo = async () => {
      console.log(await Property.callStatic);
      try {
        console.log(await Property.listings);
        let readTotalShares = await Property.totalShares();
        let readTotalIssuedShares = await Property.totalIssuedShares();
        setPropertyInfo({
          totalShares: readTotalShares.toNumber(),
          totalIssuedShares: readTotalIssuedShares.toNumber(),
          percentageIssued: Math.round(
            (propertyInfo.totalIssuedShares / propertyInfo.totalShares) * 100
          ),
        });
      } catch (error) {
        console.log(error);
      }
    };

    getInfo();
  }, [propertyInfo.totalShares]);

  return (
    <div onClick={() => navigate(props.navigateTo)} className="property--grid">
      <img
        src={props.image}
        className="grid--card--image property--card--item"
        alt="property listing"
      ></img>
      <p className="property--card--item">{props.propertyName}</p>
      <p className="property--card--item">Shareholders</p>
      <p className="property--card--item">{propertyInfo.percentageIssued}%</p>
      <div className="property--card--progressslot  property--card--item">
        <div
          className="property--card--progressbar "
          style={{ width: `${propertyInfo.percentageIssued}%` }}
        ></div>
      </div>
    </div>
  );
}
