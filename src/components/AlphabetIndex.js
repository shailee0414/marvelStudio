import React from "react";
import { useState } from "react";
import CharacterNameList from "./Listing/CharacterNameList";
import {  fetchName } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CreatorNameList from "./Listing/CreatorNameList";

const AlphabetIndex = ({ input, type }) => {
  const arr = useSelector((state) => state?.letter);
  const dispatch = useDispatch();
  const [letter, SetLetter] = useState(null);
  useEffect(() => {
    dispatch(fetchName());
  }, []);
  const onClick = (e) => {
    e.preventDefault();
  };
  const component = () => {
    if (type == "creator") {
      return (
        <div>
          <CreatorNameList letter={letter ?? null} input={input} />
        </div>
      );
    } else if (type == "character") {
      return (
        <div>
          <CharacterNameList letter={letter ?? null} input={input} />;
        </div>
      );
    }
  };
  const alphabet = () => {
    return arr?.map((item) => {
      return (
        <li
          key={item.id}
          onClick={() => {
            SetLetter(item.id);
          }}
        >
          <a
            href=""
            style={{ color: "black", fontSize: "1.5em", fontWeight: "bold" }}
            onClick={onClick}
          >
            {item.value}
          </a>
        </li>
      );
    });
  };

  return (
    <div>
      <ul
        style={{
          listStyleType: "none",
          marginRight: "2em",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {alphabet()}
      </ul>
      {component()}
    </div>
  );
};
export default AlphabetIndex;
