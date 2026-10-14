import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  return (
    <div>
      <h1>Simple Calculator</h1>

      <input
        type="number"
        placeholder="Enter first number"
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter second number"
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={() => setResult(Number(num1) + Number(num2))}>Add</button>

      <button onClick={() => setResult(Number(num1) - Number(num2))}>Subtract</button>

      <button onClick={() => setResult(Number(num1) * Number(num2))}>Multiply</button>

      <button onClick={() => setResult(Number(num2) === 0 ? "Cannot divide by zero" : Number(num1) / Number(num2))}>Divide</button>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;