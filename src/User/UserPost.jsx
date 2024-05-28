import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import {UserIcon} from "./UserIcon.jsx";
import {Link} from "react-router-dom";

function UserPost(props) {
        console.log(props)
        return (
            <Card
                isFooterBlurred
                radius="lg"
                className="border-none"
            >
                <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    height={200}
                    src={props.img_src}
                    width={200}
                />
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny ">{props.name}</p>
                    <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" >
                        {props.username}
                    </Button>
                    <Link to={"/users/edit/"+ props.id}>
                        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                        Edit
                    </Button>
                    </Link>
                    <Button onClick={e => props.deleteUser(props.id) } color="danger" variant="bordered" startContent={<UserIcon/>}>
                        Delete user
                    </Button>
                </CardFooter>
            </Card>
        )
}
export default UserPost