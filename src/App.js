import React, {useState} from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [mode, setMode] = useState(false)

    function changeMode() {
        setMode(prevMode => !prevMode)
    } 

    return (
        <div>
            <Navbar darkMode={mode} toggleMode={changeMode}/>
            <Main darkMode={mode} />
        </div>
    )
}
