'use client';

import { useState } from 'react';
import { ethers } from "ethers";
declare var window: any

async function connectWallet() {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        try {
        await provider.send("eth_requestAccounts", []);
        } catch (err) {
        console.log(err);
        }
        const signer = provider.getSigner()
        console.log("signer", signer)
        const address = await signer.getAddress()
        console.log("address", address)
        return signer
    } else {
        console.log("No Ethereum browser detected.")
    }
}

const KodrConnect = () => {

    return (
        <div>
            <button onClick={connectWallet}>Connect Wallet</button>
        </div>
    )
}

export default KodrConnect;
