import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchCharacters } from "../redux/actions";
import { fetchComics } from "../redux/actions";
import DisplayCharacters from "./Listing/DisplayCharacters";
import RenderList from "./Listing/ComicList";
import {Searchbar} from "./Searchbar";

const Characters = () => {
  const data = useSelector((state) => state?.characters?.charactersArr);
  const comicData = useSelector((state) => state?.comics?.comicsArr);
  const dispatch = useDispatch();
  const [text, setText] = useState();
  const [filterData,setFilterData] = useState();
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    dispatch(fetchCharacters(24, 0,null,null));
    dispatch(fetchComics(4, 50));
  }, []);

  useEffect(() => {
    setOffset(offset + 24);
    if(data?.length){
      setFilterData(data);
    }
  }, [data]);
  const click=()=>{
    dispatch(fetchCharacters(24,offset,null,null));
  }
const onChangeText=(text)=>{
  setText(text);
  if(text?.length){
    const arr=data.filter((item)=>item.name.toLowerCase().includes(text.toLowerCase()));
    setFilterData(arr);
  }
}

  return (
    <div style={{position:""}}>
      <div>
        <img
          src="https://images.unsplash.com/photo-1570385253185-75d46e6cc2c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          width="100%"
          height="450rem%"
          position="relative"
        />
        <div
          style={{
            textAlign: "center",
            position: "absolute",
            top: "15rem",
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <h2
            style={{ color: "wheat", fontSize: "3.5em", marginBottom: "0" }}
            height="fitToContent"
          >
            MARVEL CHARACTERS
          </h2>
          <h2 style={{ color: "wheat", textAlign: "center", marginTop: "0" }}>
            Get hooked on a hearty helping of heroes and villains from the
            humble House of Ideas!
          </h2>
        </div>
      </div>
      <div style={{ paddingLeft: "7.5em", paddingTop: "2em" }}>
        <h1>FEATURED CHARACTERS</h1>
      </div>
      <DisplayCharacters data={data.slice(0, 6)} />
      <div style={{ paddingLeft: "7.5em", paddingTop: "2em" }}>
        <h1> CHARACTERS SPOTLIGHT</h1>
      </div>
      <RenderList filterList={comicData.slice(0, 4)} />
      <div
        className="ui container"
        style={{ marginTop: "", paddingBottom: "4em" }}
      >
        <div style={{ paddingTop: "2em"}}>
          <h1>MARVEL CHARACTERS LIST</h1>
        </div>
       <Searchbar onChangeText={onChangeText} text={text}/>
        <DisplayCharacters data={filterData} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2em",
          }}
        >
          <button
            className=" ui  button"
            onClick={click}
            style={{
              justifySelf: "center",
              marginBottom: "2rem",
              backgroundColor: "black",
              color: "white",
            }}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};
export default Characters;
