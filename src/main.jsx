import {BrowserRouter, Routes} from 'react-router-dom';
import { Route } from 'react-router-dom';
import React from "react";
import {NextUIProvider} from "@nextui-org/react";
import ReactDOM from 'react-dom/client'
import HomePage from "./HomePage.jsx";
import './index.css'
import UsersList from "./././User/UsersList.jsx";
import BlogList from "./Blog/BlogList.jsx";
import {UserRegister} from "././Authentication/UserRegister.jsx";
import {BlogAdd} from "./Blog/BlogAdd.jsx";
import {UserEdit} from "./././User/UserEdit.jsx";
import {BlogEdit} from "./Blog/BlogEdit.jsx";
import {Login} from "./././Authentication/Login.jsx";
import {BlogView} from "./Blog/BlogView.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
        <NextUIProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route exact path="/blog" element={<BlogList/>}/>
                    <Route exact path="/users" element={<UsersList/>}/>
                    <Route exact path="/users/signup" element={<UserRegister/>}/>
                    <Route exact path="/users/login" element={<Login/>}/>
                    <Route exact path="/blog/:id" element={<BlogView/>}/>
                    <Route exact path="/users/edit/:id" element={<UserEdit/>}/>
                    <Route exact path="/blog/add" element={<BlogAdd/>}/>
                    <Route exact path="/blog/edit/:id" element={<BlogEdit/>}/>
                </Routes>
            </BrowserRouter>
        </NextUIProvider>
)
