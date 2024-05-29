import React from "react";
import {Button, Card, CardBody, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {Link, NavLink} from "react-router-dom";

export function Layout(props) {
    return (<>
        <div className="h-full bg-transparent">
            <Navbar className={"flex max-w-full justify-between bg-lime-500"} maxWidth={"full"}>
                <NavbarBrand>
                    <p className="font-bold text-inherit">BLOGEST</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <NavLink
                            to="/"
                            className={({isActive}) => (isActive ? 'text-cyan-700 font-bold' : 'inactive')}
                        >
                            Home
                        </NavLink>
                    </NavbarItem>
                    <NavbarItem>
                        <NavLink
                            to="/blog"
                            className={({isActive}) => (isActive ? 'text-cyan-700 font-bold' : 'inactive')}
                        >
                            Blog
                        </NavLink>

                    </NavbarItem>
                    <NavbarItem>
                        <NavLink
                            to="/users"
                            className={({isActive}) => (isActive ? 'text-cyan-700 font-bold' : 'inactive')}
                        >
                            Users
                        </NavLink>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link href="src#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="primary" href="#" variant="flat">
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <div className={"flex justify-center  px-72"}>
                <Card className={"h-full px-40"}>
                    <CardBody>
                        {props.children}
                    </CardBody>
                </Card>
            </div>
        </div>
    </>
    )
}