import React from "react";
import { useMsal } from "@azure/msal-react";
import Button from "react-bootstrap/Button";

export const SignOutButton = () => {
    const { instance } = useMsal();

    const handleLogout = (logoutType) => {
        if (logoutType === "popup") {
            instance.logoutPopup({
                postLogoutRedirectUri: "/",
                mainWindowRedirectUri: "/" 
            });
        }
    }

    return (
        <Button variant="secondary" className="ml-auto" onClick={() => handleLogout("popup")}>Deslogar</Button>
    );
}