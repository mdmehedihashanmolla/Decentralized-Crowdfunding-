# Crowdfunding Platform (Decentralized)

A decentralized crowdfunding platform built on Ethereum using smart contracts. The platform enables users to create campaigns, raise funds for their projects, and donate to causes. The backend is powered by Solidity smart contracts, and the frontend is built with React.js and integrates Web3 functionality via the Thirdweb SDK.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Smart Contract Details](#smart-contract-details)
5. [Installation](#installation)
6. [How to Run the Project Locally](#how-to-run-the-project-locally)
7. [Usage](#usage)
8. [Project Structure](#project-structure)
9. [Contributing](#contributing)
10. [License](#license)
11. [Contact](#contact)

## Project Overview

This platform leverages blockchain technology to offer transparent, secure, and decentralized fundraising for various causes. The platform allows users to:

- **Create Campaigns**: Launch new campaigns for fundraising.
- **Donate**: Contribute to active campaigns.
- **Transparency**: Track the flow of donations via smart contracts on the Ethereum blockchain.

## Features

- **Create Campaigns**: Users can create fundraising campaigns by providing details like title, description, target amount, and campaign deadline.
- **Donations**: Anyone can donate to a campaign via MetaMask, supporting projects they care about.
- **MetaMask Integration**: Users connect to the platform via MetaMask for easy wallet access and transaction management.
- **Smart Contract Powered**: All campaigns and donations are securely managed on Ethereum using smart contracts.
- **Responsive UI**: Built with React.js and styled using Tailwind CSS.

## Technologies Used

- **Frontend**:
  - React.js
  - Tailwind CSS (for styling)
  - ethers.js (Ethereum interaction library)
  - Thirdweb SDK (for interacting with smart contracts)
  - React Router (for navigation)

- **Blockchain**:
  - Ethereum
  - Solidity (for smart contracts)
  - MetaMask (for wallet connection)
  - Thirdweb (for deploying and interacting with smart contracts)

- **Backend**:
  - Ethereum Smart Contracts (Solidity)

## Smart Contract Details

The smart contract deployed on the Ethereum blockchain is responsible for creating campaigns, handling donations, and ensuring all transactions are secure and transparent.

### Key Smart Contract Functions

- `createCampaign(address _owner, string memory _title, string memory _description, uint256 _target, uint256 _deadline, string memory _image)`: Creates a new campaign with the provided details.
- `donate(uint256 _campaignId)`: Allows users to donate to a specific campaign.
- `getCampaigns()`: Fetches all campaigns from the contract.
- `getDonations(uint256 _campaignId)`: Fetches all donations made to a specific campaign.

### Contract Address

- Deployed contract address: `` (Replace this with your actual contract address).

