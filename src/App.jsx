import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import OurFood from "./Components/OurFood";
import AboutUs from "./Components/AboutUs";
import SignIn from "./Components/SignIn";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount]= useState(0)

  const handleAdd=()=>{
    setCount(count>=0?count+1:count=0)
  }
  const removeItem=()=>{
    setCount(count>0?count-1:count)
  }
  return (
    <>
      <div>
        <HashRouter>
          <div className="container">
          <Header count={count}/>
          <Routes>
            <Route path="/" element={<Home handleAdd={handleAdd}removeItem={removeItem}/>} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/ourfood" element={<OurFood handleAdd={handleAdd} removeItem={removeItem}/>} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
          <Footer />
          </div>
        </HashRouter>
      </div>
    </>
  );
}

export default App;
