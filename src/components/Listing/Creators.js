import React from "react";

const Creators = ({data}) => {
  const RenderList = () => {
    return data?.map((item, index) => {
      return (
        <div
          key={index}
          style={{
            marginTop: "1em",
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            flexBasis: "12em",
          }}
        >
          <div className="image">
            <img
              src={`${item.thumbnail.path}.jpg`}
              style={{ height: "13em", width: "12em" }}
            ></img>
          </div>
          <div
            className="content"
            style={{
              color: "white",
              paddingLeft: "1.4em",
              paddingTop: "1.6em",
              paddingBottom: "4em",
            }}
          >
            <h3>
              {item.fullName}
            </h3>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="row " style={{marginLeft: "1em" }}>
          <h1></h1>
        </div>
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
    </div>
  );
};
export default Creators;
