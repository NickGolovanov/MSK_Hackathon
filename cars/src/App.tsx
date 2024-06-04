import { useState } from "react";
import Web3 from "web3";
import { abi } from "./assets/CarNFT";

function App() {
    const [connectedAccount, setConnectedAccount] = useState<string | null>(null);

    const win = window as any;
    
    async function connectMettaMask() {
        if (win.ethereum) {
            const web3 = new Web3(win.ethereum);

            await win.ethereum.request({ method: 'eth_requestAccounts' });

            const accounts = await web3.eth.getAccounts();

            setConnectedAccount(accounts[0]);
        } else {
            alert("Please install MetaMask!");
        }
    }

    async function buyNFT() {
        if (connectedAccount) {
            const web3 = new Web3(win.ethereum);
            const contract = new web3.eth.Contract(abi as any, "0x52117e8f26da7d10b514a331fb793c0c6304896a");

            try {
                const receipt = await contract.methods.safeMint(connectedAccount, "http://", 100, 200, 700).send({
                    from: connectedAccount,
                    gas: "10000000",
                    gasPrice: "10000000"
                });
                console.log(receipt.transactionHash);
            } catch (error) {
                console.error("Error minting NFT:", error);
            }
        } else {
            alert("Connect to MetaMask first!");
        }
    }

    return (
        <> 
            <button onClick={connectMettaMask}> Connect to MetaMask</button>
            <button onClick={buyNFT}>Buy NFT</button>
            <h2>{connectedAccount}</h2>
        </>
    );
}

export default App;
