import React from "react";

export const Searchbar = ({ onChangeText, text }) => {
  return (
    <div style={{ marginTop: "3em", marginBottom: "1em" }}>
      <div className="ui fluid massive transparent left icon input" style={{ backgroundColor:"#EEF1FF",padding:"0.4em"}}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            onChangeText(e.target.value);
          }}
        />
        <i className="search icon"></i>
      </div>
    </div>
  );
};
export const Search = ({ onChangeText, text }) => {
  return (
    <div
      className="ui big fluid left icon input"
      style={{ marginTop: "2em", marginBottom: "2em" }}
    >
      <input
        type="text"
        placeholder="First click the index then type for filter"
        style={{ backgroundColor: "#D6E4E5", color: "#434242" }}
        onChange={(e) => {
          onChangeText(e.target.value);
        }}
      />
      <i className="search icon"></i>
    </div>
  );
};
