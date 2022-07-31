import { useState } from "react";

const ButtonCount = () => {
  const [numCount, setNumCount] = useState(0);

  // onclick handler
  const handleClick = () => {
    setNumCount((prev) => {
      prev + 1;
    });
  };

  return <button onClick={handleClick}>Times Clicked: {numCount}</button>;
};
