/* eslint-env client */
'use client';

import { Canvas } from 'canvas';
import { DEFAULT_STATE, GlobalContext } from 'contexts/global';
import {Game} from 'game';
import React, { useState } from 'react';
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import MyApp from 'updateLeaderboardWithPublicKey';
import LeaderboardTable from 'LeaderboardTable';
import StartPage from 'components/StartPage';
import { motion } from 'framer-motion';
import './App.css';


export const App: React.FC = () => {
  const [state, setState] = useState(DEFAULT_STATE.state);
  const [showStartPage, setShowStartPage] = useState(true);
  const {connected} = useWallet();

  const handleStart = () => {
    // Handle start button click
    console.log('Start button clicked');
    setShowStartPage(false); // Hide the StartPage
  };


  function reducer(partial: Record<any, any>) {
    setState({ ...state, ...partial });
  }



  return (
    <>
    
      {showStartPage && <StartPage onStart={handleStart} />}
      { !showStartPage && (
      <>
      <motion.div
  className={`app-page`}
  initial={{ scale: 0, opacity: 0 }} // Start from scaled down and invisible
  animate={{ scale: 1, opacity: 1 }} // Pop-out and fade in
  exit={{ scale: 0, opacity: 0 }} // Scale down and fade out
  transition={{ duration: 0.5, ease: "easeInOut" }} // Shorter animation duration
> 
  <div className="absolute top-0 right-0 p-10">
          <WalletMultiButton />
        </div><div className="flex justify-center items-center h-screen " style={{ marginTop: '20px' }}>
            <GlobalContext.Provider value={{ state, setState: reducer }}>
              <MyApp />
              {/* Render canvas and game if connected */}
              {connected && (
                <>
                  <Canvas />
                  <Game />
                </>
              )}
            </GlobalContext.Provider>
          </div><LeaderboardTable />
          </motion.div></>
        )}
    </>
  );
};