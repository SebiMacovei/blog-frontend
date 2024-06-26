import React, {useEffect, useState} from "react";
import {Layout} from "../Layout.jsx";
import {Button, Input} from "@nextui-org/react";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from "axios";
import {Select, SelectItem} from "@nextui-org/react";

export function BlogAdd() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [users, setUsers] = useState([])
    const [author, setAuthor] = useState("")

    function addPost() {
        axios.post("http://127.0.0.1:3000/blog_posts", {
            title: title,
            content: content,
            author: author
        }, {
            headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("token")
            }
        }).then(response => {
            setTitle("")
            setContent("")
            window.location.href = "/blog"
        })
    }

    useEffect(() => {
        axios.get("http://127.0.0.1:3000/users",{
            headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("token")
            }
        })
            .then(response => {
                const options = response.data.map(user => {
                    return {key: user.email, label: user.email}
                })
                setUsers(options)
            })
    }, [])


    return (
        <Layout>
            <div className={"flex h-[calc(100%-64px)] justify-center items-center"}>
                <div
                    className="flex max-w-[600px] max-h-[600px] flex-col gap-6 px-8 py-8 rounded-2xl flex justify-center items-top bg-amber-200 from-pink-500 to-yellow-500 text-white shadow-lg">
                    <Input onChange={e => setTitle(e.target.value)}
                           label="Title:"
                           isClearable
                           radius="lg"
                           classNames={{
                               label: "text-black/50 dark:text-white/90",
                               input: [
                                   "bg-red-200",
                                   "text-black/90 dark:text-white/90",
                                   "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                               ],
                               innerWrapper: "bg-red-200",
                               inputWrapper: [
                                   "shadow-xl",
                                   "bg-red-200",
                                   "dark:bg-default/60",
                                   "backdrop-blur-xl",
                                   "backdrop-saturate-200",
                                   "hover:bg-default-200/70",
                                   "dark:hover:bg-default/70",
                                   "group-data-[focus=true]:bg-default-200/50",
                                   "dark:group-data-[focus=true]:bg-default/60",
                                   "!cursor-text",
                               ],
                           }}
                           placeholder="Add a title to your blog..."
                    />
                    <CKEditor color={"blue"}
                              editor={ClassicEditor}
                              data=""
                              onChange={(event, editor) => {
                                  setContent(editor.getData());
                              }}
                    />
                    <div className={"flex flex-row justify-around"}>
                        <Select
                            key={"warning"}
                            color={"warning"}
                            label="Users"
                            placeholder="Select User"
                            className="max-w-xs"
                            onChange={e => setAuthor(e.target.value)}
                        >
                            {users.map((user) => (
                                <SelectItem key={user.key}>
                                    {user.label}
                                </SelectItem>
                            ))}
                        </Select>
                        <div className={"flex align-center items-center"}>
                            <Button onClick={e => addPost()} color="success">
                                ADD POST
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
