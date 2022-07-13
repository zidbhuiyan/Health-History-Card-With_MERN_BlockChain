export const Client_ADDRESS =
  "0x859Ad2084e97882656285de90eA1a9EB92639bD1";

export const Client_ABI = [
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
    "name": "drugsCount",
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
    "name": "familyDiseaseCount",
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
    "name": "personalCount",
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
        "name": "_problem",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_problemType",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_Time",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_hid",
        "type": "string"
      }
    ],
    "name": "setPersonalData",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getPersonalDataCount",
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
    "name": "getPersonalData",
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
    "name": "getPersonalStaffData",
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
        "name": "_Disease",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_Relation",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_Time",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_hid",
        "type": "string"
      }
    ],
    "name": "setFamilyDiseaseData",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getFamilyDiseaseDataCount",
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
    "name": "getFamilyDiseaseData",
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
    "name": "getFamilyDiseaseStaffData",
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
        "name": "_Drugs",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_DrugsMonth",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_DrugsDay",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_DrugTime",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_hid",
        "type": "string"
      }
    ],
    "name": "setDrugsData",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getDrugsDataCount",
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
    "name": "getDrugsData",
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
    "name": "getDrugsDocData",
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
        "name": "_vaccineDisease",
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
