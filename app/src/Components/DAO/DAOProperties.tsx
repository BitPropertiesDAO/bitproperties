import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ethers } from "ethers";
import { DAORouter__factory } from "../../typechain";
import { AppHeader } from "../DaoManager/InputFormAlchemy";
import PropertyCard from "./PropertyCard";

export default function DAOProperties() {
  let navigate = useNavigate();
  const [numberProperties, setNumberProperties] = useState();
  const [propertyElements, setPropertyElements] = useState([]);

  let { DAORouterID } = useParams();
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
        return DAOPropertiesArray;
      })
      .then((DAOPropertiesArray) => {
        const propertyElements = DAOPropertiesArray.map(
          (propertyAddress: any, index: any) => {
            return (
              <PropertyCard
                id={index}
                navigateTo={`/app/DAO/${DAORouterID}/Properties/${propertyAddress}`}
                propertyAddress={propertyAddress}
              ></PropertyCard>

              // <li
              //   key={index}
              //   onClick={() =>
              //     navigate(`/app/DAO/${DAORouterID}/Properties/${property}`)
              //   }
              // >
              //   {property}
              // </li>
            );
          }
        );
        return propertyElements;
      })
      .then((propertyElements) => {
        setPropertyElements(propertyElements);
      });
  }, []);

  return (
    <>
      <AppHeader>Properties: {numberProperties}</AppHeader>
      <br />
      <ul>{propertyElements}</ul>
    </>
  );
}
