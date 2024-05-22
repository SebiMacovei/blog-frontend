import React from "react";
import {Button, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {Link, NavLink} from "react-router-dom";

export function Layout(props) {
    return (
        <>
            <Navbar>
                <NavbarBrand>
                    <p className="font-bold text-inherit">SEBITRANS</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'text-green-600 font-bold' : 'inactive')}
                        >
                            Home
                        </NavLink>
                    </NavbarItem>
                    <NavbarItem>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) => (isActive ? 'text-green-600 font-bold' : 'inactive')}
                        >
                            Blog
                        </NavLink>

                    </NavbarItem>
                    <NavbarItem>
                        <NavLink
                            to="/users"
                            className={({ isActive }) => (isActive ? 'text-green-600 font-bold' : 'inactive')}
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
            {props.children}
        </>
    )
}