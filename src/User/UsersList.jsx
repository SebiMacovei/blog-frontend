import UserPost from "./UserPost.jsx";
import {Input} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import {Button} from "@nextui-org/react";
import {UserIcon} from './UserIcon.jsx';
import {Layout} from "../Layout.jsx";
import {Link} from "react-router-dom";
import axios from "axios";

function UsersList(props) {
    const [newUsers, setUsers] = useState([])
    useEffect(()=>{
        const headers ={
            "Content-Type" : "application/json"
        }
        axios.get("http://127.0.0.1:3000/users", {headers,data:null})
            .then( response => setUsers(response.data))
    },[])

    function erase(id) {

        axios.delete("http://127.0.0.1:3000/users/" + id).then(response => {
           const modifiedArray = newUsers.filter(user => {
                if(id !== user.id)
                    return true
                 else return false
            })
            setUsers(modifiedArray)
        })
    }
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
                                        img_src={user.img_url}
                                        id={user.id}
                                        key={user.id}
                                        deleteUser={erase}
                       ></UserPost>
                   })}
               </div>
           </div>
       </Layout>
    )
}

export default UsersList