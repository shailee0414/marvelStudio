import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import ComicsHover from "./ComicsHover";
import HoverCharacter from "./HoverCharacter";

const Header = () => {
  const history = useHistory();
  const [isMouse, setIsMouse] = useState();
  const [isChar, setIsChar] = useState();

  return (
    <div
      style={{ position: "absolute", top: "0", width: "100%", zIndex: "999" }}
    >
      <div
        className="ui borderless black inverted menu"
        style={{
          borderRadius: "0",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="ui eight item " style={{ alignSelf: "center" }}>
          <a className="active item">NEWS</a>
          <a
            className="item"
            onMouseOver={() => setIsMouse(true)}
            onMouseOut={() => setIsMouse(false)}
            onClick={() =>
              history.push({
                pathname: "/comics",
              })
            }
          >
            COMICS
          </a>

          <a
            className="item dropdown"
            onClick={() => history.push({ pathname: "/characters" })}
            onMouseOver={() => setIsChar(true)}
            onMouseOut={() => setIsChar(false)}
          >
            CHARACTER
          </a>
          <a className="item" onClick={()=>history.push({pathname:"/series"})}>SERIES</a>
        </div>
      </div>
      {isMouse && (
        <div style={{ position: "static", display: "block" }}>
          <ComicsHover />
        </div>
      )}
      {isChar && (
        <div style={{ position: "static", display: "block" }}>
          <HoverCharacter />
        </div>
      )}
    </div>
  );
};
export default Header;
