import { ethers } from "hardhat"
import chaiAsPromised from 'chai-as-promised'
import chai from "chai"
import { solidity } from "ethereum-waffle"
import { Property } from "../typechain/Property"

chai.use(solidity)
chai.use(chaiAsPromised)

const { expect } = chai

describe("Property", () => {
    let property: Property

    beforeEach(async () => {
        // Example
        const signers = await ethers.getSigners()
        const counterFactory = await ethers.getContractFactory(
            "Property",
            signers[0]
        )
        property = (await counterFactory.deploy()) as Property
        await property.deployed()
    })

    describe("some function", async () => {
        it("should do something", async () => {
            const balanceResponse = await property.balanceOf(signers[0].address, 0)
            expect(balanceResponse).to.eq(0)
        })
    })
})