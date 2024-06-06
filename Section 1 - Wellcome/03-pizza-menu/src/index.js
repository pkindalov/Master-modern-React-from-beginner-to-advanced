import React from "react";
//Before React v18
// import ReactDom from "react-dom";
import ReactDom from "react-dom/client";

function App() {
  return <h1>Hello React!</h1>;
}

//React v18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before v18
// React.render(<App />);
