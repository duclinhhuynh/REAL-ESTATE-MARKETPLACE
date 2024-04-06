export const contractAbi = [
  {
    "type": "event",
    "name": "PropertyListed",
    "inputs": [
      {
        "type": "uint256",
        "name": "id",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "owner",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "price",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PropertyResold",
    "inputs": [
      {
        "type": "uint256",
        "name": "id",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "oldOwner",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "newOwner",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "price",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PropertySold",
    "inputs": [
      {
        "type": "uint256",
        "name": "id",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "oldOwner",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "newOwner",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "price",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ReviewAdded",
    "inputs": [
      {
        "type": "uint256",
        "name": "productId",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "reviewer",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "rating",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "string",
        "name": "comment",
        "indexed": false,
        "internalType": "string"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ReviewLiked",
    "inputs": [
      {
        "type": "uint256",
        "name": "productId",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "reviewIndex",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "liker",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "likes",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "function",
    "name": "addReview",
    "inputs": [
      {
        "type": "uint256",
        "name": "productId",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "rating",
        "internalType": "uint256"
      },
      {
        "type": "string",
        "name": "comment",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "buyProperty",
    "inputs": [
      {
        "type": "uint256",
        "name": "id",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "buyer",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "getAllProperties",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "",
        "components": [
          {
            "type": "uint256",
            "name": "productID",
            "internalType": "uint256"
          },
          {
            "type": "address",
            "name": "owner",
            "internalType": "address"
          },
          {
            "type": "uint256",
            "name": "price",
            "internalType": "uint256"
          },
          {
            "type": "string",
            "name": "propertyTitle",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "category",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "images",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "propertyAddress",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "description",
            "internalType": "string"
          },
          {
            "type": "address[]",
            "name": "reviewers",
            "internalType": "address[]"
          },
          {
            "type": "string[]",
            "name": "reviews",
            "internalType": "string[]"
          }
        ],
        "internalType": "struct RealEstate.Property[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getHighestRatedProduct",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getProductReviews",
    "inputs": [
      {
        "type": "uint256",
        "name": "productId",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "",
        "components": [
          {
            "type": "address",
            "name": "reviewer",
            "internalType": "address"
          },
          {
            "type": "uint256",
            "name": "productId",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "rating",
            "internalType": "uint256"
          },
          {
            "type": "string",
            "name": "comment",
            "internalType": "string"
          },
          {
            "type": "uint256",
            "name": "likes",
            "internalType": "uint256"
          }
        ],
        "internalType": "struct RealEstate.Review[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getProperty",
    "inputs": [
      {
        "type": "uint256",
        "name": "id",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      },
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getUserReviews",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "",
        "components": [
          {
            "type": "address",
            "name": "reviewer",
            "internalType": "address"
          },
          {
            "type": "uint256",
            "name": "productId",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "rating",
            "internalType": "uint256"
          },
          {
            "type": "string",
            "name": "comment",
            "internalType": "string"
          },
          {
            "type": "uint256",
            "name": "likes",
            "internalType": "uint256"
          }
        ],
        "internalType": "struct RealEstate.Review[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getUsersProperties",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "",
        "components": [
          {
            "type": "uint256",
            "name": "productID",
            "internalType": "uint256"
          },
          {
            "type": "address",
            "name": "owner",
            "internalType": "address"
          },
          {
            "type": "uint256",
            "name": "price",
            "internalType": "uint256"
          },
          {
            "type": "string",
            "name": "propertyTitle",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "category",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "images",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "propertyAddress",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "description",
            "internalType": "string"
          },
          {
            "type": "address[]",
            "name": "reviewers",
            "internalType": "address[]"
          },
          {
            "type": "string[]",
            "name": "reviews",
            "internalType": "string[]"
          }
        ],
        "internalType": "struct RealEstate.Property[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "likeReview",
    "inputs": [
      {
        "type": "uint256",
        "name": "productId",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "reviewIndex",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "listProperty",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "price",
        "internalType": "uint256"
      },
      {
        "type": "string",
        "name": "_propertyTitle",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_category",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_images",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_propertyAddress",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_description",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "propertyIndex",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "reviewsCounter",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "updatePrice",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "productId",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "price",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updateProperty",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "productId",
        "internalType": "uint256"
      },
      {
        "type": "string",
        "name": "_propertyTitle",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_category",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_images",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_propertyAddress",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_description",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  }
]