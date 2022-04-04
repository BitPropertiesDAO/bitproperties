import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ethers } from "ethers";
import { DAORouter__factory } from "../../typechain";

import PropertyCard from '../Card/propertyCard'
// import GridView from '../Card/GridView'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { spacing } from '@mui/system';

export default function DAOProperties() {
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
        console.log("DAOPropertiesArray: ")
        console.log(DAOPropertiesArray)
        setPropertyElements(DAOPropertiesArray)
      })
  }, []);

  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
        {/* <Stack spacing={2}> */}
          <Button
            variant="contained"
            sx={{
              b: 20
            }}
          >Add New Property</Button>
          <Grid container spacing={2}>
            {
              propertyElements.map((property) => (
                  <Grid item xs={4}>
                    <PropertyCard
                      address={property}
                    ></PropertyCard>
                  </Grid>
              ))
            }
          </Grid>
          {/* </Stack> */}
        </Box>
      <div>DAOProperties: {numberProperties}</div>
    </>
  );
}
