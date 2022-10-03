const { ethers } = require("hardhat");

 async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  const weiAmount = (await deployer.getBalance()).toString();
  console.log("Account balance:", (await deployer.getBalance()).toString());

 
  const TinyToken = await ethers.getContractFactory("TinyToken");
  const tinyToken = await TinyToken.deploy();

  console.log("TinyToken address:", tinyToken.address);

  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
