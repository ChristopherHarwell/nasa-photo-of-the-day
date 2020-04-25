import React from "react";
import "./App.css";
// import * from 'bootstrap';
import {Card} from '@material-ui/core';
import GetAPODPhoto from "./Components/GetAPODPhoto";
import GetEARTHPhoto from "./Components/GetEARTHPhoto";

function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!

        
      </p> */}
      <Card>
        <GetAPODPhoto/>
      </Card>
      <Card>
        <GetEARTHPhoto/>
      </Card>
    </div>
  );
}

export default App;
