import type { HardhatRuntimeEnvironment } from "hardhat/types";

const deploy = async ({ ethers }: HardhatRuntimeEnvironment) => {
  const [owner] = await ethers.getSigners();
  const transactionHash = await owner.sendTransaction({
    to: "",
    value: ethers.utils.parseEther("1.0"),
  });
  console.log(`transactionHash: ${transactionHash.hash}`);
};

deploy.tags = ["TechStack"];

export default deploy;
