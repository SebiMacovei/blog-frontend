import React, {useEffect, useState} from "react";
import {Button, Input} from "@nextui-org/react";
import {UserIcon} from "./UserIcon.jsx";
import {Layout} from "../Layout.jsx";
import axios from "axios";

export function UserRegister() {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    function addUser() {
        if (email === "" || password === "" ) {
            return;
        }
        axios.post("http://127.0.0.1:3000/signup",{
            "user":{ email: email, password: password }
        }).then(response => {
            setPassword("")
            setEmail("")
            window.location.href ="/users";
        })
    }

    return (
        <Layout>
            <div className="flex flex-col justify-center items-center pt-24 gap-4 ">
                <div className={"border border-amber-500"}>
                    Date Utilizator:
                </div>
                <div className={"max-w-64"}>
                    <Input onChange={e => setEmail(e.target.value)} value={email} label="Email"/>
                </div>
                <div className={"max-w-64"}>
                    <Input onChange={e => setPassword(e.target.value)} value={password} type="password" label="Password"/>
                </div>
                    <div className={"max-w-64"}>
                        <Button onClick={e => addUser()} color="danger" variant="bordered" startContent={<UserIcon/>}>
                            Add User
                        </Button>
                    </div>
            </div>
        </Layout>
    )
}