import React from "react";
import ReactDOM from "react-dom";

const ct = new Date().getHours();
var words = "";
console.log(ct);
const customStyle = {
  color: "red"
};
if (ct >= 18 && ct <= 23) {
  words = "Good evening";
  customStyle.color = "blue";
}
else if (ct >= 12 && ct <= 17) {
  words = "Good afternoon";
  customStyle.color = "green";
} else {
  words = "Good morning";
  customStyle.color = "red";
}


customStyle.color = "blue";

ReactDOM.render(
  <h1 style={customStyle}>{words}</h1>,
  document.getElementById("root")
);
