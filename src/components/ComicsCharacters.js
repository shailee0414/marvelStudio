import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchCharacters } from "../redux/actions";
import { Search } from "./Searchbar";
import AlphabetIndex from "./AlphabetIndex";
import DisplayCharacters from "./Listing/DisplayCharacters";

const ComicsCharacters = () => {
  const data = useSelector((state) => state?.characters?.charactersArr);
  const [text, setText] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharacters(12, 0,null, "a"));
  }, []);
  const onChangeText = (text) => {
    setText(text);
  };
  return (
    <div className="ui container" style={{ paddingBottom: "2em" ,top:"70px"}}>
      <h1 style={{ marginTop: "4em",marginBottom:"1em" }}>FEATURED CHARACTERS</h1>
      <DisplayCharacters data={data.slice(0, 12)} />
      <h1 style={{ marginTop: "1em" }}>CHARACTER INDEX A-Z</h1>
      <Search onChangeText={onChangeText} text={text} />
      <AlphabetIndex input={text} type="character" />
    </div>
  );
};

export default ComicsCharacters;
