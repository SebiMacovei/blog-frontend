import {Layout} from "../Layout.jsx";
import {Avatar, Button, Card, CardBody, CardFooter, CardHeader, Input} from "@nextui-org/react";
import {UserIcon} from "../Authentication/UserIcon.jsx";
import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Comment} from "./Comment.jsx";

export function BlogView(props) {
    const [isFollowed, setIsFollowed] = React.useState(false);
    const [email, setEmail] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [views, setViews] = useState(0)
    const [showComm, setShowComm] = useState(false)
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState(false)
    const navigate = useNavigate();
    let {id} = useParams();

    function editPost(id) {
        navigate("/blog/edit/" + id);
    }

    useEffect(() => {
        axios.get("http://127.0.0.1:3000/blog_posts/" + id, {
            headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("token")
            }
        }).then(response => {
            if (response.data === null)
                navigate("/blog")
            setTitle(response.data.title)
            setContent(response.data.content)
            setViews(response.data.views)
            setComments(response.data.comments)
            setEmail(response.data.user.email)
        })
    }, [])

    function toggleComm() {
        if (showComm === true)
            setShowComm(false)
        else
            setShowComm(true)
    }

    function addComm() {
        axios.post("http://127.0.0.1:3000/comments", {
            content: comment,
            blog_post_id: id
        }, {
            headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("token")
            }
        }).then(response => {
            setComments([...comments, response.data])
            setComment("")
        })
    }

    return (
        <Layout>
            <>
                <Card className="max-w-[34rem] h-[24rem]">
                    <CardHeader className="justify-between">
                        <div className={"flex flex-row items-center gap-2 pr-11"}>
                            <Avatar isBordered radius="full" size="md"
                                    src=""/>
                            <div>{email}</div>
                            <Button
                                className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                                color="primary"
                                radius="full"
                                size="sm"
                                variant={isFollowed ? "bordered" : "solid"}
                                onPress={() => setIsFollowed(!isFollowed)}
                            >
                                {isFollowed ? "Unfollow" : "Follow"}
                            </Button>
                        </div>
                        <div className={"flex gap-4"}>
                            <Button onClick={() => editPost(id)} color="secondary" variant="shadow">
                                EDIT
                            </Button>
                        </div>
                    </CardHeader>
                    <CardBody className="px-3 py-0 text-small text-default-400 align-center">
                        <div className={"text-center"}>
                            <div>
                                <p className="font-semibold text-default-400 text-small">{title}</p>
                            </div>
                            <p dangerouslySetInnerHTML={{__html: content}}>
                            </p>
                        </div>
                    </CardBody>
                    <CardFooter className="justify-around">
                        <div className="flex gap-1">
                            <p className="font-semibold text-default-400 text-small"></p>
                            <p className=" text-default-400 text-small">Following:</p>
                        </div>
                        <div className="flex gap-1">
                            <p className="font-semibold text-default-400 text-small"></p>
                            <p className="text-default-400 text-small">Accesari:</p>
                        </div>
                        <div className="flex gap-1">
                            <p className="font-semibold text-default-400 text-small"></p>
                            <p className="text-default-400 text-small">Data:</p>
                        </div>
                        <Button onClick={() => toggleComm()}>Comments</Button>
                    </CardFooter>
                    <div className={"overflow-y-scroll"}>
                        {
                            showComm ? <div className={"flex gap-5 flex-col content-center items-center"}>
                                    {
                                        comments.map(comment => {
                                            return <Comment comment={comment}
                                                            key={comment.id}
                                                            setComments={setComments}
                                                            comments={comments}/>
                                        })
                                    }
                                </div>
                                : null
                        }
                    </div>
                    <div className={"flex gap-2 items-center w-full px-3"}>
                        <Input className={"flex-grow"}
                               onChange={e => setComment(e.target.value)}
                               value={comment}
                               type="text" variant={"bordered"}
                               label="Write a comment"/>
                        <Button onClick={() => addComm()} size="sm">
                            ADD COMMENT
                        </Button>
                    </div>
                </Card>
            </>
        </Layout>
    )
}