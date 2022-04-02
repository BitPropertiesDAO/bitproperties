import { ethers } from "hardhat";

async function main() {
  const DAOFactory = await ethers.getContractFactory("DAOFactory");
  let DAOFactoryContract = await DAOFactory.deploy();
  console.log("DAO Factory Contract Address = ", DAOFactoryContract.address);
  console.log("DAO Txn Hash = ", DAOFactoryContract.deployTransaction.hash);
  console.log("Deployed By = ", DAOFactoryContract.deployTransaction.from);
  await DAOFactoryContract.deployed();

  // const DAORouter = await ethers.getContractFactory("DAORouter");
  // let DAORouterContract = await DAORouter.deploy(
  //   "QuintaDAO",
  //   "0x4A0dEa1C430472ec4681D654c9F9ceE10cd3ec66",
  //   "0x889202B45c4423556552aFBEA7296CC1EcfE218a"
  // );
  // console.log("Property Contract Address = ", DAORouterContract.address);
  // console.log("Property Txn Hash = ", DAORouterContract.deployTransaction.hash);
  // console.log("Deployed By = ", DAORouterContract.deployTransaction.from);
  // await DAORouterContract.deployed();

  /**
   -- Example --
   const txn = await propertyContract.doSomething()
   const response = await txn.wait()
   */
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
