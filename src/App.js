import React from "react";
import Navbar from "./components/navbar.components";
import Movies from "./components/movies.componnt";
import SignUp from "./components/login -signup/signup.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./components/login -signup/login.component";
import AddNewMovies from "./components/Common/addNewMovies.component";
import Home from "./components/Common/home.component";

const App = () => {
    return (
        <>
            <div>
                <Navbar />

                {/* <Movies /> */}
            </div>

            <Routes>
                <Route
                    path="/signUp"
                    element={<SignUp />}
                />{" "}
                <Route
                    path="/logIn"
                    element={<LogIn />}
                />{" "}
                <Route
                    path="/add"
                    element={<AddNewMovies />}
                />
                <Route
                    path="/m"
                    element={<Movies />}
                /><Route
                path="/"
                element={<Home />}
            />
            </Routes>
        </>
    );
};

export default App;
