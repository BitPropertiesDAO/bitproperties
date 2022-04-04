import React, { useEffect } from "react";
import { DAOFactoryAddress } from "../../contractsconfig";
import { DAOFactory__factory as DAOFactoryFactory } from "../../typechain/factories/DAOFactory__factory";
import { ethers } from "ethers";
import { useState } from "react";
import { useNavigate } from "react-router";
import DAOCard from '../Card/DAOCard'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'

export default function DAOPortal() {
  let navigate = useNavigate();
  const [numberDAOs, setNumberDAOs] = useState<any>();
  const [DAORouters, setDAORouters] = useState<any>([]);

  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );

  const signer = provider.getSigner();
  const factory = DAOFactoryFactory.connect(DAOFactoryAddress, signer);
  useEffect(() => {
    let DAORouterArray: any = [];
    const getMarket = async () => {
      let DAOCounterNumber: any;
      try {
        const DAOCounter = await factory.daoCounter();
        DAOCounterNumber = DAOCounter.toNumber();
      } catch (error) {
        console.log(error);
      }
      setNumberDAOs(DAOCounterNumber);
      return DAOCounterNumber;
    };
    getMarket()
      .then(async (numberOfDAOs) => {
        for (let i = 0; i < numberOfDAOs; i++) {
          let DAO = await factory.DAOs(i);
          console.log(DAO);
          DAORouterArray.push(DAO);
        }
        //return DAORouterArray;
        console.log(DAORouterArray)
        setDAORouters(DAORouterArray)
      })
      // .then((DAORouterArray) => {
      //   const DAOElements = DAORouterArray.map((DAO: any, index: any) => {
      //     return (
      //       <li onClick={() => navigate(`/DAO/${DAO}/Dashboard`)} key={index}>
      //         {DAO}
      //       </li>
      //     );
      //   });
      //   return DAOElements;
      // })
      // .then((DAOElements) => {
      //   setDAORouters(DAOElements);
      // });
  }, []);

  function navigateLink(dao: any) {
    let link = '/DAO/' + dao.toString() + '/Dashboard'
    return link
  }

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
    {/* <Stack spacing={2}> */}
      <Button
        variant="contained"
        sx={{
          b: 20
        }}
        // onClick={() => navigate()}
      >Create New DAO</Button>
      <Grid container spacing={2}>
        {
          DAORouters.map((dao: any) => (
              <Grid item xs={4}>
                <DAOCard
                  address={dao}
                  navigateLink={navigateLink(dao)}
                ></DAOCard>
              </Grid>
          ))
        }
      </Grid>
      {/* </Stack> */}
    </Box>
  <div>DAOProperties: {numberDAOs}</div>
</>
  );
}
