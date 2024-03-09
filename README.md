Sure, here's a sample README.md file for the open-source project:

```markdown
# Ethereum Active Users Checker

A simple JavaScript function to estimate the number of active users on the Ethereum blockchain using the Etherscan API.

## Overview

This project provides a JavaScript function that asynchronously fetches the total ether supply from the Etherscan API and estimates the number of active users on the Ethereum blockchain based on that supply.

## Prerequisites

- Node.js installed on your machine.
- An API key from Etherscan. You can sign up [here](https://etherscan.io/apis).

## Installation

1. Clone this repository:

```
git clone https://github.com/yourusername/ethereum-active-users.git
```

2. Navigate to the project directory:

```
cd ethereum-active-users
```

3. Install dependencies:

```
npm install
```

4. Open `index.js` and replace `'Your_Etherscan_API_Key'` with your actual Etherscan API key.

## Usage

The `getActiveUsersCount()` function asynchronously fetches the total ether supply from the Etherscan API and estimates the number of active users on the Ethereum blockchain.

```javascript
const { getActiveUsersCount } = require('./index');

getActiveUsersCount()
    .then(activeUsersCount => {
        if (activeUsersCount !== null) {
            console.log("Number of active users on Ethereum chain:", activeUsersCount);
        } else {
            console.log("Failed to fetch active users count.");
        }
    });
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests.

## Acknowledgements

- This project relies on the [Etherscan API](https://etherscan.io/apis) for fetching blockchain data.
```

Feel free to customize it further based on your project's specific requirements and guidelines.