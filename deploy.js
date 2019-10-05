const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'emotion chef example divert soft list enough health jump lottery size innocent',
  'https://rinkeby.infura.io/v3/56f42e067d0845e786cc735cfc6a138f'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode})
    .send({ gas: '30005020000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
