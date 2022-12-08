import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchCharacters } from "../redux/actions";
import DisplayCharacters from "./Listing/DisplayCharacters";

const HoverCharacter = () => {
  const data = useSelector((state) => state?.characters?.charactersArr);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharacters(6, 0,null, null));
  }, []);
  return (
    <div
      style={{
        backgroundColor: "white",
        top: "70px",
        paddingBottom: "1em",
        position: "absolute",
        zIndex: "999",
        width: "100%",
      }}
      className="ui container"
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "2.5em",
        }}
      >
        TRENDING IN THE UNIVERSE
      </h1>
      <DisplayCharacters data={data.slice(0, 6)} />
    </div>
  );
};
export default HoverCharacter;
