import React from "react";
import Bimage from "./images/homeimage.jpg";
import { isBrowser } from "react-device-detect";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { Link } from "react-scroll";
import "../styles.css";
function Home() {
  return (
    <div
      id="Home"
      className={isBrowser ? "HomeStyle row" : "homeMobile row"}
      style={{ backgroundImage: isBrowser && `url(${Bimage})` }}
    >
      <div className={isBrowser && "homeTitle"}>
        <h1 className="Title">CAMPING FRANCON</h1>
        <p class="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          congue, tellus eget dapibus dapibus, mauris leo molestie dui, non
          vulputate ipsum lacus eget est. Praesent consequat magna et tortor
          efficitur pellentesque. Integer eget lectus quis dolor commodo
          tristique. Quisque enim nulla, vulputate non interdum sit amet,
          dapibus ut lacus. In dui orci, blandit non aliquam ac, placerat quis
          dui. Nulla non enim et lectus pharetra aliquet. Curabitur commodo
          mattis diam at consequat. Donec suscipit neque ut malesuada tincidunt.
          In sed euismod velit. Ut bibendum tristique dictum. In ac mattis orci.
          Morbi id pharetra lorem.
        </p>
        {isBrowser && (
          <Link className="link" to="About" smooth={true} duration={1000}>
            <IconButton aria-label="delete" className="showMoreButton">
              <ExpandMoreRoundedIcon className="showMoreIcon vert-move" />
            </IconButton>
          </Link>
        )}
      </div>
    </div>
  );
}
export default Home;
