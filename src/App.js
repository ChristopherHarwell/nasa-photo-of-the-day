import React from "react";
import "./App.css";
// import * from 'bootstrap';
import {Card} from 'reactstrap';
import GetPhoto from "./Components/GetPhoto";

function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!

        
      </p> */}
      <Card>
        <GetPhoto/>
      </Card>
      
    </div>
  );
}

export default App;
