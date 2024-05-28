import {BrowserRouter, Routes} from 'react-router-dom';
import { Route } from 'react-router-dom';
import React from "react";
import {NextUIProvider} from "@nextui-org/react";
import ReactDOM from 'react-dom/client'
import HomePage from "./HomePage.jsx";
import './index.css'
import UsersList from "./User/UsersList.jsx";
import BlogList from "./Blog/BlogList.jsx";
import {UserAdd} from "./User/UserAdd.jsx";
import {BlogAdd} from "./Blog/BlogAdd.jsx";
import {UserEdit} from "./User/UserEdit.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
        <NextUIProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route exact path="/blog" element={<BlogList/>}/>
                    <Route exact path="/users" element={<UsersList/>}/>
                    <Route exact path="/users/add" element={<UserAdd/>}/>
                    <Route exact path="/users/edit/:id" element={<UserEdit/>}/>
                    <Route exact path="/blog/add" element={<BlogAdd/>}/>
                </Routes>
            </BrowserRouter>
        </NextUIProvider>
)
