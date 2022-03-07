import { ethers } from "hardhat"

async function main() {
  const propertyFactory = await ethers.getContractFactory('Property')
  let propertyContract = await propertyFactory.deploy()
  console.log('Property Contract Address = ', propertyContract.address)
  console.log('Property Txn Hash = ', propertyContract.deployTransaction.hash)
  console.log('Deployed By = ', propertyContract.deployTransaction.from)
  await propertyContract.deployed()

  /**
   -- Example --
   const txn = await propertyContract.doSomething()
   const response = await txn.wait()
   */
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })