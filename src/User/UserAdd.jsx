import React, {useState} from "react";
import {Button, Input} from "@nextui-org/react";
import {UserIcon} from "./UserIcon.jsx";
import {Layout} from "../Layout.jsx";

export function UserAdd() {
    const [newName, setName] = useState("")
    const [newUsername, setUsername] = useState("")
    const [newImg, setImg] = useState("")

    function addUser() {
        if (newName === "" || newUsername === "" || newImg === "") {
            return;
        }
        setName("")
        setUsername("")
        setImg("")
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
                    <Button onClick={e => addUser()} color="danger" variant="bordered" startContent={<UserIcon/>}>
                        Add User
                    </Button>
                </div>
            </div>
        </Layout>
    )
}