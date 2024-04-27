import Web3 from "web3";
import configurations from "./build/contracts/OrganChain.json";

const contractAddress = configurations.networks["5777"].address;
const contractABI = configurations.abi;
const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
const contract = new web3.eth.Contract(contractABI, contractAddress);

export default contract;


