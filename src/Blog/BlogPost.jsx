import React from "react";
import {Avatar, Button, Card, CardBody, CardFooter, CardHeader} from "@nextui-org/react";
import {UserIcon} from "../Authentication/UserIcon.jsx";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

function BlogPost(props) {
    const [isFollowed, setIsFollowed] = React.useState(false);
    const navigate = useNavigate();
    function deletePost(id) {
        axios.delete("http://127.0.0.1:3000/blog_posts/" + id, {
            headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("token")
            }
        })
            .then(response => {
                props.deletePost(id)
            })
    }
    function editPost(id){
        navigate("/blog/edit/"+ id);
    }
    return (
        <>
            <Card className="max-w-[34rem] h-[24rem]">
                <CardHeader className="justify-between">
                    <div className={"flex flex-row items-center gap-2 pr-11"}>
                        <Avatar isBordered radius="full" size="md"
                                src="https://scontent.fclj2-1.fna.fbcdn.net/v/t39.30808-6/434831768_7434942496591463_9104900983529550182_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EiDTR0wUQ5EQ7kNvgHiGiSy&_nc_ht=scontent.fclj2-1.fna&oh=00_AYC02qEL3be0vv7GhTQEq1XisF_hi140BneVKFs9UMkTVg&oe=664E9F8E"/>
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
                        <Button onClick={() => editPost(props.id)} color="secondary" variant="shadow">
                            EDIT
                        </Button>
                        <Button onClick={e => deletePost(props.id)} color="danger" variant="bordered"
                                startContent={<UserIcon/>}>
                            DELETE POST
                        </Button>

                    </div>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400 align-center">
                    <div className={"text-center"}>
                        <div>
                            <p className="font-semibold text-default-400 text-small">{props.title}</p>
                        </div>
                        <p dangerouslySetInnerHTML={{__html: props.content}}>
                        </p>
                    </div>
                </CardBody>
                <CardFooter className="justify-around">
                    <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">{props.followers}</p>
                        <p className=" text-default-400 text-small">Following</p>
                    </div>
                    <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">{props.views}</p>
                        <p className="text-default-400 text-small">Accesari</p>
                    </div>
                    <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">{props.date}</p>
                    </div>
                    <Link to={"/blog/" + props.id}>
                        <Button>Comments</Button>
                    </Link>

                </CardFooter>
            </Card>
        </>)
}

export default BlogPost