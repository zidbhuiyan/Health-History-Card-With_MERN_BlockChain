export const Client_ADDRESS =
  "0xA6B51457C7B6bFD3e654BeC0cDfec16c91B5da23";

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
    "name": "booldtransfusionCount",
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
    "constant": true,
    "inputs": [],
    "name": "vaccineCount",
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
        "name": "_firstname",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_lastname",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_Vregid",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_hospitalname",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_vaccineName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_vaccineDoseNum",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_vaccineTime",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_hid",
        "type": "string"
      }
    ],
    "name": "setVaccineData",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getVaccineCount",
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
    "name": "getVaccineData",
    "outputs": [
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
    "name": "getVaccineStaffData",
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
        "name": "_firstname",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_lastname",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_Rregid",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_hospitalname",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_booldtransfusionAmount",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_booldtransfusionType",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_booldtransfusionTime",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_hid",
        "type": "string"
      }
    ],
    "name": "setBooldtransfusionData",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getBooldtransfusionCount",
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
    "name": "getBooldtransfusionData",
    "outputs": [
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
    "name": "getBooldtransfusionStaffData",
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
