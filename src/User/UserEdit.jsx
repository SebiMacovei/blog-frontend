import React, {useEffect, useState} from "react";
import {Button, Input} from "@nextui-org/react";
import {UserIcon} from "./UserIcon.jsx";
import {Layout} from "../Layout.jsx";
import axios from "axios";
import {useParams} from "react-router-dom";

export function UserEdit() {
    let { id } = useParams();
    console.log(id)
    const [newName, setName] = useState("")
    const [newUsername, setUsername] = useState("")
    const [newImg, setImg] = useState("")
    useEffect(() => {
        const headers = {
            "Content-Type" : "application/json"
        }
        axios.get("http://127.0.0.1:3000/users/" + id, {
            headers,data:null
        }).then(response => {
            setName(response.data.name)
            setUsername(response.data.username)
            setImg(response.data.img_url)
        })
    },[])

    function editUser() {
        if (newName === "" || newUsername === "" || newImg === "") {
            return;
        }
        axios.patch("http://127.0.0.1:3000/users/" + id,{
            name: newName,
            username: newUsername,
            img_url: newImg
        }).then(response => {
            setName("")
            setUsername("")
            setImg("")
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
                    <Input onChange={e => setName(e.target.value)} value={newName} type="name" label="Name"/>
                </div>
                <div className={"max-w-64"}>
                    <Input onChange={e => setUsername(e.target.value)} value={newUsername} type="username"
                           label="Username"/>
                </div>
                <div className={"max-w-64"}>
                    <Input onChange={e => setImg(e.target.value)} value={newImg} type="img_src" label="Sursa Imaginii"/>
                </div>
                    <div className={"max-w-64"}>
                        <Button onClick={e => editUser()} color="danger" variant="bordered" startContent={<UserIcon/>}>
                            Edit User
                        </Button>
                    </div>
            </div>
        </Layout>
    )
}