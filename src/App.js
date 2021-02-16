import React from "react"
import Content from "./components/content"
import Banner from "./components/Banner/"
import Navbar from "./components/Navbar/"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Content />
    </div>
  )
}

export default App
