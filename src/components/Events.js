import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchEvents } from "../redux/actions";

const Events = () => {
  const data = useSelector((state) => state?.events?.eventsArr);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEvents(10,0,null,null));
  }, []);
  const RenderList = () => {
    return data.slice(0,6)?.map((item, index) => {
      return (
        <div
          key={index}
          className=" "
          style={{ marginTop: "3em" }}
        >
          <div className="image">
            <img
              src={`${item.thumbnail.path}.jpg`}
              style={{ height: "23rem" }}
            ></img>
          </div>
          EVENTS
          <div className="content" style={{paddingTop:"1em"}}>
            <h3>{item.title}</h3>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="row " style={{ marginTop: "7em", marginLeft: "3em" }}>
          <h1> EVENTS</h1>
        </div>
        <div className="doubling three column row" style={{display:"flex" ,flexDirection:"row",justifyContent:"space-evenly"}}>{RenderList()}</div>
      </div>
    </div>
  );
};
export default Events;
