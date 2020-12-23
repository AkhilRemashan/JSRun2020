import React from "react"

import Footer from "./components/Footer"
import MainComponent from "./components/MainContent"
import NavBar from "./components/NavBar"

function App() {
    return (
        <div>
            <NavBar />
            <MainComponent />
            <Footer />
        </div>
    )
}

export default App