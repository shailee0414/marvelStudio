import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {  fetchCreators } from "../redux/actions";
import Creators from "./Listing/Creators";
import { Search } from "./Searchbar";
import  AlphabetIndex  from "./AlphabetIndex";

const ComicsCreators = () => {
  const data = useSelector((state) => state?.creators?.creatorsArr);
  const [text,setText]=useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCreators(20,0,null,null));
  }, []);
  console.log("ss",data)
  const onChangeText=(text)=>{
    setText(text)
  }
  return (
    <div className="ui container" style={{paddingBottom:"2em",top:"70px"}}>
      <h1 style={{ marginTop: "4em" }}>FEATURED CREATORS</h1>
      <Creators data={data.slice(0, 12)} />
      <h1 style={{ marginTop: "1em" }}>CREATOR INDEX A-Z</h1>
      <Search onChangeText={onChangeText} text={text}/>
    <AlphabetIndex input={text} type={"creator"}/>
    </div>
  );
};

export default ComicsCreators;