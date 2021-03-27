import React from "react";

class Fraud6 extends React.Component {
  state = {};
  render() {
    return (
      <div
        style={{
          overflowX: "auto",
          overflowY: "hidden",
          display: "flex",
          position: "relative",
          left: "0px",
          flexDirection: "column",
          fontSize: "16px",
          width: "100%",
          transition: ".3s ease-out",
          height: "450px"
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "min-content",
            height: "450px",
            left: "0px"
          }}
        >
          <iframe
            style={{
              width: "600px",
              height: "900px"
            }}
            title="(( (v2- (GDP/(m2-currencyComponentOfM1)) )*currencyComponentOfM1 - NM - ND) / P) / currencyComponentOfM1"
            src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=Co5w&width=600&height=400`}
            scrolling="no"
            className="embed-container1"
          />
        </div>
      </div>
    );
  }
}
export default Fraud6;
