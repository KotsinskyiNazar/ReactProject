import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import {Layout} from "./Components";
import {GenrePage, MoviesPage,MoviePage} from "./Pages";
import { darkTheme, lightTheme, GlobalStyles } from "./Components/Header/Theme";





function App() {

    const [theme, setTheme] = useState("light");

    const switchTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
        <div className="App">
            <button onClick={switchTheme}>Switch Theme</button>
            {console.log(process.env.REACT_APP_API_KEY)}
            <Routes>
                <Route path={"/"}element={<Layout/>}>
                    <Route path={"movies"} element={<MoviesPage/>}></Route>
                    <Route path={'movies/:id'} element={<MoviePage/>}/>
                    <Route path={"genres"} element={<GenrePage/>}/>
                </Route>
            </Routes>

        </div>
        </ThemeProvider>
    );
}

export default App;
