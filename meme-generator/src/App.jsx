import { useState } from 'react'
import './App.css'

import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"

function App() {
    return (
        <div>
          <header className="header">
            <img src="./src/assets/troll-face.png" 
            className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 1</h4>
         </header>
         <Meme />
        </div>
    )
}

export default App
