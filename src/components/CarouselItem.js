import React from "react";
import { Paper} from "@mui/material";
const CarouselItem = ({ item }) => {
  return (
    <Paper
      style={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={`${item.thumbnail.path}.jpg`}
        style={{ width: "60%", margin: "10px", height: "60vh" }}
      />
      <h1
        className=" "
        style={{
          fontSize: "",
          marginTop: "0",
          marginBottom: "1em",
          color: "white",
          textAlign:"center"
        }}
      >
        {item.title.toUpperCase()}
      </h1>
    </Paper>
  );
};
export default CarouselItem;
