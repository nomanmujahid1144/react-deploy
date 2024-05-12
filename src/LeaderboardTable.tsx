import React, { useState, useEffect } from 'react';
import { Virtuoso } from 'react-virtuoso';

import { getleaderboard } from 'updateLeaderboardWithPublicKey'; // Import the function to get leaderboard data from API

interface LeaderboardEntry {
  wallet_address: string;
  score: number;
}

const LeaderboardTable: React.FC = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await getleaderboard();
        if (response) {
          setLeaderboardData(response); // Assuming the API response contains an array of leaderboard data
        }
      } catch (error) {
        console.error('Error fetching leaderboard: ', error);
      }
    };
  
    fetchLeaderboard();
  }, []);

  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Leaderboard</h2>
      <Virtuoso style={{ height: '600px' }} totalCount={leaderboardData.length} itemContent={index => (
        <div>
          <table style={{margin: 'auto'}}>
            <thead>
              {index === 0 && ( // Render the header only for the first item
                <tr>
                  <th style={{ width: 300 }}>Wallet Address</th>
                  <th style={{width: 300}}>Score</th>
                </tr>
              )}
            </thead>
            <tbody>
              <tr>
                <td style={{ width: 300 ,textAlign: 'center'}}>{leaderboardData[index].wallet_address?.substring(0, 6) + "..."}</td>
                <td style={{ width: 300,textAlign: 'center'}}>{leaderboardData[index].score}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )} />
    </div>
  );
};

export default LeaderboardTable;