import React from "react";
import "../styles.css";
import IconButton from "@material-ui/core/IconButton";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
var Scroll = require("react-scroll");
var scroll = Scroll.animateScroll;

function BTButton() {
  return (
    <IconButton
      onClick={() => {
        scroll.scrollToTop();
      }}
      className="BTButton"
    >
      <ExpandLessIcon />
    </IconButton>
  );
}
export default BTButton;
