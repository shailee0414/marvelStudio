import React from "react";
import { useHistory } from "react-router-dom";

const RenderList = ({ filterList }) => {
  const history = useHistory();

  const RenderList = () => {
    return filterList?.map((item, index) => {
      return (
        <div
          key={index}
          className="  "
          id="character"
          style={{
            marginTop: "2em",
            display: "flex",
            flexDirection: "column",
            alignItems:"center",
            justifyContent:"center",
            flexBasis: "20em",
          }}
        >
          <div className="image">
            <img
              src={`${item.thumbnail.path}.jpg`}
              style={{
                height: "14em",
                width: "18em",
              }}
            ></img>
          </div>
          <div
            className=""
            style={{
              paddingTop: "1.6em",
              paddingBottom: "2em",
              paddingLeft:"1em",
              alignSelf:"flex-start",
              color:"gray"
              
            }}

          >
            COMICS
            <h4 style={{textAlign:"left" ,paddingTop:"1em",color:"black"}}>{item.title}</h4>
          </div>
        </div>
      );
    });
  };
  const comic = () => {
    return (
      <div className="ui container">
        <div className="ui grid">
          <div
            className="doubling four column row"
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

  return <div>{comic()}</div>;
};
export default RenderList;
