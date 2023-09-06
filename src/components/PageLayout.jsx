import React from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
            <br />
            {props.children}
        </>
    );
};