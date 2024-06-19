import UserPost from "./UserPost.jsx";
import {Input} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import {Button} from "@nextui-org/react";
import {UserIcon} from '../Authentication/UserIcon.jsx';
import {Layout} from "../Layout.jsx";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    User,
    Chip,
    Tooltip,
    getKeyValue
} from "@nextui-org/react";
import {EditIcon} from "./.././Design-Elements/EditIcon_t";
import {DeleteIcon} from "./.././Design-Elements/DeleteIcon_t";
import {EyeIcon_t} from ".././Design-Elements/EyeIcon_t.jsx";

const statusColorMap = {
    true: "success",
    false: "danger"
};
const columns = [
    {name: "NAME", uid: "name"},
    {name: "STATUS", uid: "status"},
    {name: "ACTIONS", uid: "actions"},
];

function UsersList(props) {
    const [newUsers, setUsers] = useState([])
    const navigate = useNavigate();
    const renderCell = React.useCallback((user, columnKey) => {
        const cellValue = user[columnKey];

        switch (columnKey) {
            case "name":
                return (
                    <User
                        avatarProps={{radius: "lg", src: user.img_url}}
                        description={user["username"]}
                        name={cellValue}
                    >
                        {user.username}
                    </User>
                );
            case "status":
                return (
                    <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
                        {cellValue === true ? "Active" : "Inactive"}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon_t/>
              </span>
                        </Tooltip>
                        <Tooltip content="Edit user">
                            <div onClick={() =>navigate("/users/edit/" + user.id)} className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EditIcon/>
                            </div>
                        </Tooltip>
                        <Tooltip color="danger" content="Delete user">
                            <div onClick={() => erase(user.id)} className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon/>
                            </div>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    }, [newUsers]);
    useEffect(() => {
        const headers = {
            "Content-Type": "application/json",
            "authorization": localStorage.getItem("token")
        }
        axios.get("http://127.0.0.1:3000/users", {headers, data: null})
            .then(response => setUsers(response.data))
    }, [])

    function erase(id) {

        axios.delete("http://127.0.0.1:3000/users/" + id,{
            headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("token")
            }}).then(response => {
            const modifiedArray = newUsers.filter(user => {
                if (id !== user.id)
                    return true
                else return false
            })
            console.log(modifiedArray)
            setUsers(modifiedArray)
        })
    }

    return (
        <Layout>
            <div>
                <Table aria-label="Example table with custom cells">
                    <TableHeader columns={columns}>
                        {(column) => (
                            <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                                {column.name}
                            </TableColumn>
                        )}
                    </TableHeader>
                    <TableBody items={newUsers}>
                        {(item) => (
                            <TableRow key={item.id}>
                                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </Layout>
    )
}

export default UsersList