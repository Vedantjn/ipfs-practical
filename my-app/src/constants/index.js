export const NFT_CONTRACT_ADDRESS = "0xa5177A47c9f9cac8527785039b61dAa0069Da1c6";
export const abi = {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "baseURI",
            "type": "string"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "type": "error",
        "name": "ERC721EnumerableForbiddenBatchMint"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "type": "error",
        "name": "ERC721IncorrectOwner"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "type": "error",
        "name": "ERC721InsufficientApproval"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "approver",
            "type": "address"
          }
        ],
        "type": "error",
        "name": "ERC721InvalidApprover"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "type": "error",
        "name": "ERC721InvalidOperator"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "type": "error",
        "name": "ERC721InvalidOwner"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          }
        ],
        "type": "error",
        "name": "ERC721InvalidReceiver"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          }
        ],
        "type": "error",
        "name": "ERC721InvalidSender"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "type": "error",
        "name": "ERC721NonexistentToken"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "type": "error",
        "name": "ERC721OutOfBoundsIndex"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "type": "error",
        "name": "OwnableInvalidOwner"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "type": "error",
        "name": "OwnableUnauthorizedAccount"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address",
            "indexed": true
          },
          {
            "internalType": "address",
            "name": "approved",
            "type": "address",
            "indexed": true
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256",
            "indexed": true
          }
        ],
        "type": "event",
        "name": "Approval",
        "anonymous": false
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address",
            "indexed": true
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address",
            "indexed": true
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool",
            "indexed": false
          }
        ],
        "type": "event",
        "name": "ApprovalForAll",
        "anonymous": false
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "previousOwner",
            "type": "address",
            "indexed": true
          },
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address",
            "indexed": true
          }
        ],
        "type": "event",
        "name": "OwnershipTransferred",
        "anonymous": false
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address",
            "indexed": true
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address",
            "indexed": true
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256",
            "indexed": true
          }
        ],
        "type": "event",
        "name": "Transfer",
        "anonymous": false
      },
      {
        "inputs": [],
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "inputs": [],
        "stateMutability": "view",
        "type": "function",
        "name": "_paused",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ]
      },
      {
        "inputs": [],
        "stateMutability": "view",
        "type": "function",
        "name": "_price",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ]
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function",
        "name": "approve"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ]
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "name": "getApproved",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ]
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "name": "isApprovedForAll",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ]
      },
      {
        "inputs": [],
        "stateMutability": "view",
        "type": "function",
        "name": "maxTokenIds",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ]
      },
      {
        "inputs": [],
        "stateMutability": "payable",
        "type": "function",
        "name": "mint"
      },
      {
        "inputs": [],
        "stateMutability": "view",
        "type": "function",
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ]
      },
      {
        "inputs": [],
        "stateMutability": "view",
        "type": "function",
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ]
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "name": "ownerOf",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ]
      },
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
        "name": "renounceOwnership"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function",
        "name": "safeTransferFrom"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function",
        "name": "setApprovalForAll"
      },
      {
        "inputs": [
          {
            "internalType": "bool",
            "name": "paused",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function",
        "name": "setPaused"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "stateMutability": "pure",
        "type": "function",
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ]
      },
      {
        "inputs": [],
        "stateMutability": "view",
        "type": "function",
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ]
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "name": "tokenByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ]
      },
      {
        "inputs": [],
        "stateMutability": "view",
        "type": "function",
        "name": "tokenIds",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          }
        ]
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "name": "tokenOfOwnerByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ]
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ]
      },
      {
        "inputs": [],
        "stateMutability": "view",
        "type": "function",
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ]
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function",
        "name": "transferFrom"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function",
        "name": "transferOwnership"
      },
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
        "name": "withdraw"
      }
    ]
  }
  ;