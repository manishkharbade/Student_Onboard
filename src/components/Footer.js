import React from "react";

function Footer() {
  return (
    <>
      <div
        style={{
          position: "sticky",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "4rem",
          padding: "10px",
        }}
      >
        <span
          style={{ color: "#979797", marginLeft: "2rem", fontSize: "12px" }}
        >
          Powered by IIHT
        </span>
        <span
          style={{
            color: "#979797",
            marginRight: "2rem",
            fontSize: "12px",
          }}
        >
          &copy; 2023 Techademy
        </span>
      </div>
    </>
  );
}

export default Footer;
