import { createContext, useState } from 'react';

export const LoyaltyContext = createContext();

export function LoyaltyProvider({ children }) {
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState(1);
  const [rewards, setRewards] = useState([]);

  const addPoints = (amount) => {
    setPoints(prev => prev + amount);
    checkLevel();
  };

  const checkLevel = () => {
    // Update user level based on points
  };

  return (
    <LoyaltyContext.Provider value={{ points, level, rewards, addPoints }}>
      {children}
    </LoyaltyContext.Provider>
  );
} 