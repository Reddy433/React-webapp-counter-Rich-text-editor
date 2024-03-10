import React, { useState } from "react";
import { Button, Box } from "@mui/material";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const increment = () => {
    setCount(count + 1);
    setBackgroundColor(getBackgroundColor(count + 1));
  };

  const decrement = () => {
    setCount(count - 1);
    setBackgroundColor(getBackgroundColor(count - 1));
  };

  const reset = () => {
    setCount(0);
    setBackgroundColor("#ffffff");
  };

  const getBackgroundColor = (value) => {
    const maxCount = 100; 
    const startColor = "#ffffff"; 
    const endColor = "#ff0000"; 

    const percent = Math.min(value / maxCount, 1);
    const r = Math.ceil(
      parseInt(startColor.slice(1, 3), 16) * (1 - percent) +
        parseInt(endColor.slice(1, 3), 16) * percent
    );
    const g = Math.ceil(
      parseInt(startColor.slice(3, 5), 16) * (1 - percent) +
        parseInt(endColor.slice(3, 5), 16) * percent
    );
    const b = Math.ceil(
      parseInt(startColor.slice(5, 7), 16) * (1 - percent) +
        parseInt(endColor.slice(5, 7), 16) * percent
    );

    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  };

  return (
    <div>
      <center>
        <h2>Counter</h2>
        <Box
          display="flex"
          justifyContent="center"
          style={{ backgroundColor, padding: "10px", borderRadius: "10px" }}
        >
          <Button
            variant="contained"
            onClick={increment}
            style={{ marginRight: "8px" }}
          >
            Increment
          </Button>
          <Button
            variant="contained"
            onClick={decrement}
            style={{ marginRight: "8px" }}
          >
            Decrement
          </Button>
          <Button variant="contained" onClick={reset}>
            Reset
          </Button>
        </Box>
        <p>Count: {count}</p>
      </center>
    </div>
  );
};

export default Counter;
