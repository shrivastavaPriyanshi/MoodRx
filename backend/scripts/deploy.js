const hre = require("hardhat");

async function main() {
  const RewardToken = await hre.ethers.getContractFactory("RewardToken");
  const token = await RewardToken.deploy();

  await token.waitForDeployment(); // 

  console.log(`RewardToken deployed to: ${await token.getAddress()}`); 
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
