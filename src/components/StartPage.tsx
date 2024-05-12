import React, { useEffect, useState } from 'react';
import '../App.css';

interface StartPageProps {
  onStart: () => void; // Callback function to handle start button click
}

const StartPage: React.FC<StartPageProps> = ({ onStart }) => {
  const [transitionClass, setTransitionClass] = useState('');

  useEffect(() => {
    const handleClick = () => {
        setTransitionClass('transition-effect');
      onStart();
      
    };

    // Attach click event listener to the document
    document.addEventListener('click', handleClick);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [onStart]);

  return (
    <div className={`start-page`}>
      Click anywhere on the screen to start
    </div>
  );
};

export default  StartPage;
