export const Client_ADDRESS =
  "0x0a5461278903651c6B138B789f0Fb60455132F79";

export const Client_ABI =  [
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "suggestionsCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "_Dfirstname",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_Dlastname",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_Docregid",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_hospitalname",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_Dsuggestios",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_DsuggestiosTime",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_hid",
        "type": "string"
      }
    ],
    "name": "setSuggestionsData",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getSuggestionsDataCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "dataNum",
        "type": "uint256"
      }
    ],
    "name": "getSuggestionsData",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];
