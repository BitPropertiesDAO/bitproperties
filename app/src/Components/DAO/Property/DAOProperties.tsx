import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ethers } from "ethers";
import { DAORouter__factory } from "../../../typechain";
import PropertyCard from "./PropertyCard";
import MainHouse from "../../../static/MainHouse.png";

export default function DAOProperties() {
  const [numberProperties, setNumberProperties] = useState();
  const [propertyElements, setPropertyElements] = useState([]);

  let { DAORouterID, DAOName } = useParams();
  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );
  const signer = provider.getSigner();

  // @ts-ignore
  const router = DAORouter__factory.connect(DAORouterID, signer);

  useEffect(() => {
    let DAOPropertiesArray: any = [];
    const getProperties = async () => {
      let DAOPropertyNumber: any;
      try {
        const PropertyCounter = await router.propertyCounter();
        DAOPropertyNumber = await PropertyCounter.toNumber();
      } catch (error) {
        console.log(error);
      }
      setNumberProperties(DAOPropertyNumber);
      return DAOPropertyNumber;
    };
    getProperties()
      .then(async (numberOfProperties) => {
        for (let i = 0; i < numberOfProperties; i++) {
          let property = await router.Properties(i);
          DAOPropertiesArray.push(property);
        }
        console.log(DAOPropertiesArray);
        return DAOPropertiesArray;
      })
      .then((DAOPropertiesArray) => {
        const propertyElements = DAOPropertiesArray.slice(0)
          .reverse()
          .map((propertyListing: any, index: number) => {
            return (
              <PropertyCard
                image={MainHouse}
                key={index}
                navigateTo={`/app/DAO/${DAORouterID}/${DAOName}/Properties/${propertyListing.contractAddress}/${propertyListing.propertyName}`}
                propertyName={propertyListing.propertyName}
                contractAddress={propertyListing.contractAddress}
                propertyID={propertyListing.propertyID}
              ></PropertyCard>
            );
          });

        return propertyElements;
      })
      .then((propertyElements) => {
        setPropertyElements(propertyElements);
      });
  }, []);

  return (
    <>
      <div className="backboard ">
        {/* <AppHeader>Properties: {numberProperties}</AppHeader> */}
        <div className="property--grid headings">
          <div className="heading--item grid--title">
            Properties: {numberProperties}
          </div>
          <div className="heading--item">Name</div>
          <div className="heading--item">Shareholders</div>
          <div className="heading--item">Issued (%)</div>
          <div className="heading--item">Progress</div>
        </div>
        <div className="display--grid">{propertyElements}</div>
      </div>
    </>
  );
}
