import {Avatar, Button, Card, CardBody, CardFooter, CardHeader} from "@nextui-org/react";
import React, {useEffect, useState} from "react"
import BlogPost from "./BlogPost.jsx";
import {Layout} from "../Layout.jsx";
import {Link} from "react-router-dom";
import axios from "axios";

function BlogList(props) {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const headers = {
            "Content-Type": "application/json",
        };
        axios.get('http://127.0.0.1:3000/posts',{headers, data:null})
            .then(function (response) {
               setPosts(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    }, [])
    return (
        <>
            <Layout>
                <Link className={"flex justify-center pb-24 pt-16"} to={"add"}>
                    <Button color="primary" variant="ghost">
                        New Blog
                    </Button>
                </Link>
                <div className={"grid grid-rows-4 grid-flow-col gap-4"}>
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
            </Layout>
        </>
    )
}

export default BlogList