async function getActiveUsersCount() {
    const apiKey = 'Your_Etherscan_API_Key'; // You need to sign up on Etherscan and get an API key
    const apiUrl = `https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.status === "1") {
            const activeUsersCount = data.result / 10 ** 18; // Convert from Wei to Ether
            return activeUsersCount;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error("Error fetching active users count:", error);
        return null;
    }
}

// Example usage
getActiveUsersCount()
    .then(activeUsersCount => {
        if (activeUsersCount !== null) {
            console.log("Number of active users on Ethereum chain:", activeUsersCount);
        } else {
            console.log("Failed to fetch active users count.");
        }
    });