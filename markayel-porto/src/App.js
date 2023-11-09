import React from "react";
import Welcome from "./Components/Welcome";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Tom from "./Components/Tom";
import './App.css'
import myImage from "./Components/IMG_4270-removebg-preview.png"
const App = () => {
return (
<>
<div class= "welcome">
      
    </div>
<Projects />
<About />
<Tom/>
<div class= "picbox"> 
<p> Female </p>
<p> San Diego, CA</p>
<p> United States</p>
<p> Last Login:  </p>
<img src={myImage}
        alt="Paris Picture" 
      /></div>
</>

)
}


export default App;
