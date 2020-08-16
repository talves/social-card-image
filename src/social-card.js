import React from "react";

export default ({
  children,
  title = "Missing Title",
  width = "1024px",
  height = "542px",
}) => {
  const styles = {
    width: width,
    height: height,
  };
  return (
    <div id="social-card" className="SocialCard" style={styles}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};
