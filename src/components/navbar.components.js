import React from "react";
import { BrowserRouter, Link, Route, Routes, Switch } from "react-router-dom";
import SignUp from "./login -signup/signup.component";

const Navbar = () => {
    return (
        <>
            <div
                style={{
                    background: "black",
                    color: "white",
                    padding: "15px",
                    margin: "auto",
                }}
                className="navbar"
            >
                <Link
                    style={{
                        background: "yellow",
                        color: "black",
                        padding: "5px",
                        width: "fit-content",
                        borderRadius: "5px",
                        fontWeight: "bold",
                    }}
                    className="navbar-brand"
                    to="/"
                >
                    IMDB
                </Link>
                <Link className="navbar-brand" to="/m">
                    Movies
                </Link>
                <Link className="navbar-brand" to="/add">
                    Add New
                </Link>
                <Link className="navbar-brand" to="/logIn">
                    Log in
                </Link>
                <Link className="navbar-brand" to="/signUp">
                    Sign up
                </Link>
            </div>
        </>
    );
};

export default Navbar;
