const hre = require("hardhat");

async function main() {
  const TradesmenNFT = await hre.ethers.getContractFactory("Greeter");
  const tradesmenNFT = await TradesmenNFT.deploy();

  await tradesmenNFT.deployed();

  console.log("TradesmenNFT deployed to:", tradesmenNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
