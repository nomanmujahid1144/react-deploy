import  {  useEffect } from 'react';
import { useWallet } from "@solana/wallet-adapter-react";
import axios from 'axios';

let wallet_address = "";
const baseURL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:9001';
// const baseURL = 'http://localhost:9001';

export const updateLeaderboardWithPublicKey = async (score: number) => {
  try {
    console.log(baseURL);
    
    await axios.post(`${baseURL}/update-leaderboard`, { wallet_address, score });
    console.log('Leaderboard updated successfully');
} catch (error) {
    console.error('Error updating leaderboard: ', error);
}
};

export const getleaderboard = async() => {
  try{
    console.log(baseURL);
    const response = await axios.get(`${baseURL}/leaderboard`);
    return response.data;
  } catch (error){
    console.error('Error in getLeaderboard: ',error );
  }
}

const MyComponent = () => {
  const {publicKey} = useWallet();

  useEffect(() => {
    if (publicKey) {
      wallet_address = publicKey.toBase58(); // Convert publicKey to string
    }
  }, [publicKey]);

  return null; 
};

const MyApp = () => {
  return (
    <div>
      <MyComponent />
    </div>
  );
};

export default MyApp;
