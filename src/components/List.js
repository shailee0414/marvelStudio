import React from "react";
import { useEffect, useState } from "react";
import { fetchComics } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import {Searchbar} from "./Searchbar";
import RenderList from "./Listing/ComicList";
import Carousels from "./Carousels";
import Events from "./Events";

const ComicsList = () => {
  const data = useSelector((state) => state?.comics?.comicsArr ?? []);
  const dispatch = useDispatch();
  const [filterList, setFilterInput] = useState();
  const [offset, setOffset] = useState(0);
  const [text, setText] = useState();

  useEffect(() => {
    dispatch(fetchComics(8,offset,null,null));
  }, []);

  useEffect(() => {
    if (data.length) {
      setFilterInput(data);
      setOffset(offset + 8);
    }
  }, [data]);

  const click = () => {
    dispatch(fetchComics(8,offset,null,null));
  };

  const onChangeText = (text) => {
    setText(text);
    if (text?.length) {
      const arr = data.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilterInput(arr);
    }
  };

  return (
    <div className="ui container" style={{position:"relative"}}>
      <Carousels style={{position:"relative"}}/>
      <Events/>
      <Searchbar onChangeText={onChangeText} text={text} />
      <h1>COMICS</h1>
      <div className="ui grid" style={{  }}>
        <div className="doubling six column row ">
          <RenderList filterList={filterList ?? []} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems:"center",
          marginTop:"2em",
        }}
      >
        <button
          className=" ui  button"
          onClick={click}
          style={{ justifySelf: "center",marginBottom:"2rem" ,color:"white" ,backgroundColor:"black"}}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default ComicsList;
