import React from "react";
import {Avatar, Button, Card, CardBody, CardFooter, CardHeader} from "@nextui-org/react";

function BlogPost(props) {
    const [isFollowed, setIsFollowed] = React.useState(false);

    return (
        <>
            <Card className="max-w-[600px] h-[600px]">
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        <Avatar isBordered radius="full" size="md"
                                src="https://scontent.fclj2-1.fna.fbcdn.net/v/t39.30808-6/434831768_7434942496591463_9104900983529550182_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EiDTR0wUQ5EQ7kNvgHiGiSy&_nc_ht=scontent.fclj2-1.fna&oh=00_AYC02qEL3be0vv7GhTQEq1XisF_hi140BneVKFs9UMkTVg&oe=664E9F8E"/>
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">{props.name}</h4>
                        </div>
                    </div>
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
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400 align-center">
                    <div className={"text-center"}>
                        <div>
                            <p className="font-semibold text-default-400 text-small">{props.title}</p>
                        </div>
                        <p>
                            {props.content}
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


                </CardFooter>
            </Card>
        </>)
}

export default BlogPost