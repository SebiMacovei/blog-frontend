import UserPost from "./UserPost.jsx";
import {Input} from "@nextui-org/react";
import React, {useState} from "react";
import {Button} from "@nextui-org/react";
import {UserIcon} from './UserIcon.jsx';
import {Layout} from "../Layout.jsx";
import {Link} from "react-router-dom";

function UsersList(props) {
    const users = [
        {
            name: "Eugen Eudoxiu",
            username: "@eugeneudoxiu",
            img_src: "https://scontent.fclj2-1.fna.fbcdn.net/v/t39.30808-6/357380804_973353643876888_3600059926028031270_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3PObx4dzDX4Q7kNvgFsgPJS&_nc_ht=scontent.fclj2-1.fna&oh=00_AYAzJ1XR-N36uVLtE-RbA61Wsr5vTNHZCWV6TsaD0XBGjQ&oe=66511690"
        },
        {
            name: "Marcelino Tutocuri",
            username: "@MarcelinoTutocuri",
            img_src: "https://scontent.fclj2-1.fna.fbcdn.net/v/t39.30808-6/382714106_675962537811718_4166143995129006549_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CnTms41kCFgQ7kNvgFSQhAa&_nc_ht=scontent.fclj2-1.fna&oh=00_AYC1yR_FXCgtSsNbKSniXmhbFpeVqhMAluhWVW9Az8rX7g&oe=66512F14"
        },
        {
            name: "Patheon Calinachio",
            username: "@PatheonCalinachio",
            img_src: "https://scontent.fclj2-1.fna.fbcdn.net/v/t1.6435-9/86601678_2722707391145385_695126442379313152_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JBEeBzNiGbIQ7kNvgG2k-cV&_nc_ht=scontent.fclj2-1.fna&oh=00_AYDBzukCk4jd6AdMSFRtQeAlklCkJBB16c_mDwC1eshNYw&oe=6672D6A2"
        }
    ]
    const [newUsers, setUsers] = useState(()=> {
        return users
    })

    return (
       <Layout>
           <div>
               <Link className={"flex justify-center pb-24 pt-16"} to={"add"}>
                   <Button color="primary" variant="ghost">
                       New User
                   </Button>
               </Link>
               <div className={props.className}>
                   {newUsers.map(user => {
                       return <UserPost name={user.name}
                                        username={user.username}
                                        img_src={user.img_src}
                                        key={user.img_src}></UserPost>
                   })}
               </div>
           </div>
       </Layout>
    )
}

export default UsersList