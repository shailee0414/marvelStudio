import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchSeries } from "../redux/actions";
import { Searchbar } from "./Searchbar";
const Series = () => {
  const data = useSelector((state) => state?.series?.seriesArr);

  const dispatch = useDispatch();
  const [filterList, setFilterInput] = useState();
  const [offset, setOffset] = useState(0);
  const [text, setText] = useState();

  useEffect(() => {
    dispatch(fetchSeries(12, offset, null, null));
  }, []);
  useEffect(() => {
    if (data.length) {
      setFilterInput(data);
      setOffset(offset + 12);
    }
  }, [data]);

  const click = () => {
    dispatch(fetchSeries(12, offset, null, null));
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
  const RenderList = () => {
    return filterList?.map((item, index) => {
      return (
        <div key={index} className=" " style={{ marginTop: "2em",width: "17rem" }}>
          <div className="image" style={{  }}>
            <img
              src={`${item.thumbnail.path}.jpg`}
              style={{ height: "20rem",width: "17rem" }}
            ></img>
          </div>
          SERIES
          <div className="content" style={{ paddingTop: "1em" }}>
            <h3>{item.title}</h3>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="ui container" top="70px">
      <div className="row " style={{ marginTop: "7rem", marginLeft: "1em" }}>
        <h1>FEATURED SERIES</h1>
      </div>
      <Searchbar onChangeText={onChangeText} text={text} width="100%" />
      <div className="ui grid">
        <div
          className="doubling three column row"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {RenderList()}
        </div>
      </div>
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
            color: "white",
            backgroundColor: "black",
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
};
export default Series;
