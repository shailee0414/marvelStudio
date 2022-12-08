import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCreatorsByLetter } from "../../redux/actions";

const CreatorNameList = ({ letter, input }) => {
  const data = useSelector((state) => state?.creatorName);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState();
  useEffect(() => {
    if (letter != null) {
      dispatch(fetchCreatorsByLetter(50, 0, null, letter, letter));
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
        item.firstName.toLowerCase().includes(input?.toLowerCase())
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
          <h4>{item.firstName}</h4>
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
export default CreatorNameList;
