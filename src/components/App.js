import React from "react";
import Header from "./Header";
import List from "./List";
import { BrowserRouter, Route } from "react-router-dom";
import Series from "./Series";
import ComicsHover from "./ComicsHover";
import ComicsCharacters from "./ComicsCharacters";
import Events from "./Events";
import Characters from "./Characters";
import ComicsCreators from "./ComicsCreator";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div >
          <Route path="/"  component={Header} />
          <Route path="/" exact component={List} />
          <Route path="/series" exact component={Series} />
          <Route path="/comics" exact component={ComicsHover} />
          <Route path="/comic/characters" exact component={ComicsCharacters} />
          <Route path="/comics/creators" exact component={ComicsCreators}/>
          <Route path="/events" exact component={Events} />
          <Route path="/characters" exact component={Characters}/>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
