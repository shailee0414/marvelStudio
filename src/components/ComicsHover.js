import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComics } from "../redux/actions";
import { useHistory } from "react-router-dom";

const ComicsHover = () => {
  const data = useSelector((state) => state?.comics?.comicsArr ?? []);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(fetchComics(6, 0, "thisMonth",null));
  }, []);

  const RenderList = () => {
    return data.slice(0, 6)?.map((item, index) => {
      return (
        <div
          key={index}
          className="  "
          id="character"
          style={{
            marginTop: "2em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexBasis: "10em",
          }}
        >
          <div className="image">
            <img
              src={`${item.thumbnail.path}.jpg`}
              style={{
                height: "11em",
                width: "10em",
              }}
            ></img>
          </div>
          <div
            className=""
            style={{
              paddingBottom: "0",
              paddingLeft: "1em",
              alignSelf: "flex-start",
              color: "gray",
            }}
          >
            COMICS
            <h4
              style={{ textAlign: "left", paddingTop: "1em", color: "black" }}
            >
              {item.title}
            </h4>
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
            className="doubling six column row"
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

  return (
    <div className="ui container" style={{position:"absolute",zIndex:"999",backgroundColor:"white",width:"100%",top:"70px"}}>
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "",
          alignContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1>LATEST COMICS</h1>
        </div>
        {comic()}
        <div className="">
          <ul
            style={{
              marginTop:"0",
              listStyleType: "none",
              display: "flex",
              justifyContent: "center",
              paddingTop:"1em"
            }}
          >
            <li style={{padding:"0.5em"}}>
              <a  style={{color:"brown"  }}>
                BROWSE BY
              </a>
            </li>
            <li style={{padding:"0.5em"}}>
              <a
                style={{ color:"black" }}
                onClick={() => {
                  history.push({
                    pathname: "/series",
                  });
                }}
              >
                SERIES
              </a>
            </li >
            <li style={{padding:"0.5em"}}>
              <a
                style={{  color:"black" }}
                onClick={() => {
                  history.push({
                    pathname: "/comic/characters",
                  });
                }}
              >
                CHARACTER
              </a>
            </li>
            <li style={{padding:"0.5em"}}>
              <a
                style={{color:"black"  }}
                onClick={() => {
                  history.push({
                    pathname: "/comics/creators",
                  });
                }}
              >
                CREATORS
              </a>
            </li>
            <li style={{padding:"0.5em"}}>
              <a
                style={{ color:"black" }}
                onClick={() => {
                  history.push({
                    pathname: "/events",
                  });
                }}
              >
                EVENTS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ComicsHover;
