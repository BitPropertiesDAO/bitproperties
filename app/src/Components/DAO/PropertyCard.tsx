import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./styles.css";
import { Property__factory as PropertyFactory } from "../../typechain";
import { ethers } from "ethers";
import daoIcon from "../../static/DAO-Icon.jpg";

export default function ProeprtyCard(props: any) {
  const [propertyInfo, setPropertyInfo] = useState<any>({
    totalShares: 0,
    totalIssuedShares: 0,
    percentageIssued: 0,
  });

  let navigate = useNavigate();

  useEffect(() => {
    const provider = new ethers.providers.JsonRpcProvider(
      "http://localhost:8545"
    );
    const signer = provider.getSigner();
    // @ts-ignore
    const Property = PropertyFactory.connect(props.contractAddress, signer);

    const getInfo = async () => {
      try {
        let readTotalShares = await Property.totalShares();
        let readTotalIssuedShares = await Property.totalIssuedShares();

        setPropertyInfo({
          totalShares: readTotalShares.toNumber(),
          totalIssuedShares: readTotalIssuedShares.toNumber(),
          percentageIssued:
            (propertyInfo.totalIssuedShares / propertyInfo.totalShares) * 100,
        });
      } catch (error) {
        console.log(error);
      }
    };

    getInfo();
  }, [propertyInfo]);

  return (
    <div onClick={() => navigate(props.navigateTo)} className="property--card">
      <img
        src={props.image}
        className="grid--card--image"
        alt="property listing"
      ></img>
      <div className="property--card--bottom">
        <div className="left">
          <p className="property--card--text property--card--name">
            {props.propertyName}
          </p>
          <p className="property--card--text property--card--message Monomaniac-One">
            {propertyInfo.percentageIssued}%{" "}
            <span className="property--card--name">ISSUED</span>
          </p>
          <div className="property--card--progressslot">
            <div
              className="property--card--progressbar"
              style={{ width: `${propertyInfo.percentageIssued}%` }}
            ></div>
          </div>
        </div>
        <div className="right">
          <div className="dao--icon">
            <img className="dao--icon--image" src={daoIcon}></img>
          </div>
          <p className="dao--name--icon">QUINTA</p>
        </div>
      </div>
    </div>
  );
}
