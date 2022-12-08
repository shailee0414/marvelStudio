import React from "react";

const DisplayCharacters = ({data}) => {
  const RenderList = () => {
    return data?.map((item, index) => {
      return (
        <div
          key={index}
          className="  "
          id="character"
          style={{
            marginTop: "1em",
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            flexBasis: "11em",
          }}
        >
          <div className="image">
            <img
              src={`${item.thumbnail.path}.jpg`}
              style={{
                height: "12em",
                width: "11em",
                borderBottomColor: "#red",
                borderBottomWidth: "2px",
              }}
            ></img>
          </div>
          <div
            className=""
            style={{
              color: "white",
              paddingLeft: "1.4em",
              paddingTop: "1.6em",
              paddingBottom: "2em",
            }}
          >
            <h4>{item.name}</h4>
          </div>
        </div>
      );
    });
  };
  const CharacterList = () => {
    return (
      <div className="ui container">
        <div className="ui grid">
          <div
            className="doubling four column row"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom:"2em"
            }}
          >
            {RenderList()}
          </div>
        </div>
      </div>
    );
  };
  return <div>
    {CharacterList()}
  </div>
};
export default DisplayCharacters;
