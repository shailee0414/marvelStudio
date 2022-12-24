import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCharactersByLetter } from "../../redux/actions";

const CharacterNameList = ({ letter, input }) => {
  const data = useSelector((state) => state?.name);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState();
  useEffect(() => {
    if (letter != null) {
      dispatch(fetchCharactersByLetter(20, 0,null,letter, null));
    }
  }, [letter]);
  useEffect(() => {
    if (data != null) {
      setFilter(data);
    }
  }, [data]);
  console.log(data);
  useEffect(() => {
    if (input != "") {
      const arr = data?.filter((item) =>
        item.name.toLowerCase().includes(input?.toLowerCase())
      );
      setFilter(arr);
    }
  }, [input]);

  const render = () => {
    return filter?.map((item, index) => {
      return (
        <div
          key={index}
          style={{ width: "25em", paddingTop: "1em", display: "flex" }}
          className="item"
        >
          <h4>{item.name}</h4>
        </div>
      );
    });
  };

  return (
    <div className="ui container" style={{ marginTop: "3em" }}>
      <h1
        style={{
          color: "red",
          fontSize: "5em",
          fontWeight: "bold",
          marginLeft: "0.5em",
        }}
      >
        {letter?.toUpperCase() ?? " "}
      </h1>
      <div className="ui grid">
        <div
          className="doubling two column row"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {render()}
        </div>
      </div>
    </div>
  );
};
export default CharacterNameList;
