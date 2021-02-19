import React from "react";

export default ({
  children,
  title = "This is the default title!",
  width = "1200px",
  height = "630px",
}) => {
  const styles = {
    width: width,
    height: height,
  };
  return (
    <div className="SocialCardWrapper" style={styles}>
      <div id="social-card" className="SocialCard">
        <h1>{title}</h1>
        <hr />
        {children}
      </div>
    </div>
  );
};
