import React from "react";

class Fraud4 extends React.Component {
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
          height: "950px"
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "min-content",
            height: "950px",
            left: "0px"
          }}
        >
          <iframe
            style={{
              width: "600px",
              height: "900px"
            }}
            title="(( (v2- (GDP/(m2-currencyComponentOfM1)) )*currencyComponentOfM1 - NM - ND) / P) / currencyComponentOfM1"
            src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=Ck6f&width=600&height=800`}
            scrolling="no"
            className="embed-container1"
          />
        </div>
      </div>
    );
  }
}
export default Fraud4;
