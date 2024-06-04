import React, {useEffect, useState} from "react";
import {Layout} from "../Layout.jsx";
import {Button, Input, Select, SelectItem} from "@nextui-org/react";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from "axios";
import {useParams} from "react-router-dom";

export function BlogEdit(props) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [users, setUsers] = useState([])
    const [author, setAuthor] = useState("")
    let {id} = useParams()



    useEffect(() => {
        axios.get("http://127.0.0.1:3000/users")
            .then(response => {
                const options = response.data.map(user => {
                    return {key: user.name, label: user.name}
                })
                setUsers(options)
            })
    }, [])
    useEffect(() => {
        axios.get("http://127.0.0.1:3000/blog_posts/" + id)
            .then(response => {
                console.log(response.data)
                setTitle(response.data.title)
                setContent(response.data.content)
                setAuthor(response.data.author)
            })
    }, [])
    const editPost = () => {
        axios.patch("http://127.0.0.1:3000/blog_posts/" + id, {
            title: title,
            content: content,
            author: author
        }).then(response => {
            setTitle("")
            setContent("")
            window.location.href = "/blog"
        })
    }

    return (
        <Layout>
            <div className={"flex h-[calc(100%-64px)] justify-center items-center"}>
                <div
                    className="flex max-w-[600px] max-h-[600px] flex-col gap-6 px-8 py-8 rounded-2xl flex justify-center items-top bg-amber-200 from-pink-500 to-yellow-500 text-white shadow-lg">
                    <Input onChange={e => setTitle(e.target.value)}
                           value={title}
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
                              data={content}
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
                            selectedKeys ={[author]}
                            onChange={e => setAuthor(e.target.value)}
                        >
                            {users.map((user) => (
                                <SelectItem key={user.key}>
                                    {user.label}
                                </SelectItem>
                            ))}
                        </Select>
                        <div className={"flex justify-center"}>
                            <Button onClick={e => editPost()} color="success">
                                EDIT POST
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
