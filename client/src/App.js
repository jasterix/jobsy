import React from "react";
import "./App.css";
import Jobs from "./Jobs";

const mockJobs = [
  {
    title: "SWE 1",
    company: "facebook"
  },
  {
    title: "SWE 1",
    company: "apple"
  },
  {
    title: "SWE 1",
    company: "msft"
  }
];

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
