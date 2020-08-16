import React from "react";
import queryString from "query-string";
import SocialCard from "./social-card";
import "./social-card.css";

function App() {
  const location = typeof window !== undefined ? window.location : {};
  const data = queryString.parse(location.search);

  return (
    <div className="App">
      <SocialCard {...data}>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </SocialCard>
    </div>
  );
}

export default App;
