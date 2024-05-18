import {Avatar, Button, Card, CardBody, CardFooter, CardHeader} from "@nextui-org/react";
import React, {useState} from "react"
import BlogPost from "./BlogPost.jsx";

function PostList(props) {
    const [posts, setPosts] = useState([
        {
            name: "Gelu",
            content: "Am pla mare",
            title: "Am aflat ceva nou!!",
            id: crypto.randomUUID(),
            views: "321312312",
            followers: "321312321",
            date: new Date().toUTCString()
        },
        {
            name: "Sis",
            content: "Dau 20 de milioane pe vopsit",
            title: "Sunt nebuna!",
            id: crypto.randomUUID(),
            views: "321321321",
            followers: "421421412",
            date: new Date().toUTCString()
        }
    ])
    return (
        <>
        <div className={props.className}>
            {posts.map(post => {
                return <BlogPost name={post.name}
                                 content={post.content}
                                 title={post.title}
                                 id={post.id}
                                 views={post.views}
                                 followers={post.followers}
                                 date={post.date}
                                 key={post.id}
                >< /BlogPost>
            })}
        </div>
        </>
    )
}

export default PostList