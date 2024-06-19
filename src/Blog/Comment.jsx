import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";
import {UserIcon} from "../Authentication/UserIcon.jsx";
import axios from "axios";
export function Comment(props) {
    function deleteComm(){
        axios.delete("http://127.0.0.1:3000/comments/" + props.comment.id,{
            headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("token")
            }
        }).then(response => {
           props.setComments(props.comments.filter(comment => {
                if(comment.id === response.data[0].id)
                    return false
                else
                    return true
            }))
        })
    }
    return(
        <div className={"w-full p-5"}>
            <Card>
                <CardHeader className="flex gap-3 justify-around">
                    <div className="flex flex-col ">
                        <p className="text-md">{props.comment.user.email}</p>
                    </div>
                    <Button onClick={() => deleteComm()} color="danger" variant="bordered" startContent={<UserIcon/>}>
                        Delete Comment
                    </Button>
                </CardHeader>
                <Divider/>
                <CardBody>
                    {props.comment.content}
                </CardBody>
                <Divider/>
            </Card>
        </div>
    )
}